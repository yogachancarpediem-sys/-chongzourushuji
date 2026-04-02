/**
 * shader-bg.js — WebGL 着色器背景系统
 * 零依赖，纯原生 WebGL
 */

class ShaderBackground {
  constructor(canvas, fragSource) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl', { alpha: false, antialias: false, preserveDrawingBuffer: false });
    if (!this.gl) throw new Error('WebGL 不可用');

    this.mouse = [0.5, 0.5];
    this.running = false;
    this.startTime = performance.now();
    this.rafId = null;

    const vert = this._compile(VERTEX_SRC, this.gl.VERTEX_SHADER);
    const frag = this._compile(fragSource, this.gl.FRAGMENT_SHADER);
    this.program = this._link(vert, frag);
    this.gl.useProgram(this.program);

    this.uni = {
      time: this.gl.getUniformLocation(this.program, 'u_time'),
      res:  this.gl.getUniformLocation(this.program, 'u_resolution'),
      mouse: this.gl.getUniformLocation(this.program, 'u_mouse'),
    };

    const buf = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buf);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), this.gl.STATIC_DRAW);
    const loc = this.gl.getAttribLocation(this.program, 'a_position');
    this.gl.enableVertexAttribArray(loc);
    this.gl.vertexAttribPointer(loc, 2, this.gl.FLOAT, false, 0, 0);

    this._resize();
    window.addEventListener('resize', () => this._resize());
    canvas.addEventListener('mousemove', (e) => {
      const r = canvas.getBoundingClientRect();
      this.mouse[0] = (e.clientX - r.left) / r.width;
      this.mouse[1] = 1.0 - (e.clientY - r.top) / r.height;
    });
    canvas.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      const r = canvas.getBoundingClientRect();
      this.mouse[0] = (touch.clientX - r.left) / r.width;
      this.mouse[1] = 1.0 - (touch.clientY - r.top) / r.height;
    }, { passive: true });
  }

  _compile(src, type) {
    const gl = this.gl;
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  _link(v, f) {
    const gl = this.gl;
    const p = gl.createProgram();
    gl.attachShader(p, v);
    gl.attachShader(p, f);
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(p));
      return null;
    }
    return p;
  }

  _resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    if (w === 0 || h === 0) return; // 还没布局好，跳过
    this.canvas.width  = w * dpr;
    this.canvas.height = h * dpr;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  _render(ts) {
    if (!this.running) return;
    const gl = this.gl;
    const t = (ts - this.startTime) / 1000;
    gl.uniform1f(this.uni.time, t);
    gl.uniform2f(this.uni.res, this.canvas.width, this.canvas.height);
    gl.uniform2f(this.uni.mouse, this.mouse[0] * this.canvas.width, this.mouse[1] * this.canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    this.rafId = requestAnimationFrame(t => this._render(t));
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.startTime = performance.now();
    this.rafId = requestAnimationFrame(t => this._render(t));
  }

  stop() {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  destroy() {
    this.stop();
    this.gl.deleteProgram(this.program);
  }
}

const VERTEX_SRC = `
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`;

/* ============================================================
   开场页着色器 v2 — 水墨梦境（增强版）
   效果：水墨流动 + 远山 + 金色萤火 + 云雾 + 鼠标涟漪
   ============================================================ */
const OPENING_FRAG = `
precision highp float;
uniform float u_time;
uniform vec2  u_resolution;
uniform vec2  u_mouse;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), f.x),
             mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for(int i = 0; i < 6; i++) { v += a * noise(p); p = p * 2.02 + vec2(100.0); a *= 0.49; }
  return v;
}

/* Domain warping — 产生水墨流动的核心 */
float warp(vec2 p, float t) {
  vec2 q = vec2(fbm(p + vec2(0.0, 0.0) + t*0.06), fbm(p + vec2(5.2, 1.3) + t*0.08));
  vec2 r = vec2(fbm(p + 4.0*q + vec2(1.7, 9.2) + t*0.04), fbm(p + 4.0*q + vec2(8.3, 2.8) + t*0.035));
  return fbm(p + 4.0*r);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  float t = u_time * 0.3;

  /* === 调色板（亮度大幅提升） === */
  vec3 deepNight  = vec3(0.09, 0.07, 0.18);
  vec3 nightBlue  = vec3(0.14, 0.18, 0.36);
  vec3 inkWash    = vec3(0.06, 0.08, 0.16);
  vec3 gold       = vec3(1.0, 0.82, 0.35);
  vec3 amber      = vec3(0.70, 0.50, 0.20);
  vec3 mistW      = vec3(0.90, 0.85, 0.75);
  vec3 mtColor    = vec3(0.04, 0.05, 0.12);
  vec3 warmGlow   = vec3(0.55, 0.35, 0.15);

  /* === 1. 天空：从深蓝到靛蓝渐变 === */
  vec3 sky = mix(deepNight, nightBlue, pow(uv.y, 0.8));

  /* === 2. 水墨流动 (domain warping) — 大幅增强可见度 === */
  float ink1 = warp(p * 1.5, t);
  float ink2 = warp(p * 1.8 + vec2(t*0.03, -t*0.02), t * 0.6 + 3.0);
  float inkVal = (ink1 + ink2) * 0.5;

  /* 水墨区域用冷暖色调区分 */
  vec3 coolInk = mix(inkWash, nightBlue * 1.2, inkVal);
  vec3 warmInk = mix(amber * 0.4, warmGlow, smoothstep(0.5, 0.8, inkVal));
  vec3 inkCol = mix(coolInk, warmInk, smoothstep(0.45, 0.7, inkVal));

  /* 水墨明暗条纹 — 像宣纸上的墨迹浓淡 */
  float inkStripe = smoothstep(0.35, 0.65, inkVal) * 0.5 + smoothstep(0.65, 0.85, inkVal) * 0.3;

  /* === 3. 远山剪影（三层，更清晰） === */
  float m1 = fbm(vec2(uv.x * 3.0, 0.5)) * 0.12 + 0.10;
  float m2 = fbm(vec2(uv.x * 5.0 + 8.0, 1.5)) * 0.08 + 0.18;
  float m3 = fbm(vec2(uv.x * 7.0 + 16.0, 2.5)) * 0.06 + 0.26;
  float m1m = smoothstep(m1, m1 + 0.012, uv.y);
  float m2m = smoothstep(m2, m2 + 0.012, uv.y);
  float m3m = smoothstep(m3, m3 + 0.012, uv.y);
  vec3 mt = mix(mtColor * 0.5 + nightBlue * 0.15, mtColor * 0.7, m1m);
  mt = mix(mt, mtColor * 0.85, m2m);
  mt = mix(mt, mtColor, m3m);

  /* 山顶金色边缘光 */
  float rimGlow1 = smoothstep(0.015, 0.0, abs(uv.y - m1)) * 0.5;
  float rimGlow2 = smoothstep(0.015, 0.0, abs(uv.y - m2)) * 0.3;
  mt += gold * (rimGlow1 + rimGlow2) * 0.15;

  /* === 4. 云雾 — 更浓更明显 === */
  float mist1 = fbm(vec2(p.x * 1.0 + t * 0.02, p.y * 1.5 + t * 0.015));
  float mist2 = fbm(vec2(p.x * 2.0 - t * 0.012, p.y * 1.0 + t * 0.01) + 10.0);
  float mist = (mist1 * 0.3 + mist2 * 0.15);
  /* 云雾集中在山腰到中部 */
  mist *= smoothstep(0.10, 0.30, uv.y) * smoothstep(0.55, 0.30, uv.y);
  mist *= 2.0; // 加强可见度

  /* === 5. 金色萤火粒子 — 更大更亮 === */
  float sparkle = 0.0;
  for(float i = 0.0; i < 35.0; i += 1.0) {
    vec2 pos = vec2(
      hash(vec2(i, 1.0)) + sin(t * 0.25 + hash(vec2(i, 6.0)) * 6.28) * 0.04,
      fract(hash(vec2(i, 2.0)) + t * (0.008 + hash(vec2(i, 3.0)) * 0.015))
    );
    float d = length(uv - pos);
    float sz = 0.003 + hash(vec2(i, 4.0)) * 0.004;
    float twinkle = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(t * (1.0 + hash(vec2(i, 5.0)) * 2.5) + i), 2.0);
    sparkle += smoothstep(sz, 0.0, d) * twinkle;
  }

  /* === 6. 鼠标涟漪 === */
  vec2 mUV = u_mouse / u_resolution;
  vec2 mP = vec2(mUV.x * aspect, 1.0 - mUV.y);
  float mDist = length(p - mP);
  float ripple = sin(mDist * 15.0 - t * 3.0) * exp(-mDist * 3.0) * 0.12;

  /* === 7. 中心柔光（衬托标题区域） === */
  float glow = exp(-length((uv - vec2(0.5, 0.38)) * vec2(0.8, 1.2)) * 1.8) * 0.18;

  /* === 8. 底部金色渐变（连接山与地面） === */
  float bottomGlow = smoothstep(0.15, 0.0, uv.y) * 0.12;

  /* === 合成 === */
  vec3 c = sky;
  c = mix(c, inkCol, inkStripe * 0.6 + 0.15);
  c = mix(c, mt, smoothstep(0.15, 0.45, 1.0 - uv.y));
  c += mistW * mist;
  c += gold * sparkle * 1.0;
  c += amber * abs(ripple);
  c += warmGlow * glow;
  c += gold * bottomGlow;

  /* 暗角 */
  float vig = 1.0 - pow(length(uv - 0.5) * 1.1, 2.0);
  c *= mix(0.35, 1.0, clamp(vig, 0.0, 1.0));

  /* 胶片颗粒 */
  c += (hash(uv * 999.0 + fract(u_time * 0.1)) - 0.5) * 0.035;

  /* Gamma 校正 — 让暗部细节可见 */
  c = pow(max(c, vec3(0.0)), vec3(0.92));

  gl_FragColor = vec4(c, 1.0);
}
`;

/* ============================================================
   初始化
   ============================================================ */
let openingShader = null;

function initOpeningShader() {
  const canvas = document.getElementById('shader-canvas');
  if (!canvas) return null;

  // 移动端：降低 WebGL 负载，使用低分辨率渲染
  const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || window.innerWidth <= 640;

  try {
    requestAnimationFrame(() => {
      const bg = new ShaderBackground(canvas, OPENING_FRAG);
      openingShader = bg;

      // 移动端降低像素比以提升性能
      if (isMobile) {
        const origResize = bg._resize.bind(bg);
        bg._resize = function() {
          const dpr = Math.min(window.devicePixelRatio, 1.2); // 限制为 1.2x
          const w = bg.canvas.clientWidth;
          const h = bg.canvas.clientHeight;
          if (w === 0 || h === 0) return;
          bg.canvas.width  = w * dpr;
          bg.canvas.height = h * dpr;
          bg.gl.viewport(0, 0, bg.canvas.width, bg.canvas.height);
        };
        bg._resize(); // 立即应用
      }

      bg.start();
      document.getElementById('opening').classList.add('shader-active');
      console.log('[ShaderBG] 开场页着色器已启动' + (isMobile ? ' (移动端优化模式)' : ''));
    });
    return true;
  } catch(e) {
    console.warn('[ShaderBG] 初始化失败，回退到 CSS 背景:', e);
    canvas.style.display = 'none';
    return null;
  }
}

function pauseOpeningShader() {
  if (openingShader) openingShader.stop();
}

function resumeOpeningShader() {
  if (openingShader) openingShader.start();
}
