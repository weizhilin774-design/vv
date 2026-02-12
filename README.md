# 找到你的文学灵魂伴侣 - 作家匹配测试网站

一个精美的文学作家匹配测试网站，通过14道测试题帮助用户发现最适合他们的作家。

## 📂 项目结构

```
writer-match/
├── index.html          # 首页（欢迎页）
├── test.html           # 测试页面
├── result.html         # 结果页面
├── css/
│   └── styles.css      # 所有样式
├── js/
│   ├── data.js         # 作家数据库（20位示例）
│   ├── questions.js    # 14道测试题
│   ├── algorithm.js    # 匹配算法
│   └── main.js         # 主逻辑
└── README.md           # 说明文档
```

## 🚀 部署方法

### 方法一：Netlify拖拽上传（最简单，推荐！）

1. 访问 netlify.com 并登录
2. 点击 "Sites" → "Add new site" → "Deploy manually"
3. 直接把 `writer-match` 文件夹拖到页面上
4. 等待30秒
5. ✅ 完成！获得网址：`xxx.netlify.app`

### 方法二：Vercel CLI

1. 安装Vercel CLI：`npm install -g vercel`
2. 进入项目目录：`cd writer-match`
3. 运行：`vercel`
4. 按提示操作
5. ✅ 完成！

### 方法三：GitHub Pages

1. 在GitHub创建新仓库
2. 上传所有文件
3. 在仓库设置中启用GitHub Pages
4. ✅ 完成！

## 🛠️ 本地测试

### 使用Python启动本地服务器：

```bash
cd writer-match
python -m http.server 8000
# 或者 python3 -m http.server 8000
```

然后打开浏览器访问：`http://localhost:8000`

### 使用Node.js：

```bash
cd writer-match
npx serve
```

## 📝 自定义内容

### 添加更多作家

编辑 `js/data.js`，按照现有格式添加作家数据：

```javascript
{
    id: 21,
    name: "作家名字",
    country: "国家",
    bio: "简介...",
    books: ["书1", "书2", "书3"],
    matchText: "匹配文案...",
    scores: {
        style_realism: 7,
        style_poetry: 8,
        // ... 其他维度评分
    }
}
```

### 修改测试题目

编辑 `js/questions.js`，可以：
- 修改题目文字
- 调整选项
- 更改评分逻辑

### 调整配色方案

编辑 `css/styles.css` 顶部的 `:root` 变量：

```css
:root {
    --color-primary: #2c1810;    /* 主色 */
    --color-secondary: #8b6f47;  /* 辅色 */
    --color-accent: #d4a574;     /* 强调色 */
    /* ... */
}
```

## 🎨 设计特色

- ✨ 优雅的文学书店美学
- 📱 完全响应式设计
- 🎭 流畅的动画效果
- 📊 科学的匹配算法
- 🎯 7个维度的全面分析

## 📊 匹配算法说明

算法基于7个维度计算匹配度：

1. **文学风格**（权重1.5）- 现实主义/诗意/魔幻/实验
2. **视觉审美**（权重0.9）- 简约/繁复/自然/抽象
3. **词汇情感**（权重1.0）- 温暖/锐利/深邃/明朗
4. **叙事节奏**（权重0.9）- 慢/快/跳跃
5. **情感深度**（权重1.3）- 治愈/悲伤/冷静/激烈
6. **人物关系**（权重1.0）- 孤独/爱情/家庭/社会
7. **主题价值**（权重1.2）- 个人/社会/爱/历史

使用余弦相似度计算用户与作家的匹配度。

## 🔧 技术栈

- **前端**：纯HTML + CSS + JavaScript（无框架）
- **字体**：Crimson Text, Noto Serif SC, Space Mono
- **部署**：静态托管（Netlify/Vercel/GitHub Pages）

## 📱 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 移动端浏览器

## 🐛 常见问题

**Q: 网站打开后没有样式？**
A: 检查文件路径，确保所有文件在正确的位置。

**Q: 测试完成后看不到结果？**
A: 检查浏览器控制台（F12）是否有错误。确保浏览器支持localStorage。

**Q: 如何修改匹配算法？**
A: 编辑 `js/algorithm.js`，调整权重或相似度计算方法。

## 📄 许可证

本项目代码可自由使用和修改。

## 🎉 下一步

- 添加更多作家（补充到60位）
- 增加社交分享功能
- 添加购书链接
- 接入数据分析
- 优化SEO

---

Made with ❤️ for book lovers
