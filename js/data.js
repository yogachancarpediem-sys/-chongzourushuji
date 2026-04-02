/**
 * 《入蜀记》互动体验 - 原型数据
 * 按陆游入蜀时间顺序排列：山阴 → 枫桥 → 金山 → 黄州 → 巫山 → 夔州
 */

const STATIONS = [
  {
    id: "linan",
    name: "临安",
    modernName: "杭州·上城区",
    date: "乾道六年五月二十一日",
    dateTag: "五月",
    poem: {
      title: "临安春雨初霁",
      author: "陆游",
      lines: [
        "世味年来薄似纱，",
        "谁令骑马客京华。",
        "小楼一夜听春雨，",
        "深巷明朝卖杏花。"
      ],
      source: "陆游入京觐见，客居临安时所作，写尽世味人情之淡薄。"
    },
    diary: "二十一日。到临安。泊船候潮门外。明日，入见。",
    scenery: ["西湖", "灵隐寺", "候潮门", "御街"],
    characters: [{ name: "宋孝宗", desc: "南宋第二位皇帝，即位后欲北伐中原，召陆游入对" }],
    ancientModern: {
      ancient: "临安乃南宋都城，西湖烟雨如画，御街繁华热闹，是当时世界上最繁华的城市之一",
      modern: "如今的杭州是电商之都，西湖依然美得让人心醉，但候潮门早已淹没在城市化中，只留下一个地名",
      liuxiaoliu: "陆游大概没想到，他一心想去的四川打仗，结果南宋朝廷后来把他忘得比快递还快"
    },
    fragments: ["诗心碎片：临安春雨", "风物精华：西湖烟雨"],
    bgImage: "linan",
    description: "陆游到达南宋都城临安，觐见宋孝宗，入对北伐之策。此行目的本是赴任夔州通判，但临安一停，已可窥见南宋朝廷的繁华与矛盾。"
  },
  {
    id: "shanyin",
    name: "山阴",
    modernName: "绍兴·越城区",
    date: "乾道六年五月十八日",
    dateTag: "五月",
    poem: {
      title: "游山西村",
      author: "陆游",
      lines: [
        "莫笑农家腊酒浑，",
        "丰年留客足鸡豚。",
        "山重水复疑无路，",
        "柳暗花明又一村。"
      ],
      source: "此诗为陆游居乡时所作，写山阴乡村之景。"
    },
    diary: "十八日，晚移舟。宿行李于开元寺前。自山阴出发，沿浙东运河北上，经萧山渡钱塘江，以赴临安。",
    scenery: ["鉴湖", "兰亭", "沈园", "会稽山"],
    characters: [],
    ancientModern: {
      ancient: "山阴乃越州古称，鉴湖烟波浩渺，会稽山色葱郁，自晋代王羲之兰亭雅集以来，便是文人向往之地",
      modern: "如今的绍兴保留了大量水乡古镇风貌，鲁迅故里、沈园、兰亭都是热门景点，黄酒和臭豆腐依然是这座城市的灵魂",
      liuxiaoliu: "陆游老家的院子里大概刻满了\u201c不忘初心\u201d\u2014\u2014毕竟他一辈子都想去四川上阵杀敌"
    },
    fragments: ["诗心碎片：山阴出发", "风物精华：鉴湖烟波"],
    bgImage: "shanyin",
    description: "乾道六年五月十八日，陆游从故乡山阴出发，沿运河北上，开始了前往夔州的漫长旅途。"
  },
  {
    id: "fengqiao",
    name: "枫桥",
    modernName: "苏州·枫桥镇",
    date: "乾道六年六月十日",
    dateTag: "六月",
    poem: {
      title: "枫桥夜泊",
      author: "张继",
      lines: [
        "月落乌啼霜满天，",
        "江枫渔火对愁眠。",
        "姑苏城外寒山寺，",
        "夜半钟声到客船。"
      ],
      source: "唐人所谓\u201c半夜钟声到客船\u201d者。"
    },
    diary: "十日，至平江，以疾不入。沿城过盘门，望武丘楼塔，正如吾乡宝林，为之慨然。宿枫桥寺前，唐人所谓\u201c半夜钟声到客船\u201d者。",
    scenery: ["寒山寺", "枫桥", "武丘楼塔"],
    characters: [],
    ancientModern: {
      ancient: "夜泊枫桥寺，听寒山寺钟声，月光映照江面渔火",
      modern: "枫桥景区已商业化，寒山寺门票约20元，但夜半钟声的意境仍在每年除夕跨年时重现",
      liuxiaoliu: "千年前的张继大概想不到，他那一夜的无眠，竟让枫桥成了后世打工人的精神故乡"
    },
    fragments: ["诗心碎片：张继夜泊", "风物精华：寒山寺钟声"],
    bgImage: "fengqiao",
    description: "陆游因病未入苏州城，泊船枫桥寺前，感叹武丘楼塔与故乡宝林寺相似，引发思乡之情。"
  },
  {
    id: "jinshan",
    name: "金山",
    modernName: "镇江·金山寺",
    date: "乾道六年六月廿六日",
    dateTag: "六月",
    poem: {
      title: "金山寺偈",
      author: "苏轼",
      lines: [
        "僧于玉鉴光中坐，",
        "客蹋金鳌背上行。"
      ],
      source: "苏仪甫诗云此二句。仪甫果终于翰苑，当时以为诗谶。"
    },
    diary: "五鼓发船。是日，舟人始伐鼓。遂游金山，登玉鉴堂、妙高台，皆穷极壮丽，非昔比。玉鉴，盖取苏仪甫诗云：\u201c僧于玉鉴光中坐，客蹋金鳌背上行。\u201d仪甫果终于翰苑，当时以为诗谶。",
    scenery: ["玉鉴堂", "妙高台", "吞海亭", "金山寺"],
    characters: [{ name: "宝印长老", desc: "金山长老，嘉州人，住山近十年，兴造皆其力" }],
    ancientModern: {
      ancient: "登金山玉鉴堂、妙高台，观日出江中，天水皆赤，真伟观也",
      modern: "金山寺已成为镇江标志性景点，因\u300a白蛇传\u300b水漫金山闻名，但古代金山实为江中岛屿，清代才与陆地相连",
      liuxiaoliu: "现在的金山和陆游看到的完全不一样\u2014\u2014当年是江中孤岛，现在是陆地景点。长江填了不少啊！"
    },
    fragments: ["诗心碎片：苏轼诗谶", "风物精华：金山日出"],
    bgImage: "jinshan",
    description: "陆游游览金山寺，登上玉鉴堂和妙高台，感叹建筑壮丽远胜从前。次日观日出江中，天水皆赤。"
  },
  {
    id: "huangzhou",
    name: "黄州",
    modernName: "黄冈·黄州市",
    date: "乾道六年八月十八日",
    dateTag: "八月",
    poem: {
      title: "念奴娇\u00b7赤壁怀古",
      author: "苏轼",
      lines: [
        "大江东去，浪淘尽，",
        "千古风流人物。",
        "故垒西边，人道是，",
        "三国周郎赤壁。",
        "乱石穿空，惊涛拍岸，",
        "卷起千堆雪。",
        "江山如画，一时多少豪杰。"
      ],
      source: "东坡先生怪石供是也。"
    },
    diary: "十八日。食时方利，晡时至黄州。州最僻陋少事，杜牧之所谓\u201c平生睡足处，云梦泽南州\u201d。然自牧之、王元之出守，又东坡先生、张文潜谪居，进为名邦。泊临皐亭，东坡先生所尝寓。",
    scenery: ["赤壁矶", "东坡雪堂", "临皐亭", "四望亭"],
    characters: [{ name: "苏轼", desc: "曾谪居黄州，建雪堂，作前后赤壁赋" }],
    ancientModern: {
      ancient: "黄州本是僻陋小城，因杜牧、苏轼、张文潜先后到任或谪居而成为名邦",
      modern: "黄州因苏轼而闻名天下，东坡赤壁景区是当地最重要的文化名片，但真正的赤壁之战遗址其实在蒲圻（今赤壁市）",
      liuxiaoliu: "苏轼被贬黄州，本以为是人生低谷，结果写出了\u300a念奴娇\u300b\u300a赤壁赋\u300b\u2014\u2014堪称古代逆境翻盘第一人"
    },
    fragments: ["诗心碎片：东坡雪堂", "风物精华：赤壁奇石", "风物精华：怪石供"],
    bgImage: "huangzhou",
    description: "陆游抵达黄州，泊于临皐亭，次日游东坡雪堂。沿赤壁矶行，见五色奇石，即苏轼所谓怪石供。"
  },
  {
    id: "jiankang",
    name: "建康",
    modernName: "南京·鼓楼区",
    date: "乾道六年七月十五日",
    dateTag: "七月",
    poem: {
      title: "乌衣巷",
      author: "刘禹锡",
      lines: [
        "朱雀桥边野草花，",
        "乌衣巷口夕阳斜。",
        "旧时王谢堂前燕，",
        "飞入寻常百姓家。"
      ],
      source: "金陵乃六朝故都，自古兴亡之地。"
    },
    diary: "十五日。过建康。泊龙湾。游钟山、石头城。六朝旧都，故宫黍离，使人感慨。秦淮灯火如旧，而人事已非。",
    scenery: ["秦淮河", "乌衣巷", "石头城", "钟山"],
    characters: [{ name: "刘禹锡", desc: "唐代诗人，以金陵怀古诗闻名" }],
    ancientModern: {
      ancient: "建康乃六朝古都，秦淮河畔画舫如织，乌衣巷口夕阳斜照，兴亡之叹千年不绝",
      modern: "南京如今是江苏省会，夫子庙秦淮风光带热闹非凡，但夜晚的秦淮河仍能让人想起\u201c旧时王谢堂前燕\u201d",
      liuxiaoliu: "南京大概是国内最会\u201c怀古\u201d的城市\u2014\u2014走到哪儿都是\u201c此处曾经发生过大事\u201d"
    },
    fragments: ["诗心碎片：六朝旧梦", "风物精华：秦淮灯火", "风物精华：钟山风云"],
    bgImage: "jiankang",
    description: "陆游途经建康（今南京），游钟山、石头城。面对六朝故都的兴废之迹，秦淮河的灯火依旧，而人事已非。这段路程也是他从运河转入长江的重要节点。"
  },
  {
    id: "wushan",
    name: "巫山",
    modernName: "重庆·巫山县",
    date: "乾道六年十月廿三日",
    dateTag: "十月",
    poem: {
      title: "高唐赋（节选）",
      author: "宋玉",
      lines: [
        "昔者楚襄王与宋玉游于云梦之台，",
        "望高唐之观，其上独有云气。"
      ],
      source: "真人，即世所谓巫山神女也。"
    },
    diary: "二十三日。过巫山凝真观，谒妙用真人祠。真人，即世所谓巫山神女也。祠正对巫山，峯峦上入霄汉，山脚直插江中。议者谓太华、衡庐，皆无此奇。然十二峯者，不可悉见。所见八、九峯，惟神女峯最为纤丽奇峭，宜为仙真所托。",
    scenery: ["巫山十二峰", "神女峰", "凝真观", "一百八盘"],
    characters: [{ name: "巫山神女", desc: "即妙用真人，世传瑶姬化身，为巫山之魂" }],
    ancientModern: {
      ancient: "巫山十二峰，惟神女峰最为纤丽奇峭。传每八月十五夜月明时，有丝竹之音往来峰顶",
      modern: "巫山神女峰仍是三峡最壮丽的景观之一，长江三峡大坝建成后水位上涨，但神女峰依旧傲立云端",
      liuxiaoliu: "巫山神女大概是古代最出圈的女神了\u2014\u2014从屈原到宋玉到李白，谁没给她写过情书（赋）？"
    },
    fragments: ["诗心碎片：神女峰", "风物精华：巫山十二峰", "风物精华：丝竹之音"],
    bgImage: "wushan",
    description: "陆游过巫山凝真观，谒巫山神女祠，惊叹于十二峰之奇绝。所见八九峰中，神女峰最为纤丽奇峭。"
  },
  {
    id: "kuizhou",
    name: "夔州",
    modernName: "重庆·奉节县",
    date: "乾道六年十月廿七日",
    dateTag: "十月",
    poem: {
      title: "登高",
      author: "杜甫",
      lines: [
        "风急天高猿啸哀，",
        "渚清沙白鸟飞回。",
        "无边落木萧萧下，",
        "不尽长江滚滚来。",
        "万里悲秋常作客，",
        "百年多病独登台。",
        "艰难苦恨繁霜鬓，",
        "潦倒新停浊酒杯。"
      ],
      source: "杜甫寓居夔州时所作，被誉为\u201c古今七律第一\u201d。"
    },
    diary: "廿七日，到夔州。州在山麓，沙上最高处为州治。入户拜主印，次谒通判、判官厅。夔为峡中最高处，山川雄伟，非他郡可比。",
    scenery: ["白帝城", "瞿塘峡", "夔门", "八阵图"],
    characters: [
      { name: "杜甫", desc: "曾寓居夔州近两年，创作诗歌四百余首，其代表作多作于此" },
      { name: "李白", desc: "流放途中遇赦，于此写下《早发白帝城》" }
    ],
    ancientModern: {
      ancient: "夔州为入蜀门户，白帝城矗立峡口，瞿塘峡天下雄壮，夔门两岸如削",
      modern: "三峡大坝建成后水位上涨，白帝城已成江中孤岛景区，但夔门依旧雄伟壮观，是三峡最震撼的入口",
      liuxiaoliu: "李白\u201c朝辞白帝彩云间\u201d写的就是这里\u2014\u2014轻舟已过万重山，但陆游足足走了五个月才到"
    },
    fragments: ["诗心碎片：白帝城", "风物精华：瞿塘峡夔门", "风物精华：万里长江"],
    bgImage: "kuizhou",
    description: "历经五个多月的长途跋涉，陆游终于抵达夔州。白帝城在望，夔门巍峨，这段从山阴到夔州的诗旅画上了句号，但新的篇章即将展开。"
  }
];

