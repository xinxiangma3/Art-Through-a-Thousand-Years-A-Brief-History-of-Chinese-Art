export interface ArtQuote {
  id: string;
  quote: {
    zh: string;
    tr: string;
    en: string;
  };
  author: {
    zh: string;
    tr: string;
    en: string;
  };
  role: {
    zh: string;
    tr: string;
    en: string;
  };
  dynastyOrEra: {
    zh: string;
    tr: string;
    en: string;
  };
  source: {
    zh: string;
    tr: string;
    en: string;
  };
  insight: {
    zh: string;
    tr: string;
    en: string;
  };
  highlightColor: 'zhusha' | 'shiqing' | 'shilv';
}

export const ART_QUOTES: ArtQuote[] = [
  {
    id: 'gukaizhi-1',
    quote: {
      zh: '以形写神，迁想妙得。',
      tr: 'Ruh biçimle tasvir edilir, derin tefekkürle yüce anlam yakalanır.',
      en: 'Depict the spirit through form; grasp subtle wonder through deep contemplation.',
    },
    author: {
      zh: '顾恺之',
      tr: 'Gu Kaizhi',
      en: 'Gu Kaizhi',
    },
    role: {
      zh: '东晋著名画家、“六朝画绝”',
      tr: 'Doğu Jin Dönemi Ressamı, Klasik Usta',
      en: 'Eastern Jin Master Painter',
    },
    dynastyOrEra: {
      zh: '东晋 · 魏晋风度',
      tr: 'Doğu Jin Hanedanı',
      en: 'Eastern Jin Dynasty',
    },
    source: {
      zh: '《论画》',
      tr: 'Resim Üzerine İncelemeler',
      en: 'Treatise on Painting',
    },
    insight: {
      zh: '不仅追求形体准确，更强调传达物象的神态与内在生命力。',
      tr: 'Yalnızca dış benzerlik değil, varlığın içsel canlılığı ve manevi özü hedeflenir.',
      en: 'Art must capture the living spiritual essence of the subject, not mere surface likeness.',
    },
    highlightColor: 'zhusha',
  },
  {
    id: 'xiehe-1',
    quote: {
      zh: '气韵生动，骨法用笔，应物象形，随类赋彩，经营位置，传移模写。',
      tr: 'Canlı ritim, fırçada kemik gücü, nesneye uygun biçim, doğasına göre renklendirme, kompozisyon düzeni ve ustalardan aktarım.',
      en: 'Spirit resonance, bone method in brushwork, correspondence to the object, suitability to type in color, placement and composition, transmission through copying.',
    },
    author: {
      zh: '谢赫',
      tr: 'Xie He',
      en: 'Xie He',
    },
    role: {
      zh: '南齐著名画论家',
      tr: 'Güney Qi Dönemi Sanat Kuramcısı',
      en: 'Southern Qi Art Theorist & Critic',
    },
    dynastyOrEra: {
      zh: '南齐 · 六朝画论',
      tr: 'Güney Qi Hanedanı',
      en: 'Southern Qi Dynasty',
    },
    source: {
      zh: '《古画品录》“六法论”',
      tr: 'Altı Resim İlkesi',
      en: 'The Six Canons of Painting',
    },
    insight: {
      zh: '中国古典绘画美学与教学的根本纲领，千古品评准则。',
      tr: 'Çin klasik resim kuramının ve sanat eğitiminin asırlara yayılan temel manifestosu.',
      en: 'The foundational principles of Chinese pictorial aesthetics and art education.',
    },
    highlightColor: 'shiqing',
  },
  {
    id: 'shitao-1',
    quote: {
      zh: '搜尽奇峰打草稿。笔墨当随时代。',
      tr: 'Bütün sıra dışı dağ zirvelerini tara ve taslak yap. Fırça ve mürekkep çağını takip etmelidir.',
      en: 'Search all marvelous peaks to make sketches. Brush and ink must evolve with the times.',
    },
    author: {
      zh: '石涛（原济）',
      tr: 'Shi Tao',
      en: 'Shi Tao',
    },
    role: {
      zh: '清初“四僧”之一、画论大家',
      tr: 'Qing Hanedanı "Dört Keşiş" Ressamından Biri',
      en: 'Early Qing Master, One of the Four Monks',
    },
    dynastyOrEra: {
      zh: '清初 · 画论革新',
      tr: 'Erken Qing Dönemi',
      en: 'Early Qing Dynasty',
    },
    source: {
      zh: '《苦瓜和尚画语录》',
      tr: 'Kugua Keşişi Resim Sözleri',
      en: 'Quotations on Painting by Monk Bitter Gourd',
    },
    insight: {
      zh: '既要师法自然积累生动感受，又要在时代中勇于突破与创新。',
      tr: 'Doğadan beslenmeli, aynı zamanda çağın getirdiği yeni anlayışla cesurca yenilik yapılmalıdır.',
      en: 'Draw vitality directly from nature while fearlessly innovating for one\'s own era.',
    },
    highlightColor: 'shilv',
  },
  {
    id: 'baishi-1',
    quote: {
      zh: '作画妙在似与不似之间，太似为媚俗，不似为欺世。',
      tr: 'Resmin sırrı benzerlik ile benzemezlik arasındadır; fazla benzerlik bayağılıktır, hiç benzememek ise aldatmacadır.',
      en: 'The subtlety of painting lies between likeness and unlikeness; too like is vulgar, unalike is deceptive.',
    },
    author: {
      zh: '齐白石',
      tr: 'Qi Baishi',
      en: 'Qi Baishi',
    },
    role: {
      zh: '近现代中国画大写意宗师',
      tr: 'Modern Çin Resmi Ustası',
      en: 'Modern Chinese Painting Master',
    },
    dynastyOrEra: {
      zh: '近现代 · 大写意画风',
      tr: 'Modern Dönem Çin Sanatı',
      en: 'Modern Chinese Art',
    },
    source: {
      zh: '《白石老人画语录》',
      tr: 'Baishi Resim Sözleri',
      en: 'Quotations of Old Man Baishi',
    },
    insight: {
      zh: '写意画精妙在艺术提炼，追求源于现实而高于现实的诗意意象。',
      tr: 'Serbest fırça resmi gerçeği birebir kopyalamaz; onu şiirsel bir anlamla damıtır.',
      en: 'Expressive ink art transcends literal copying to achieve a poetic realm.',
    },
    highlightColor: 'zhusha',
  },
  {
    id: 'zhangzao-1',
    quote: {
      zh: '外师造化，中得心源。',
      tr: 'Dışta doğayı usta bil, içte gönlün kaynağından beslen.',
      en: 'Take external creation as your master, and discover the source from your inner heart.',
    },
    author: {
      zh: '张璪',
      tr: 'Zhang Zao',
      en: 'Zhang Zao',
    },
    role: {
      zh: '唐代著名山水画家',
      tr: 'Tang Hanedanı Manzara Ustası',
      en: 'Tang Dynasty Landscape Painter',
    },
    dynastyOrEra: {
      zh: '唐代 · 盛唐气象',
      tr: 'Tang Hanedanı',
      en: 'Tang Dynasty',
    },
    source: {
      zh: '唐代画学名论',
      tr: 'Tang Resim İncelemeleri',
      en: 'Tang Art Theory',
    },
    insight: {
      zh: '精辟概括了艺术创作中客观自然与主观心灵的情感统一。',
      tr: 'Sanat üretiminde nesnel doğa ile öznel zihnin mükemmel uyumunu açıklar.',
      en: 'Summarizes the philosophical unity of objective nature and inner subjective soul.',
    },
    highlightColor: 'shiqing',
  },
  {
    id: 'guoxi-1',
    quote: {
      zh: '山有三远：自山下而仰山巅，谓之高远；自山前而窥山后，谓之深远；自近山而望远山，谓之平远。',
      tr: 'Dağda üç uzaklık vardır: Dağın altından zirveye bakmak yüksek uzaklıktır; öndeki dağın ardından arkasını gözetlemek derin uzaklıktır; yakın dağdan uzağa bakmak düz uzaklıktır.',
      en: 'Mountains have three distances: Looking up from the base is high distance; peering beyond the front peaks is deep distance; looking into the expanse is level distance.',
    },
    author: {
      zh: '郭熙',
      tr: 'Guo Xi',
      en: 'Guo Xi',
    },
    role: {
      zh: '北宋山水大家、画学理论家',
      tr: 'Kuzey Song Hanedanı Saray Ressamı',
      en: 'Northern Song Landscape Master & Theorist',
    },
    dynastyOrEra: {
      zh: '北宋 · 两宋山水巅峰',
      tr: 'Kuzey Song Dönemi',
      en: 'Northern Song Dynasty',
    },
    source: {
      zh: '《林泉高致》',
      tr: 'Ormanlar ve Pınarlar Üzerine Yüce Düşünceler',
      en: 'The Lofty Message of Forests and Streams',
    },
    insight: {
      zh: '开创东方独有的游历散点透视，使观者步移景异，身临其境。',
      tr: 'Doğu\'ya özgü dolaşan bakış açısını kurarak resme canlı bir mekân derinliği kazandırır.',
      en: 'Established the unique Chinese multi-focus perspective that lets the viewer wander inside the painting.',
    },
    highlightColor: 'shilv',
  },
  {
    id: 'sushi-1',
    quote: {
      zh: '论画以形似，见与儿童邻。赋诗必此诗，定非知诗人。',
      tr: 'Resmi sırf dış benzerlikle değerlendiren, çocukla eşdeğer görüşe sahiptir. Şiirde de sadece lafza takılan, şiirin özünü bilmez.',
      en: 'To judge a painting solely by its likeness to form is comparable to the view of a child.',
    },
    author: {
      zh: '苏轼（苏东坡）',
      tr: 'Su Shi (Su Dongpo)',
      en: 'Su Shi (Su Dongpo)',
    },
    role: {
      zh: '北宋文豪、文人画理论奠基人',
      tr: 'Song Dönemi Büyük Edebiyatçı ve Sanat Düşünürü',
      en: 'Song Polymath & Literati Art Pioneer',
    },
    dynastyOrEra: {
      zh: '北宋 · 文人画开篇',
      tr: 'Kuzey Song Hanedanı',
      en: 'Northern Song Dynasty',
    },
    source: {
      zh: '《书鄢陵王主簿所画折枝二首》',
      tr: 'Resim Üzerine Şiirler',
      en: 'Inscriptions on Paintings',
    },
    insight: {
      zh: '突破形似束缚，奠定文人画借物抒情、追求诗画一律的美学高度。',
      tr: 'Birebir taklitten kurtulup fırça yoluyla duygu ve düşünceyi şiir gibi aktarmayı savunur.',
      en: 'Elevated literati painting beyond mechanical imitation to a lyrical harmony of poetry and art.',
    },
    highlightColor: 'zhusha',
  },
  {
    id: 'wangwei-1',
    quote: {
      zh: '凡画山水，意在笔先。',
      tr: 'Manzara çizerken fikir fırçadan önce gelmelidir.',
      en: 'In painting landscapes, the conception must precede the stroke of the brush.',
    },
    author: {
      zh: '王维',
      tr: 'Wang Wei',
      en: 'Wang Wei',
    },
    role: {
      zh: '唐代“诗佛”、水墨山水画鼻祖',
      tr: 'Tang Şairi ve Mürekkep Resmi Öncüsü',
      en: 'Tang Poet and Founder of Ink Wash Landscape',
    },
    dynastyOrEra: {
      zh: '唐代 · 诗画合一',
      tr: 'Tang Hanedanı',
      en: 'Tang Dynasty',
    },
    source: {
      zh: '《山水论》',
      tr: 'Manzara Üzerine',
      en: 'On Landscapes',
    },
    insight: {
      zh: '落笔前胸中当有丘壑，意境与立意是绘画构思的核心所在。',
      tr: 'Fırça kağıda değmeden önce zihinde tablo olgunlaşmış olmalıdır.',
      en: 'The artistic concept and inner imagery must mature in mind before the ink touches paper.',
    },
    highlightColor: 'shiqing',
  },
  {
    id: 'zongbaihua-1',
    quote: {
      zh: '虚实相生，无画处皆成妙境。',
      tr: 'Boşluk ve doluluk birbirini var eder; fırçanın değmediği yerler bile yüce bir anlam kazanır.',
      en: 'The substantial and the void give birth to each other; where no brush touches, marvelous realms emerge.',
    },
    author: {
      zh: '宗白华',
      tr: 'Zong Baihua',
      en: 'Zong Baihua',
    },
    role: {
      zh: '现代著名美学家、哲学家',
      tr: 'Modern Çinli Estetikçi ve Filozof',
      en: 'Modern Chinese Aesthetician & Philosopher',
    },
    dynastyOrEra: {
      zh: '现代 · 意境美学',
      tr: 'Modern Dönem Estetiği',
      en: 'Modern Aesthetics',
    },
    source: {
      zh: '《美学散步》',
      tr: 'Estetik Yürüyüşleri',
      en: 'Strolls in Aesthetics',
    },
    insight: {
      zh: '中国画留白不是空白，而是给观者提供无限想象与灵性呼吸的空间。',
      tr: 'Resimdeki boşluk yokluk değil, izleyiciye tefekkür ve nefes alma alanı sunan manadır.',
      en: 'White space in Chinese painting is not an absence, but an expanse for contemplation and spirit.',
    },
    highlightColor: 'shilv',
  },
  {
    id: 'caiyuanpei-1',
    quote: {
      zh: '纯洁之感情，常发于美育；美育者，应用美学之理论于教育，以陶养感情为目的者也。',
      tr: 'Saf ve asil duygular sanat eğitiminden doğar; estetik eğitim, duyguları olgunlaştırmayı hedefler.',
      en: 'Pure emotions arise from aesthetic education, which cultivates feeling and soul.',
    },
    author: {
      zh: '蔡元培',
      tr: 'Cai Yuanpei',
      en: 'Cai Yuanpei',
    },
    role: {
      zh: '中国现代教育家、美育倡导者',
      tr: 'Modern Çin Eğitimcisi, Sanat Eğitimi Öncüsü',
      en: 'Pioneer of Modern Chinese Aesthetic Education',
    },
    dynastyOrEra: {
      zh: '近代 · 美育思潮',
      tr: 'Modern Eğitim Hareketi',
      en: 'Modern Era',
    },
    source: {
      zh: '《美育代宗教说》',
      tr: 'Estetik Eğitim Üzerine',
      en: 'On Aesthetic Education',
    },
    insight: {
      zh: '美育能够塑造崇高健全的人格，是视觉艺术教育的根本意义所在。',
      tr: 'Sanat eğitimi insanın karakterini yüceltir ve ruhsal zenginlik katar.',
      en: 'Aesthetic education nurtures moral character and fulfills the spiritual dimension of education.',
    },
    highlightColor: 'zhusha',
  }
];

export function getRandomQuote(): ArtQuote {
  const index = Math.floor(Math.random() * ART_QUOTES.length);
  return ART_QUOTES[index];
}
