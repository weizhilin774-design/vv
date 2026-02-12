// 匹配算法 - 计算用户与作家的匹配度

function calculateMatches(userAnswers) {
    // 计算每位作家与用户的匹配度
    const matches = writersData.map(writer => {
        const score = calculateWriterMatch(userAnswers, writer);
        return {
            writer: writer,
            score: score
        };
    });
    
    // 按匹配度排序
    matches.sort((a, b) => b.score - a.score);
    
    return matches;
}

function calculateWriterMatch(userAnswers, writer) {
    let totalScore = 0;
    let maxScore = 0;
    
    // 维度权重（可调整）
    const weights = {
        style: 1.5,      // 文学风格最重要
        visual: 0.9,     // 视觉审美
        words: 1.0,      // 词汇情感
        pacing: 0.9,     // 叙事节奏
        emotion: 1.3,    // 情感深度很重要
        relation: 1.0,   // 人物关系
        theme: 1.2       // 主题价值观重要
    };
    
    // 计算各维度的相似度
    // 文学风格维度
    const styleScore = calculateDimensionSimilarity(
        userAnswers,
        writer.scores,
        ['style_realism', 'style_poetry', 'style_magic', 'style_experimental']
    );
    totalScore += styleScore * weights.style;
    maxScore += 100 * weights.style;
    
    // 视觉审美维度
    const visualScore = calculateDimensionSimilarity(
        userAnswers,
        writer.scores,
        ['visual_simple', 'visual_complex', 'visual_natural', 'visual_abstract']
    );
    totalScore += visualScore * weights.visual;
    maxScore += 100 * weights.visual;
    
    // 词汇情感维度
    const wordsScore = calculateDimensionSimilarity(
        userAnswers,
        writer.scores,
        ['words_warm', 'words_sharp', 'words_deep', 'words_bright']
    );
    totalScore += wordsScore * weights.words;
    maxScore += 100 * weights.words;
    
    // 叙事节奏维度
    const pacingScore = calculateDimensionSimilarity(
        userAnswers,
        writer.scores,
        ['pacing_slow', 'pacing_fast', 'pacing_jump']
    );
    totalScore += pacingScore * weights.pacing;
    maxScore += 100 * weights.pacing;
    
    // 情感深度维度
    const emotionScore = calculateDimensionSimilarity(
        userAnswers,
        writer.scores,
        ['emotion_healing', 'emotion_sad', 'emotion_calm', 'emotion_intense']
    );
    totalScore += emotionScore * weights.emotion;
    maxScore += 100 * weights.emotion;
    
    // 人物关系维度
    const relationScore = calculateDimensionSimilarity(
        userAnswers,
        writer.scores,
        ['relation_alone', 'relation_love', 'relation_family', 'relation_social']
    );
    totalScore += relationScore * weights.relation;
    maxScore += 100 * weights.relation;
    
    // 主题价值观维度
    const themeScore = calculateDimensionSimilarity(
        userAnswers,
        writer.scores,
        ['theme_personal', 'theme_social', 'theme_love', 'theme_history']
    );
    totalScore += themeScore * weights.theme;
    maxScore += 100 * weights.theme;
    
    // 返回百分比匹配度
    return (totalScore / maxScore) * 100;
}

function calculateDimensionSimilarity(userScores, writerScores, keys) {
    // 计算特定维度的相似度
    let userVector = keys.map(key => userScores[key] || 0);
    let writerVector = keys.map(key => writerScores[key] || 0);
    
    // 使用余弦相似度
    return cosineSimilarity(userVector, writerVector) * 100;
}

function cosineSimilarity(vec1, vec2) {
    // 计算两个向量的余弦相似度
    let dotProduct = 0;
    let mag1 = 0;
    let mag2 = 0;
    
    for (let i = 0; i < vec1.length; i++) {
        dotProduct += vec1[i] * vec2[i];
        mag1 += vec1[i] * vec1[i];
        mag2 += vec2[i] * vec2[i];
    }
    
    mag1 = Math.sqrt(mag1);
    mag2 = Math.sqrt(mag2);
    
    if (mag1 === 0 || mag2 === 0) {
        return 0;
    }
    
    return dotProduct / (mag1 * mag2);
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateMatches };
}