const QUIZ_DATA = [
  {
    id: 1,
    poem: "临安春雨初霁",
    author: "陆游",
    question: "小楼一夜听春雨，______。",
    answer: "深巷明朝卖杏花",
    options: [
      "春风又绿江南岸",
      "柳暗花明又一村",
      "深巷明朝卖杏花",
      "映日荷花别样红"
    ],
    hint: "陆游客居临安时所作，一夜听雨，次晨卖花声起，最是江南春味。",
    stationId: "linan"
  },
  {
    id: 2,
    poem: "乌衣巷",
    author: "刘禹锡",
    question: "旧时王谢堂前燕，______。",
    answer: "飞入寻常百姓家",
    options: [
      "散落江南烟雨中",
      "犹唱后庭遗曲",
      "飞入寻常草堂前",
      "飞入寻常百姓家"
    ],
    hint: "建康乌衣巷曾是东晋王导、谢安两大名门望族的宅邸。",
    stationId: "jiankang"
  },
  {
    id: 3,
    poem: "枫桥夜泊",
    author: "张继",
    question: "姑苏城外寒山寺，______到客船。",
    answer: "夜半钟声",
    options: [
      "江枫渔火",
      "月落乌啼",
      "寒霜满天",
      "夜半钟声"
    ],
    hint: "陆游记：宿枫桥寺前，唐人所谓“半夜钟声到客船”者。",
    stationId: "fengqiao"
  },
  {
    id: 4,
    poem: "念奴娇·赤壁怀古",
    author: "苏轼",
    question: "大江东去，浪淘尽，______。",
    answer: "千古风流人物",
    options: [
      "千古风流人物",
      "卷起千堆雪",
      "一时多少豪杰",
      "三国周郎赤壁"
    ],
    hint: "这句写出了时间的无情与历史的沧桑。",
    stationId: "huangzhou"
  },
  {
    id: 5,
    poem: "游山西村",
    author: "陆游",
    question: "山重水复疑无路，______。",
    answer: "柳暗花明又一村",
    options: [
      "柳暗花明又一村",
      "暗香浮动月黄昏",
      "铁马秋风大散关",
      "春风又绿江南岸"
    ],
    hint: "山回路转、柳暗花明，常用来比喻困境中出现转机。",
    stationId: "shanyin"
  },
  {
    id: 6,
    poem: "钗头凤·红酥手",
    author: "陆游",
    question: "红酥手，黄縢酒，______。",
    answer: "满城春色宫墙柳",
    options: [
      "东风恶欢情薄",
      "桃花落闲池阁",
      "山盟虽在锦书难托",
      "满城春色宫墙柳"
    ],
    hint: "陆游与唐婉的千古爱情悲剧，题于沈园壁上。",
    stationId: "shanyin"
  },
  {
    id: 7,
    poem: "冬夜读书示子聿",
    author: "陆游",
    question: "纸上得来终觉浅，______。",
    answer: "绝知此事要躬行",
    options: [
      "书到用时方恨少",
      "绝知此事要躬行",
      "少壮工夫老始成",
      "功夫不负有心人"
    ],
    hint: "陆游教子读书的名句，强调亲身实践的重要性。",
    stationId: "linan"
  },
  {
    id: 8,
    poem: "卜算子·咏梅",
    author: "陆游",
    question: "零落成泥碾作尘，______。",
    answer: "只有香如故",
    options: [
      "无意苦争春",
      "寂寞开无主",
      "只有香如故",
      "更着风和雨"
    ],
    hint: "陆游以梅花自喻，即便粉身碎骨，气节不改。",
    stationId: "shanyin"
  },
  {
    id: 9,
    poem: "秋夜将晓出篱门迎凉有感二首·其二",
    author: "陆游",
    question: "三万里河东入海，______。",
    answer: "五千仞岳上摩天",
    options: [
      "遗民泪尽胡尘里",
      "南望王师又一年",
      "五千仞岳上摩天",
      "中原北望气如山"
    ],
    hint: "陆游秋夜感怀中原沦陷，山河壮丽却无法收复。",
    stationId: "jiankang"
  },
  {
    id: 10,
    poem: "书愤",
    author: "陆游",
    question: "楼船夜雪瓜洲渡，______。",
    answer: "铁马秋风大散关",
    options: [
      "镜中衰鬓已先斑",
      "铁马秋风大散关",
      "塞上长城空自许",
      "出师一表真名世"
    ],
    hint: "陆游追忆自己从军生涯中最壮烈的两次战役。",
    stationId: "jinshan"
  },
  {
    id: 11,
    poem: "金错刀行",
    author: "陆游",
    question: "楚虽三户能亡秦，______。",
    answer: "岂有堂堂中国空无人",
    options: [
      "千年史册耻无名",
      "一片丹心报天子",
      "岂有堂堂中国空无人",
      "丈夫五十功未立"
    ],
    hint: "陆游借楚国遗民复国的典故，表达收复中原的坚定信念。",
    stationId: "jinshan"
  },
  {
    id: 12,
    poem: "诉衷情·当年万里觅封侯",
    author: "陆游",
    question: "此生谁料，______。",
    answer: "心在天山，身老沧洲",
    options: [
      "尘暗旧貂裘",
      "胡未灭鬓先秋",
      "心在天山，身老沧洲",
      "匹马戍梁州"
    ],
    hint: "壮志未酬的悲凉——心在战场，身却老于乡野。",
    stationId: "kuizhou"
  },
  {
    id: 13,
    poem: "示儿",
    author: "陆游",
    question: "王师北定中原日，______。",
    answer: "家祭无忘告乃翁",
    options: [
      "但悲不见九州同",
      "死去元知万事空",
      "遗民泪尽胡尘里",
      "家祭无忘告乃翁"
    ],
    hint: "陆游临终遗嘱，至死不忘收复中原。",
    stationId: "kuizhou"
  }
];


