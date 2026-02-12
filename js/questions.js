// 14道测试题目数据
// 每题包含：类别、标题、选项、评分逻辑

const questionsData = [
    // 题目1：文学风格 - 句子选择
    {
        id: 1,
        category: "文学风格",
        title: "选择最打动你的句子",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "活着就是为了活着本身，而不是为了活着之外的任何事物。",
                author: "余华《活着》",
                scores: { style_realism: 3, emotion_sad: 2, theme_personal: 2 }
            },
            {
                label: "B",
                text: "我行过许多地方的桥，看过许多次数的云，喝过许多种类的酒，却只爱过一个正当最好年龄的人。",
                author: "沈从文《湘行散记》",
                scores: { style_poetry: 3, words_deep: 3, relation_love: 2 }
            },
            {
                label: "C",
                text: "时间不是一条直线，而是无数个分叉的小径。",
                author: "博尔赫斯",
                scores: { style_experimental: 3, words_deep: 3, theme_personal: 2 }
            },
            {
                label: "D",
                text: "那些年轻人站在细雨里，笑得跟花儿一样。",
                author: "双雪涛",
                scores: { style_realism: 2, visual_natural: 2, emotion_healing: 2 }
            }
        ]
    },

    // 题目2：文学风格 - 开头选择
    {
        id: 2,
        category: "文学风格",
        title: "哪种开头更吸引你？",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。",
                author: "马尔克斯《百年孤独》",
                scores: { style_magic: 3, pacing_slow: 2, theme_history: 2 }
            },
            {
                label: "B",
                text: "他转身，离开，从此再无交集。",
                author: "极简风格",
                scores: { style_realism: 3, pacing_fast: 2, words_sharp: 2 }
            },
            {
                label: "C",
                text: "1946年春天，我二十一岁，在大学的最后一学期。和一个比我年长六岁的女子相恋。",
                author: "村上春树风格",
                scores: { style_poetry: 2, pacing_slow: 2, relation_love: 3 }
            },
            {
                label: "D",
                text: "故事开始在一个不算故事的故事里。",
                author: "元小说风格",
                scores: { style_experimental: 3, pacing_jump: 2, words_deep: 2 }
            }
        ]
    },

    // 题目3：视觉审美 - 场景画面
    {
        id: 3,
        category: "视觉审美",
        title: "选择最吸引你的场景画面",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "大片留白的宣纸上，一枝墨竹",
                scores: { visual_simple: 3, style_poetry: 2, emotion_calm: 2 }
            },
            {
                label: "B",
                text: "巴洛克式繁复花纹，金色装饰，层层叠叠",
                scores: { visual_complex: 3, style_poetry: 2, words_warm: 2 }
            },
            {
                label: "C",
                text: "日落时分的戈壁滩，天空渐变色，孤独的旅人",
                scores: { visual_natural: 3, relation_alone: 2, emotion_healing: 2 }
            },
            {
                label: "D",
                text: "抽象几何色块，强烈对比，现代艺术感",
                scores: { visual_abstract: 3, style_experimental: 2, pacing_fast: 2 }
            }
        ]
    },

    // 题目4：视觉审美 - 封面设计
    {
        id: 4,
        category: "视觉审美",
        title: "你更喜欢哪种书籍封面设计？",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "极简黑白，只有书名和作者名，大片空白",
                scores: { visual_simple: 3, emotion_calm: 2, words_sharp: 2 }
            },
            {
                label: "B",
                text: "古典油画风格，细节丰富，复古色调",
                scores: { visual_complex: 3, style_poetry: 2, theme_history: 2 }
            },
            {
                label: "C",
                text: "摄影实景，自然光影，真实质感",
                scores: { visual_natural: 3, style_realism: 2, emotion_healing: 2 }
            },
            {
                label: "D",
                text: "插画/拼贴，创意设计，颜色鲜明",
                scores: { visual_abstract: 2, style_experimental: 2, words_bright: 3 }
            }
        ]
    },

    // 题目5：词汇情感 - 词组选择
    {
        id: 5,
        category: "词汇情感",
        title: "选择你最喜欢的一组词",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "温暖 · 柔软 · 拥抱 · 炉火",
                scores: { words_warm: 3, emotion_healing: 3, relation_family: 2 }
            },
            {
                label: "B",
                text: "锐利 · 撕裂 · 冲突 · 刀锋",
                scores: { words_sharp: 3, emotion_intense: 2, theme_social: 2 }
            },
            {
                label: "C",
                text: "深邃 · 幽暗 · 谜题 · 深渊",
                scores: { words_deep: 3, relation_alone: 2, theme_personal: 3 }
            },
            {
                label: "D",
                text: "明朗 · 清澈 · 阳光 · 欢笑",
                scores: { words_bright: 3, emotion_healing: 2, pacing_fast: 2 }
            }
        ]
    },

    // 题目6：词汇情感 - 美好时刻
    {
        id: 6,
        category: "词汇情感",
        title: "描述一个美好时刻，你会用？",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "那一刻，时间仿佛静止了",
                scores: { style_poetry: 3, pacing_slow: 2, emotion_healing: 2 }
            },
            {
                label: "B",
                text: "我突然意识到生活的荒谬",
                scores: { words_deep: 3, theme_personal: 3, style_experimental: 2 }
            },
            {
                label: "C",
                text: "她笑了，整个世界都亮了",
                scores: { words_bright: 3, relation_love: 3, emotion_healing: 2 }
            },
            {
                label: "D",
                text: "一切坚固的东西都烟消云散了",
                scores: { words_sharp: 2, emotion_sad: 2, theme_social: 3 }
            }
        ]
    },

    // 题目7：叙事节奏
    {
        id: 7,
        category: "叙事节奏",
        title: "选择你更喜欢的叙事节奏",
        subtitle: "阅读以下文字片段",
        options: [
            {
                label: "A",
                text: "他缓缓转身，眼中闪过一丝不易察觉的犹豫。阳光透过窗棂，在他肩上投下斑驳的光影。空气里弥漫着茉莉花的香气...",
                scores: { pacing_slow: 3, style_poetry: 2, visual_complex: 2 }
            },
            {
                label: "B",
                text: "他转身。离开。三个月后，异国街头，那个背影。她停住。心跳加速。",
                scores: { pacing_fast: 3, style_realism: 2, words_sharp: 2 }
            },
            {
                label: "C",
                text: "（他走了）（她想）（雨停了吗？）（没有）（2007年）（2019年）（在梦里他们重逢）",
                scores: { pacing_jump: 3, style_experimental: 3, visual_abstract: 2 }
            }
        ]
    },

    // 题目8：叙事节奏 - 阅读期待
    {
        id: 8,
        category: "叙事节奏",
        title: "读完一本书，你希望它是？",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "像一条缓缓流淌的河，让我沉浸其中忘记时间",
                scores: { pacing_slow: 3, style_poetry: 2, emotion_healing: 2 }
            },
            {
                label: "B",
                text: "像一场紧张的电影，情节跌宕让我一口气读完",
                scores: { pacing_fast: 3, emotion_intense: 2, pacing_jump: 1 }
            },
            {
                label: "C",
                text: "像一个谜题，层层递进让我不断思考",
                scores: { words_deep: 3, theme_personal: 2, style_experimental: 2 }
            },
            {
                label: "D",
                text: "像一首诗，需要反复品味每一个字",
                scores: { style_poetry: 3, pacing_slow: 3, visual_complex: 2 }
            }
        ]
    },

    // 题目9：情感深度
    {
        id: 9,
        category: "情感深度",
        title: "选择更触动你的情感类型",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "淡淡的忧伤和怀旧，像秋天的落叶",
                scores: { emotion_sad: 2, style_poetry: 2, pacing_slow: 2 }
            },
            {
                label: "B",
                text: "强烈的悲痛和苦难，撕心裂肺的痛",
                scores: { emotion_sad: 3, emotion_intense: 3, theme_social: 2 }
            },
            {
                label: "C",
                text: "平静的温暖与治愈，像午后的阳光",
                scores: { emotion_healing: 3, words_warm: 2, visual_natural: 2 }
            },
            {
                label: "D",
                text: "冷静的观察和思考，不动声色的锋利",
                scores: { emotion_calm: 3, words_sharp: 2, theme_personal: 2 }
            }
        ]
    },

    // 题目10：情感深度 - 难过情节
    {
        id: 10,
        category: "情感深度",
        title: "读到令人难过的情节时，你希望？",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "作者用诗意的语言化解悲伤，给我美的安慰",
                scores: { style_poetry: 3, emotion_healing: 2, visual_complex: 2 }
            },
            {
                label: "B",
                text: "作者直面残酷，不回避，让我正视痛苦",
                scores: { style_realism: 3, emotion_sad: 3, words_sharp: 2 }
            },
            {
                label: "C",
                text: "作者保持距离感，让我可以理性分析",
                scores: { emotion_calm: 3, words_deep: 2, theme_personal: 2 }
            },
            {
                label: "D",
                text: "作者给我一个温柔的结局或希望",
                scores: { emotion_healing: 3, words_warm: 2, relation_love: 2 }
            }
        ]
    },

    // 题目11：人物关系
    {
        id: 11,
        category: "人物关系",
        title: "你更喜欢读到什么样的人物？",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "孤独的探索者，一个人行走在世界边缘",
                scores: { relation_alone: 3, theme_personal: 3, emotion_calm: 2 }
            },
            {
                label: "B",
                text: "复杂的两性关系，爱恨纠葛",
                scores: { relation_love: 3, emotion_intense: 2, theme_love: 3 }
            },
            {
                label: "C",
                text: "温暖的家庭关系，几代人的故事",
                scores: { relation_family: 3, emotion_healing: 2, theme_history: 2 }
            },
            {
                label: "D",
                text: "多元的群像，展现社会众生相",
                scores: { relation_social: 3, theme_social: 3, style_realism: 2 }
            }
        ]
    },

    // 题目12：人物关系 - 打动的关系
    {
        id: 12,
        category: "人物关系",
        title: "最打动你的人物关系是？",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "她是我唯一的朋友，也是我最大的敌人（女性友谊）",
                scores: { relation_love: 2, emotion_intense: 2, theme_personal: 2 }
            },
            {
                label: "B",
                text: "我们终其一生，都在寻找那个最初离开的人（家庭伤痕）",
                scores: { relation_family: 3, emotion_sad: 3, theme_personal: 2 }
            },
            {
                label: "C",
                text: "他们在人群中相遇，又在人群中失散（都市疏离）",
                scores: { relation_alone: 3, style_poetry: 2, theme_social: 2 }
            },
            {
                label: "D",
                text: "那年夏天，我们无话不谈，以为友谊会永远（青春怀旧）",
                scores: { relation_love: 2, emotion_healing: 2, theme_personal: 2 }
            }
        ]
    },

    // 题目13：主题价值观
    {
        id: 13,
        category: "主题价值观",
        title: "你最关心的主题是？",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "个人成长与自我实现——"我是谁？我要成为谁？"",
                scores: { theme_personal: 3, relation_alone: 2, emotion_calm: 2 }
            },
            {
                label: "B",
                text: "社会正义与批判——"这个世界哪里不对？"",
                scores: { theme_social: 3, words_sharp: 2, emotion_intense: 2 }
            },
            {
                label: "C",
                text: "爱与人性的永恒探索——"什么是爱？什么是人？"",
                scores: { theme_love: 3, relation_love: 2, words_deep: 2 }
            },
            {
                label: "D",
                text: "历史与时代变迁——"我们从哪里来？"",
                scores: { theme_history: 3, style_realism: 2, relation_family: 2 }
            }
        ]
    },

    // 题目14：主题价值观 - 人生信条
    {
        id: 14,
        category: "主题价值观",
        title: "如果只能选一句话作为人生信条？",
        subtitle: "",
        options: [
            {
                label: "A",
                text: "在不自由的世界，做一个自由的人（自由精神）",
                scores: { theme_personal: 3, words_sharp: 2, relation_alone: 2 }
            },
            {
                label: "B",
                text: "活着，就要努力地活着（生命意志）",
                scores: { theme_personal: 2, emotion_intense: 2, style_realism: 3 }
            },
            {
                label: "C",
                text: "世界是荒谬的，但我们仍要寻找意义（存在主义）",
                scores: { theme_personal: 3, words_deep: 3, style_experimental: 2 }
            },
            {
                label: "D",
                text: "爱与被爱，是人生最重要的事（情感至上）",
                scores: { theme_love: 3, relation_love: 3, emotion_healing: 2 }
            }
        ]
    }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questionsData };
}
