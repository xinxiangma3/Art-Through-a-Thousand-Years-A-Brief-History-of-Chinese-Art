import { Language } from '../i18n/translations';

export interface MultilingualChapter {
  id: string;
  number: {
    zh: string;
    tr: string;
    en: string;
  };
  title: {
    zh: string;
    tr: string;
    en: string;
  };
  period: {
    zh: string;
    tr: string;
    en: string;
  };
  keyPoints: {
    zh: string[];
    tr: string[];
    en: string[];
  };
  representativeWorks: {
    zh: string[];
    tr: string[];
    en: string[];
  };
  interactiveGame: {
    zh: string;
    tr: string;
    en: string;
  };
}

export const CHAPTERS_MULTILINGUAL: MultilingualChapter[] = [
  {
    id: "ch1",
    number: {
      zh: "第一编",
      tr: "1. Kısım",
      en: "Part I",
    },
    title: {
      zh: "原始及先秦美术",
      tr: "İlkel ve Qin Öncesi Sanat",
      en: "Prehistoric & Pre-Qin Art",
    },
    period: {
      zh: "约前200万年 - 前221年",
      tr: "MÖ ~2.000.000 – MÖ 221",
      en: "c. 2,000,000 BCE – 221 BCE",
    },
    keyPoints: {
      zh: [
        "仰韶文化彩陶人面鱼纹盆与马家窑涡纹彩陶之造型",
        "商周青铜礼器与铭文纹饰演变（后母戊大方鼎、四羊方尊）",
        "战国楚墓《人物龙凤帛画》《人物御龙帛画》对早期线条艺术之开拓",
      ],
      tr: [
        "Yangshao kültürü insan yüzlü balık desenli çömlekler ve Majiayao spiral motifleri",
        "Shang ve Zhou hanedanları bronz ritüel kapları (Houmuwu kazanı, Dört Koçlu vazo)",
        "Savaşan Devletler dönemi ipek resimleri ve erken Çin fırça çizgisi geleneği",
      ],
      en: [
        "Yangshao painted pottery fish-face basins and Majiayao dynamic spiral patterns",
        "Shang-Zhou bronze ritual vessels and intricate motifs (Houmuwu Ding, Four Rams Zun)",
        "Warring States Chu silk paintings pioneering early Chinese expressive brush lines",
      ],
    },
    representativeWorks: {
      zh: ["仰韶人面鱼纹彩陶盆", "后母戊大方鼎", "战国曾侯乙编钟", "人物龙凤帛画"],
      tr: ["İnsan Yüzlü Balık Çömlek", "Houmuwu Bronz Kazanı", "Zeng Marquis Çanları", "Ejderha ve Anka İpek Resmi"],
      en: ["Fish-Face Painted Basin", "Houmuwu Bronze Ding", "Zenghouyi Bianzhong Chimes", "Lady with Dragon and Phoenix"],
    },
    interactiveGame: {
      zh: "彩陶纹样与矿物调色演练",
      tr: "Çömlek Motifleri ve Mineral Renk Atölyesi",
      en: "Pottery Patterns & Mineral Pigment Workshop",
    },
  },
  {
    id: "ch2",
    number: {
      zh: "第二编",
      tr: "2. Kısım",
      en: "Part II",
    },
    title: {
      zh: "秦汉美术",
      tr: "Qin ve Han Sanatı",
      en: "Qin & Han Art",
    },
    period: {
      zh: "前221年 - 公元220年",
      tr: "MÖ 221 – MS 220",
      en: "221 BCE – 220 CE",
    },
    keyPoints: {
      zh: [
        "秦始皇陵兵马俑军阵之崇高写实气魄与雕塑工艺",
        "汉代画像石与画像砖（武氏祠神话与市井农耕图景）",
        "西汉马王堆一号汉墓T型彩绘帛画之“引魂升天”宇宙观",
      ],
      tr: [
        "Qin Shi Huang Terracotta Ordusu'nun anıtsal gerçekçiliği ve heykeltıraşlık ustalığı",
        "Han Hanedanı mezar kabartma taşları ve tuğlaları (mitoloji ve gündelik yaşam)",
        "Mawangdui T-şekilli ipek cenaze sancağı ve antik kozmoloji anlayışı",
      ],
      en: [
        "Monumental realism and sculptural craftsmanship of the Terracotta Army",
        "Han Dynasty pictorial stone reliefs and bricks depicting mythologies and agrarian life",
        "Mawangdui T-shaped painted silk banner revealing Han cosmology and ascent to heaven",
      ],
    },
    representativeWorks: {
      zh: ["秦兵马俑一号坑军阵", "马王堆T型帛画", "霍去病墓《马踏匈奴》", "长信宫灯"],
      tr: ["Terracotta Ordusu", "Mawangdui İpek Sancağı", "Atın Hun'u Çiğnemesi Heykeli", "Changxin Saray Kandili"],
      en: ["Terracotta Warriors", "Mawangdui Silk Banner", "Horse Trampling a Xiongnu", "Changxin Palace Lamp"],
    },
    interactiveGame: {
      zh: "汉画像石拓印与空间构图",
      tr: "Han Taş Kabartma ve Kompozisyon",
      en: "Han Relief Rubbing & Spatial Design",
    },
  },
  {
    id: "ch3",
    number: {
      zh: "第三编",
      tr: "3. Kısım",
      en: "Part III",
    },
    title: {
      zh: "魏晋南北朝隋唐美术",
      tr: "Wei-Jin, Sui ve Tang Sanatı",
      en: "Wei-Jin, Sui & Tang Art",
    },
    period: {
      zh: "公元220年 - 907年",
      tr: "MS 220 – 907",
      en: "220 CE – 907 CE",
    },
    keyPoints: {
      zh: [
        "顾恺之《洛神赋图》《女史箴图》与“以形写神”理论提出",
        "谢赫《古画品录》“六法论”对中国画法与画论之千古奠基",
        "敦煌莫高窟壁画、阎立本《步辇图》与吴道子“吴带当风”之盛唐气象",
      ],
      tr: [
        "Gu Kaizhi'nin 'Luo Nehri Perisi' ve biçim aracılığıyla ruhu yakalama teorisi",
        "Xie He'nin Altı Kuralı (Resim Sanatının Temel İlkeleri)",
        "Dunhuang Mogao Mağarası duvar resimleri, Yan Liben ve Wu Daozi'nin fırça dinamizmi",
      ],
      en: [
        "Gu Kaizhi's 'Nymph of the Luo River' and the doctrine of 'Depicting Spirit Through Form'",
        "Xie He's 'Six Canons of Painting' establishing foundational aesthetic criticism",
        "Dunhuang Mogao murals, Yan Liben's court paintings, and Wu Daozi's wind-swept drapery lines",
      ],
    },
    representativeWorks: {
      zh: ["顾恺之《洛神赋图》", "敦煌莫高窟《鹿王本生图》", "阎立本《步辇图》", "周昉《簪花仕女图》"],
      tr: ["Luo Nehri Perisi", "Geyik Kral Jataka Duvar Resmi", "İmparator Taizong Kabul Resmi", "Çiçek Takan Saray Kadınları"],
      en: ["Nymph of the Luo River", "Deer King Jataka Mural", "The Sedan Chair", "Court Ladies Adorning Their Hair"],
    },
    interactiveGame: {
      zh: "敦煌石青石绿矿物设色工坊",
      tr: "Dunhuang Mineral Renk Paleti",
      en: "Dunhuang Mineral Pigment Palette",
    },
  },
  {
    id: "ch4",
    number: {
      zh: "第四编",
      tr: "4. Kısım",
      en: "Part IV",
    },
    title: {
      zh: "五代两宋元代美术",
      tr: "Beş Hanedan, Song ve Yuan Sanatı",
      en: "Five Dynasties, Song & Yuan Art",
    },
    period: {
      zh: "公元907年 - 1368年",
      tr: "MS 907 – 1368",
      en: "907 CE – 1368 CE",
    },
    keyPoints: {
      zh: [
        "五代荆关董巨确立北方与江南山水画两大体系",
        "范宽《溪山行旅图》全景山水与郭熙《林泉高致》“三远法”透视学说",
        "王希孟《千里江山图》大青绿山水与张择端《清明上河图》市井长卷",
        "元四家（黄公望、倪瓒、王蒙、吴镇）开启文人抒情写意与逸品高标",
      ],
      tr: [
        "Kuzey ve Güney manzara okullarının doğuşu (Jing Hao, Dong Yuan)",
        "Fan Kuan 'Dağ ve Dere Arasında Seyahat' ve Guo Xi'nin Üç Uzaklık perspektif felsefesi",
        "Wang Ximeng 'Binlerce Li Nehirler ve Dağlar' ve Zhang Zeduan 'Qingming Nehri Boyunca'",
        "Yuan Dört Ustası ve edebiyatçı resminin (Wenrenhua) kişisel ifade zirvesi",
      ],
      en: [
        "Northern and Southern landscape schools established by Jing Hao and Dong Yuan",
        "Fan Kuan's monumental landscapes and Guo Xi's 'Three Distances' perspective in Linquan Gaozhi",
        "Wang Ximeng's 'A Panorama of Rivers and Mountains' and Zhang Zeduan's 'Qingming Festival'",
        "The Four Masters of Yuan Dynasty elevating literati ink expression and poetic ideals",
      ],
    },
    representativeWorks: {
      zh: ["范宽《溪山行旅图》", "王希孟《千里江山图》", "张择端《清明上河图》", "黄公望《富春山居图》"],
      tr: ["Dağ ve Dere Arasında Yolculuk", "Binlerce Li Nehirler ve Dağlar", "Qingming Festivali Boyunca", "Fuchun Dağlarında Yaşam"],
      en: ["Travelers Among Streams and Mountains", "A Panorama of Rivers and Mountains", "Along the River During Qingming", "Dwelling in the Fuchun Mountains"],
    },
    interactiveGame: {
      zh: "透视探索者·郭熙三远法与散点透视",
      tr: "Perspektif Kaşifi · Guo Xi Üç Uzaklık",
      en: "Perspective Explorer · Three Distances & Floating Point",
    },
  },
  {
    id: "ch5",
    number: {
      zh: "第五编",
      tr: "5. Kısım",
      en: "Part V",
    },
    title: {
      zh: "明清及近代美术",
      tr: "Ming, Qing ve Modern Dönem Sanatı",
      en: "Ming, Qing & Modern Art",
    },
    period: {
      zh: "公元1368年 - 1949年及现代",
      tr: "MS 1368 – 1949 ve Günümüz",
      en: "1368 CE – 1949 & Modern Era",
    },
    keyPoints: {
      zh: [
        "明代吴门画派（沈周、文徵明、唐寅、仇英）与董其昌“南北宗论”",
        "明末清初四僧（八大山人、石涛、弘仁、髡残）之个性解放与革新",
        "海上画派、岭南画派与齐白石、黄宾虹、潘天寿近现代国画文脉传承",
      ],
      tr: [
        "Ming dönemi Wu Okulu ustaları ve Dong Qichang'ın Kuzey-Güney Resim Ekolü kuramı",
        "Erken Qing dönemi Dört Keşiş (Bada Shanren, Shi Tao) ressamlarının yaratıcı özgürlüğü",
        "Şanghay Ekolü, Lingnan Ekolü, Qi Baishi ve modern Çin resmi geleneği",
      ],
      en: [
        "Ming Wu School masters and Dong Qichang's Northern and Southern Schools theory",
        "Early Qing Four Monks (Bada Shanren, Shitao) championing individualistic brush expression",
        "Shanghai School, Qi Baishi, and the modern ink painting lineage",
      ],
    },
    representativeWorks: {
      zh: ["八大山人水墨禽鸟", "石涛《黄山八胜图》", "齐白石《蛙声十里出山泉》", "潘天寿《记写雁荡山花》"],
      tr: ["Bada Shanren Kuş ve Balık", "Shi Tao Huangshan Manzarası", "Qi Baishi Kurbağa Sesleri", "Pan Tianshou Yandang Dağı Çiçekleri"],
      en: ["Bada Shanren Ink Birds", "Shitao Mount Huangshan", "Qi Baishi Frog Sounds from Mountain Spring", "Pan Tianshou Wildflowers of Mount Yandang"],
    },
    interactiveGame: {
      zh: "似与不似之间·现代写意画法鉴赏",
      tr: "Benzerlik ile Benzersizlik Arasında",
      en: "Between Likeness and Unlikeness",
    },
  },
];
