// 主逻辑文件 - 控制测试流程

// 全局变量
let currentQuestionIndex = 0;
let userAnswers = {
    // 文学风格
    style_realism: 0, style_poetry: 0, style_magic: 0, style_experimental: 0,
    // 视觉审美
    visual_simple: 0, visual_complex: 0, visual_natural: 0, visual_abstract: 0,
    // 词汇情感
    words_warm: 0, words_sharp: 0, words_deep: 0, words_bright: 0,
    // 叙事节奏
    pacing_slow: 0, pacing_fast: 0, pacing_jump: 0,
    // 情感深度
    emotion_healing: 0, emotion_sad: 0, emotion_calm: 0, emotion_intense: 0,
    // 人物关系
    relation_alone: 0, relation_love: 0, relation_family: 0, relation_social: 0,
    // 主题价值观
    theme_personal: 0, theme_social: 0, theme_love: 0, theme_history: 0
};

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initTest();
});

// 初始化测试
function initTest() {
    // 创建进度点
    createProgressDots();
    
    // 显示第一道题
    showQuestion(0);
}

// 创建进度点
function createProgressDots() {
    const dotsContainer = document.getElementById('progressDots');
    for (let i = 0; i < questionsData.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        dot.id = `dot-${i}`;
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
}

// 显示题目
function showQuestion(index) {
    const question = questionsData[index];
    
    // 更新进度
    document.getElementById('currentQuestion').textContent = index + 1;
    document.getElementById('totalQuestions').textContent = questionsData.length;
    
    // 更新进度点
    updateProgressDots(index);
    
    // 更新题目内容
    document.getElementById('questionCategory').textContent = question.category;
    document.getElementById('questionTitle').textContent = question.title;
    document.getElementById('questionSubtitle').textContent = question.subtitle || '';
    
    // 生成选项
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.onclick = () => selectOption(index, i);
        
        optionCard.innerHTML = `
            <span class="option-label">${option.label}</span>
            <p class="option-text">${option.text}</p>
            ${option.author ? `<span class="option-author">— ${option.author}</span>` : ''}
        `;
        
        optionsContainer.appendChild(optionCard);
    });
    
    // 显示中途鼓励语
    showEncouragement(index);
}

// 更新进度点
function updateProgressDots(index) {
    for (let i = 0; i < questionsData.length; i++) {
        const dot = document.getElementById(`dot-${i}`);
        dot.classList.remove('active', 'completed');
        
        if (i < index) {
            dot.classList.add('completed');
        } else if (i === index) {
            dot.classList.add('active');
        }
    }
}

// 选择选项
function selectOption(questionIndex, optionIndex) {
    const question = questionsData[questionIndex];
    const option = question.options[optionIndex];
    
    // 视觉反馈
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(card => card.classList.remove('selected'));
    cards[optionIndex].classList.add('selected');
    
    // 记录答案
    for (let key in option.scores) {
        userAnswers[key] = (userAnswers[key] || 0) + option.scores[key];
    }
    
    // 延迟后进入下一题
    setTimeout(() => {
        nextQuestion();
    }, 500);
}

// 下一题
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionsData.length) {
        // 显示下一题
        showQuestion(currentQuestionIndex);
    } else {
        // 测试完成，保存结果并跳转
        finishTest();
    }
}

// 显示鼓励语
function showEncouragement(index) {
    const encouragement = document.getElementById('encouragement');
    const encouragementText = document.getElementById('encouragementText');
    
    if (index === 7) {
        encouragementText.textContent = '已完成一半！你的阅读品味渐渐清晰...';
        encouragement.style.display = 'block';
        setTimeout(() => {
            encouragement.style.display = 'none';
        }, 2000);
    } else if (index === 12) {
        encouragementText.textContent = '快完成了！答案即将揭晓...';
        encouragement.style.display = 'block';
        setTimeout(() => {
            encouragement.style.display = 'none';
        }, 2000);
    } else {
        encouragement.style.display = 'none';
    }
}

// 完成测试
function finishTest() {
    // 保存用户答案到localStorage
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    
    // 跳转到结果页
    window.location.href = 'result.html';
}

// 导出（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initTest, selectOption };
}