const ACHIEVEMENTS = [
  { id: "first_station", name: "初踏诗途", desc: "解锁第一个诗旅驿站", icon: "\u{1F38B}" },
  { id: "three_stations", name: "行吟三镇", desc: "解锁三个诗旅驿站", icon: "\u{1F4DC}" },
  { id: "all_stations", name: "诗旅达人", desc: "解锁全部诗旅驿站", icon: "\u{1F3C6}" },
  { id: "first_quiz", name: "诗词新秀", desc: "答对第一道诗词题", icon: "\u2728" },
  { id: "all_quiz", name: "诗词鉴赏家", desc: "答对所有诗词题", icon: "\u{1F393}" },
  { id: "half_fragments", name: "诗心初聚", desc: "收集一半诗心碎片", icon: "\u{1F4AB}" },
  { id: "all_fragments", name: "诗意圆满", desc: "收集全部诗心碎片", icon: "\u{1F31F}" }
];

function getTotalFragments() {
  return STATIONS.reduce(function(sum, s) { return sum + s.fragments.length; }, 0);
}

function checkAchievement(id) {
  var a = ACHIEVEMENTS.find(function(x) { return x.id === id; });
  if (!a) return false;
  switch(id) {
    case "first_station": return state.visitedStations.length >= 1;
    case "three_stations": return state.visitedStations.length >= 3;
    case "all_stations": return state.visitedStations.length >= STATIONS.length;
    case "first_quiz": return state.quizCorrect >= 1;
    case "all_quiz": return state.quizCorrect >= QUIZ_DATA.length;
    case "half_fragments": return state.collectedFragments.length >= getTotalFragments() / 2;
    case "all_fragments": return state.collectedFragments.length >= getTotalFragments();
    default: return false;
  }
}
