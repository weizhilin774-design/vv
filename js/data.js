// 60位作家数据库
// 每位作家包含：基本信息、7个维度评分、推荐书单

const writersData = [
    // === 中文作家：大众锚点 ===
    {
        id: 1,
        name: "余华",
        country: "中国",
        bio: "中国当代著名作家，以《活着》《许三观卖血记》等作品闻名。作品充满对人性和苦难的深刻思考，文字简洁有力，直击人心。",
        books: ["活着", "许三观卖血记", "兄弟"],
        matchText: "你和余华一样，有着直面残酷现实的勇气。你不回避生活的苦难，反而从中汲取力量。你的阅读偏好深刻、真实，不需要虚假的安慰。",
        scores: {
            style_realism: 9, style_poetry: 3, style_magic: 2, style_experimental: 5,
            visual_simple: 8, visual_complex: 3, visual_natural: 5, visual_abstract: 4,
            words_warm: 3, words_sharp: 8, words_deep: 9, words_bright: 2,
            pacing_slow: 5, pacing_fast: 7, pacing_jump: 3,
            emotion_healing: 2, emotion_sad: 10, emotion_calm: 6, emotion_intense: 8,
            relation_alone: 6, relation_love: 5, relation_family: 8, relation_social: 7,
            theme_personal: 7, theme_social: 9, theme_love: 6, theme_history: 8
        }
    },
    {
        id: 2,
        name: "村上春树",
        country: "日本",
        bio: "日本当代文学大师，以独特的都市孤独感和诗意叙事著称。作品充满音乐、咖啡、猫和隐喻，营造出一种梦幻又真实的氛围。",
        books: ["挪威的森林", "海边的卡夫卡", "1Q84"],
        matchText: "你和村上春树有着相似的灵魂。你善于在日常中发现诗意，对孤独有着独特的理解。你喜欢在文字中漫游，享受那种若即若离的距离感。",
        scores: {
            style_realism: 5, style_poetry: 9, style_magic: 6, style_experimental: 7,
            visual_simple: 7, visual_complex: 5, visual_natural: 8, visual_abstract: 6,
            words_warm: 6, words_sharp: 4, words_deep: 9, words_bright: 5,
            pacing_slow: 8, pacing_fast: 4, pacing_jump: 5,
            emotion_healing: 6, emotion_sad: 9, emotion_calm: 7, emotion_intense: 5,
            relation_alone: 10, relation_love: 7, relation_family: 4, relation_social: 3,
            theme_personal: 9, theme_social: 4, theme_love: 7, theme_history: 4
        }
    },
    {
        id: 3,
        name: "东野圭吾",
        country: "日本",
        bio: "日本推理小说大师，擅长将推理与人性探讨完美结合。情节紧凑，反转精彩，在悬疑中展现人性的复杂与温情。",
        books: ["白夜行", "嫌疑人X的献身", "解忧杂货店"],
        matchText: "你和东野圭吾一样，喜欢在故事中寻找真相。你享受抽丝剥茧的过程，也关注人性的温度。你的阅读需要智力刺激，也需要情感共鸣。",
        scores: {
            style_realism: 7, style_poetry: 3, style_magic: 2, style_experimental: 4,
            visual_simple: 6, visual_complex: 6, visual_natural: 5, visual_abstract: 4,
            words_warm: 5, words_sharp: 6, words_deep: 7, words_bright: 6,
            pacing_slow: 3, pacing_fast: 9, pacing_jump: 5,
            emotion_healing: 5, emotion_sad: 7, emotion_calm: 6, emotion_intense: 7,
            relation_alone: 5, relation_love: 7, relation_family: 6, relation_social: 7,
            theme_personal: 6, theme_social: 7, theme_love: 8, theme_history: 5
        }
    },
    {
        id: 4,
        name: "路遥",
        country: "中国",
        bio: "中国当代现实主义作家，《平凡的世界》感动了几代读者。作品充满奋斗精神和对生命的热爱，给人以力量和希望。",
        books: ["平凡的世界", "人生", "早晨从中午开始"],
        matchText: "你和路遥一样，相信奋斗的力量。你在平凡中看到伟大，在苦难中保持希望。你的阅读偏好质朴、真诚，能从文字中汲取前行的勇气。",
        scores: {
            style_realism: 10, style_poetry: 4, style_magic: 1, style_experimental: 2,
            visual_simple: 7, visual_complex: 3, visual_natural: 8, visual_abstract: 2,
            words_warm: 8, words_sharp: 5, words_deep: 6, words_bright: 7,
            pacing_slow: 6, pacing_fast: 6, pacing_jump: 2,
            emotion_healing: 7, emotion_sad: 6, emotion_calm: 7, emotion_intense: 6,
            relation_alone: 3, relation_love: 7, relation_family: 10, relation_social: 8,
            theme_personal: 9, theme_social: 8, theme_love: 7, theme_history: 7
        }
    },
    {
        id: 5,
        name: "王小波",
        country: "中国",
        bio: "中国当代自由主义作家，以幽默、理性和反叛精神著称。作品融合了哲思、情欲和对自由的追求，文字犀利而深刻。",
        books: ["黄金时代", "沉默的大多数", "爱你就像爱生命"],
        matchText: "你和王小波一样，拥有独立的精神和理性的思考。你不随波逐流，喜欢在文字中找到共鸣和启发。幽默和智慧是你的阅读标准。",
        scores: {
            style_realism: 7, style_poetry: 5, style_magic: 3, style_experimental: 8,
            visual_simple: 6, visual_complex: 5, visual_natural: 4, visual_abstract: 7,
            words_warm: 5, words_sharp: 9, words_deep: 8, words_bright: 6,
            pacing_slow: 5, pacing_fast: 7, pacing_jump: 6,
            emotion_healing: 4, emotion_sad: 5, emotion_calm: 8, emotion_intense: 6,
            relation_alone: 7, relation_love: 8, relation_family: 4, relation_social: 6,
            theme_personal: 8, theme_social: 9, theme_love: 7, theme_history: 6
        }
    },

    // === 中文作家：中等知名度 ===
    {
        id: 6,
        name: "张爱玲",
        country: "中国",
        bio: "民国时期最杰出的女作家，以细腻的笔触描绘都市男女的爱情悲欢。文字华丽苍凉，充满对人性的洞察。",
        books: ["倾城之恋", "半生缘", "红玫瑰与白玫瑰"],
        matchText: "你和张爱玲一样，有着敏锐的观察力和细腻的情感。你懂得生活的华丽与苍凉，在爱情中看到人性的复杂。你的阅读品味优雅而深刻。",
        scores: {
            style_realism: 7, style_poetry: 8, style_magic: 3, style_experimental: 5,
            visual_simple: 4, visual_complex: 9, visual_natural: 5, visual_abstract: 6,
            words_warm: 6, words_sharp: 7, words_deep: 8, words_bright: 5,
            pacing_slow: 7, pacing_fast: 4, pacing_jump: 4,
            emotion_healing: 4, emotion_sad: 8, emotion_calm: 6, emotion_intense: 7,
            relation_alone: 6, relation_love: 10, relation_family: 7, relation_social: 7,
            theme_personal: 7, theme_social: 6, theme_love: 10, theme_history: 7
        }
    },
    {
        id: 7,
        name: "双雪涛",
        country: "中国",
        bio: "当代青年作家，以东北工业城市为背景，书写底层人物的生存与尊严。文字冷峻克制，充满力量。",
        books: ["平原上的摩西", "飞行家", "聋哑时代"],
        matchText: "你和双雪涛一样，关注那些被遗忘的故事和人群。你的阅读偏好真实、克制，不需要过度的抒情。你在平凡中看到诗意，在沉默中听到呐喊。",
        scores: {
            style_realism: 8, style_poetry: 6, style_magic: 4, style_experimental: 6,
            visual_simple: 7, visual_complex: 5, visual_natural: 7, visual_abstract: 5,
            words_warm: 4, words_sharp: 7, words_deep: 8, words_bright: 4,
            pacing_slow: 6, pacing_fast: 7, pacing_jump: 5,
            emotion_healing: 4, emotion_sad: 7, emotion_calm: 7, emotion_intense: 6,
            relation_alone: 7, relation_love: 6, relation_family: 7, relation_social: 8,
            theme_personal: 7, theme_social: 8, theme_love: 6, theme_history: 7
        }
    },
    {
        id: 8,
        name: "三毛",
        country: "中国台湾",
        bio: "传奇女作家，以流浪和自由为主题，书写撒哈拉的故事和异域风情。文字浪漫真挚，充满对生命的热爱。",
        books: ["撒哈拉的故事", "雨季不再来", "梦里花落知多少"],
        matchText: "你和三毛一样，向往自由和远方。你的内心住着一个浪漫的灵魂，喜欢在文字中旅行。你相信爱情，也相信生活的美好。",
        scores: {
            style_realism: 5, style_poetry: 9, style_magic: 5, style_experimental: 4,
            visual_simple: 5, visual_complex: 7, visual_natural: 9, visual_abstract: 4,
            words_warm: 9, words_sharp: 3, words_deep: 6, words_bright: 8,
            pacing_slow: 6, pacing_fast: 5, pacing_jump: 4,
            emotion_healing: 8, emotion_sad: 6, emotion_calm: 7, emotion_intense: 7,
            relation_alone: 6, relation_love: 9, relation_family: 6, relation_social: 7,
            theme_personal: 8, theme_social: 4, theme_love: 9, theme_history: 5
        }
    },

    // === 中文作家：小众宝藏 ===
    {
        id: 9,
        name: "颜歌",
        country: "中国",
        bio: "青年作家，以四川方言和平乐镇系列闻名。文字活泼有趣，充满地域特色和现代性，是当代方言写作的代表。",
        books: ["平乐镇伤心故事集", "我们家", "五月女王"],
        matchText: "你和颜歌一样，喜欢在传统与现代之间找到平衡。你欣赏地域文化的魅力，也接受新鲜的叙事方式。你的阅读品味独特而有趣。",
        scores: {
            style_realism: 6, style_poetry: 7, style_magic: 5, style_experimental: 8,
            visual_simple: 5, visual_complex: 7, visual_natural: 6, visual_abstract: 6,
            words_warm: 7, words_sharp: 5, words_deep: 6, words_bright: 7,
            pacing_slow: 5, pacing_fast: 6, pacing_jump: 7,
            emotion_healing: 6, emotion_sad: 6, emotion_calm: 6, emotion_intense: 5,
            relation_alone: 5, relation_love: 7, relation_family: 8, relation_social: 8,
            theme_personal: 7, theme_social: 7, theme_love: 7, theme_history: 6
        }
    },
    {
        id: 10,
        name: "班宇",
        country: "中国",
        bio: "东北青年作家，以《冬泳》等作品描绘工业城市的没落与底层生活。文字冷峻有力，充满对时代的思考。",
        books: ["冬泳", "逍遥游", "盘锦豹子"],
        matchText: "你和班宇一样，关注时代变迁下的个体命运。你的阅读偏好现实、克制，能在平淡中读出波澜。你理解生活的艰难，也看到希望。",
        scores: {
            style_realism: 9, style_poetry: 5, style_magic: 2, style_experimental: 5,
            visual_simple: 8, visual_complex: 4, visual_natural: 7, visual_abstract: 4,
            words_warm: 4, words_sharp: 7, words_deep: 8, words_bright: 3,
            pacing_slow: 6, pacing_fast: 7, pacing_jump: 4,
            emotion_healing: 3, emotion_sad: 8, emotion_calm: 7, emotion_intense: 6,
            relation_alone: 7, relation_love: 5, relation_family: 7, relation_social: 9,
            theme_personal: 7, theme_social: 9, theme_love: 5, theme_history: 8
        }
    },
    {
        id: 11,
        name: "李娟",
        country: "中国",
        bio: "散文作家，以新疆阿勒泰的游牧生活为主题。文字清新自然，充满对土地和生命的热爱，有着治愈的力量。",
        books: ["我的阿勒泰", "冬牧场", "羊道三部曲"],
        matchText: "你和李娟一样，热爱自然和简单的生活。你的阅读偏好清新、真诚，能从文字中获得宁静和力量。你珍惜生命中的美好时刻。",
        scores: {
            style_realism: 7, style_poetry: 8, style_magic: 3, style_experimental: 3,
            visual_simple: 8, visual_complex: 3, visual_natural: 10, visual_abstract: 2,
            words_warm: 9, words_sharp: 2, words_deep: 6, words_bright: 8,
            pacing_slow: 8, pacing_fast: 3, pacing_jump: 2,
            emotion_healing: 9, emotion_sad: 4, emotion_calm: 9, emotion_intense: 3,
            relation_alone: 6, relation_love: 6, relation_family: 7, relation_social: 6,
            theme_personal: 7, theme_social: 5, theme_love: 6, theme_history: 5
        }
    },
    {
        id: 12,
        name: "钟晓阳",
        country: "中国香港",
        bio: "香港女作家，以《停车暂借问》等作品闻名。文字细腻隐忍，描写爱情与人生的悲欢离合，充满东方美学。",
        books: ["停车暂借问", "遗恨", "春在绿芜中"],
        matchText: "你和钟晓阳一样，有着细腻敏感的心灵。你在爱情中看到永恒，在离别中感受深情。你的阅读品味优雅含蓄，如同一杯陈年好茶。",
        scores: {
            style_realism: 6, style_poetry: 9, style_magic: 3, style_experimental: 4,
            visual_simple: 7, visual_complex: 7, visual_natural: 7, visual_abstract: 5,
            words_warm: 7, words_sharp: 4, words_deep: 8, words_bright: 5,
            pacing_slow: 9, pacing_fast: 3, pacing_jump: 3,
            emotion_healing: 5, emotion_sad: 9, emotion_calm: 6, emotion_intense: 7,
            relation_alone: 5, relation_love: 10, relation_family: 7, relation_social: 5,
            theme_personal: 8, theme_social: 4, theme_love: 10, theme_history: 6
        }
    },
    {
        id: 13,
        name: "阎连科",
        country: "中国",
        bio: "先锋派作家，以"神实主义"风格著称。作品充满想象力和批判性，用荒诞揭示现实，极具震撼力。",
        books: ["日光流年", "受活", "炸裂志"],
        matchText: "你和阎连科一样，不满足于平庸的叙事。你接受文学的实验性，能在荒诞中看到真实。你的阅读需要强烈的冲击力和深度思考。",
        scores: {
            style_realism: 6, style_poetry: 6, style_magic: 9, style_experimental: 10,
            visual_simple: 4, visual_complex: 8, visual_natural: 5, visual_abstract: 9,
            words_warm: 3, words_sharp: 9, words_deep: 9, words_bright: 4,
            pacing_slow: 6, pacing_fast: 7, pacing_jump: 8,
            emotion_healing: 2, emotion_sad: 8, emotion_calm: 4, emotion_intense: 9,
            relation_alone: 7, relation_love: 5, relation_family: 6, relation_social: 9,
            theme_personal: 6, theme_social: 10, theme_love: 5, theme_history: 8
        }
    },

    // === 外国作家：大众锚点 ===
    {
        id: 14,
        name: "卡夫卡",
        country: "捷克",
        bio: "现代主义文学大师，以《变形记》《城堡》等作品创造了独特的荒诞世界。作品探讨异化、孤独和存在的困境。",
        books: ["变形记", "城堡", "审判"],
        matchText: "你和卡夫卡一样，对存在有着深刻的思考。你能理解那种莫名的荒诞感和孤独感。你的阅读偏好哲学性强，不回避人生的困惑。",
        scores: {
            style_realism: 4, style_poetry: 7, style_magic: 8, style_experimental: 10,
            visual_simple: 6, visual_complex: 7, visual_natural: 4, visual_abstract: 9,
            words_warm: 2, words_sharp: 6, words_deep: 10, words_bright: 2,
            pacing_slow: 7, pacing_fast: 5, pacing_jump: 6,
            emotion_healing: 1, emotion_sad: 8, emotion_calm: 5, emotion_intense: 7,
            relation_alone: 10, relation_love: 4, relation_family: 5, relation_social: 6,
            theme_personal: 9, theme_social: 7, theme_love: 3, theme_history: 6
        }
    },
    {
        id: 15,
        name: "马尔克斯",
        country: "哥伦比亚",
        bio: "魔幻现实主义大师，诺贝尔文学奖得主。《百年孤独》开创了一个文学时代，将魔幻与现实完美融合。",
        books: ["百年孤独", "霍乱时期的爱情", "族长的秋天"],
        matchText: "你和马尔克斯一样，拥有丰富的想象力。你不满足于平淡的现实，喜欢在魔幻中探索真实。你的阅读需要史诗感和诗意。",
        scores: {
            style_realism: 5, style_poetry: 8, style_magic: 10, style_experimental: 7,
            visual_simple: 3, visual_complex: 10, visual_natural: 7, visual_abstract: 8,
            words_warm: 7, words_sharp: 5, words_deep: 8, words_bright: 6,
            pacing_slow: 7, pacing_fast: 5, pacing_jump: 6,
            emotion_healing: 5, emotion_sad: 7, emotion_calm: 6, emotion_intense: 8,
            relation_alone: 6, relation_love: 8, relation_family: 9, relation_social: 8,
            theme_personal: 6, theme_social: 7, theme_love: 8, theme_history: 9
        }
    },

    // === 外国作家：中等知名度 ===
    {
        id: 16,
        name: "海明威",
        country: "美国",
        bio: "美国文学大师，以简洁有力的"冰山理论"著称。作品描写硬汉精神和生命的尊严，文字干净利落。",
        books: ["老人与海", "永别了，武器", "太阳照常升起"],
        matchText: "你和海明威一样，欣赏简洁有力的表达。你不需要过多的修饰，喜欢在克制中感受力量。你的阅读偏好干净、直接、有力。",
        scores: {
            style_realism: 9, style_poetry: 4, style_magic: 1, style_experimental: 3,
            visual_simple: 9, visual_complex: 2, visual_natural: 7, visual_abstract: 3,
            words_warm: 5, words_sharp: 7, words_deep: 6, words_bright: 6,
            pacing_slow: 4, pacing_fast: 7, pacing_jump: 3,
            emotion_healing: 5, emotion_sad: 6, emotion_calm: 8, emotion_intense: 7,
            relation_alone: 7, relation_love: 6, relation_family: 5, relation_social: 6,
            theme_personal: 8, theme_social: 6, theme_love: 6, theme_history: 7
        }
    },
    {
        id: 17,
        name: "昆德拉",
        country: "捷克",
        bio: "哲学小说家，以《不能承受的生命之轻》闻名。作品融合哲学、爱情和政治，充满对存在的思考。",
        books: ["不能承受的生命之轻", "笑忘录", "生活在别处"],
        matchText: "你和昆德拉一样，喜欢在小说中思考哲学问题。你不满足于情节，需要深度和智性。你的阅读是一场精神的对话。",
        scores: {
            style_realism: 6, style_poetry: 7, style_magic: 4, style_experimental: 8,
            visual_simple: 6, visual_complex: 6, visual_natural: 5, visual_abstract: 7,
            words_warm: 4, words_sharp: 7, words_deep: 10, words_bright: 4,
            pacing_slow: 7, pacing_fast: 5, pacing_jump: 6,
            emotion_healing: 3, emotion_sad: 7, emotion_calm: 8, emotion_intense: 6,
            relation_alone: 7, relation_love: 8, relation_family: 5, relation_social: 7,
            theme_personal: 8, theme_social: 8, theme_love: 8, theme_history: 7
        }
    },

    // === 外国作家：小众宝藏 ===
    {
        id: 18,
        name: "埃莱娜·费兰特",
        country: "意大利",
        bio: "匿名女作家，那不勒斯四部曲作者。深刻描写女性友谊、成长和命运，文字真实有力，引起全球共鸣。",
        books: ["我的天才女友", "新名字的故事", "离开的，留下的"],
        matchText: "你和费兰特一样，关注女性的真实处境和内心世界。你不需要美化的叙事，喜欢看到人性的复杂和真实。你的阅读有深度和共鸣。",
        scores: {
            style_realism: 9, style_poetry: 5, style_magic: 2, style_experimental: 5,
            visual_simple: 7, visual_complex: 6, visual_natural: 6, visual_abstract: 5,
            words_warm: 5, words_sharp: 8, words_deep: 9, words_bright: 4,
            pacing_slow: 6, pacing_fast: 7, pacing_jump: 4,
            emotion_healing: 4, emotion_sad: 8, emotion_calm: 6, emotion_intense: 8,
            relation_alone: 5, relation_love: 7, relation_family: 8, relation_social: 9,
            theme_personal: 8, theme_social: 8, theme_love: 7, theme_history: 7
        }
    },
    {
        id: 19,
        name: "茨威格",
        country: "奥地利",
        bio: "奥地利犹太作家，以心理描写和历史传记闻名。作品充满人文关怀和对欧洲文明的追忆，文字优雅动人。",
        books: ["昨日的世界", "一个陌生女人的来信", "人类群星闪耀时"],
        matchText: "你和茨威格一样，有着细腻的心理感知力。你欣赏优雅的文字和深刻的情感，能在历史中看到人性的光辉。你的阅读品味经典而深厚。",
        scores: {
            style_realism: 7, style_poetry: 8, style_magic: 3, style_experimental: 4,
            visual_simple: 6, visual_complex: 7, visual_natural: 6, visual_abstract: 5,
            words_warm: 7, words_sharp: 5, words_deep: 9, words_bright: 6,
            pacing_slow: 7, pacing_fast: 5, pacing_jump: 4,
            emotion_healing: 5, emotion_sad: 9, emotion_calm: 7, emotion_intense: 7,
            relation_alone: 6, relation_love: 9, relation_family: 7, relation_social: 7,
            theme_personal: 7, theme_social: 6, theme_love: 9, theme_history: 9
        }
    },
    {
        id: 20,
        name: "黑塞",
        country: "德国",
        bio: "诺贝尔奖得主，以心灵探索和成长小说著称。作品融合东方哲学，探讨自我实现和精神追求，深受年轻人喜爱。",
        books: ["悉达多", "荒原狼", "德米安"],
        matchText: "你和黑塞一样，在寻找生命的意义。你不满足于表面的生活，渴望精神的成长和自我的实现。你的阅读是一场心灵的旅程。",
        scores: {
            style_realism: 5, style_poetry: 8, style_magic: 6, style_experimental: 6,
            visual_simple: 6, visual_complex: 6, visual_natural: 7, visual_abstract: 7,
            words_warm: 6, words_sharp: 4, words_deep: 10, words_bright: 5,
            pacing_slow: 8, pacing_fast: 4, pacing_jump: 5,
            emotion_healing: 6, emotion_sad: 7, emotion_calm: 7, emotion_intense: 6,
            relation_alone: 9, relation_love: 6, relation_family: 5, relation_social: 5,
            theme_personal: 10, theme_social: 5, theme_love: 6, theme_history: 6
        }
    }
    
    // 注：这里只展示了20位作家作为示例
    // 实际应用中，你需要补充完整的60位作家数据
    // 格式相同，继续添加即可
];

// 导出数据（用于其他JS文件调用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { writersData };
}
