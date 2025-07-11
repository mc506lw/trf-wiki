---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "屯人服 Wiki"
  text: "Minecraft 生存服务器知识库"
  tagline: "探索、建造、生存、交流 —— 尽在屯人服"
  image:
    src: "/logo.svg"
    alt: "屯人服Logo"
  actions:
    - theme: brand
      text: "开始探索"
      link: /屯人服文档/从这里开始
    - theme: alt
      text: "加入我们"
      link: /屯人服文档/从这里开始/加入服务器

features:
  - icon: 🏠
    title: "服务器介绍"
    details: "屯人服是一个注重玩家体验的Minecraft生存服务器，提供稳定、公平的游戏环境和丰富的社区活动。"
    link: /屯人服文档/从这里开始
  - icon: 🧭
    title: "新手指南"
    details: "从连接服务器到了解基本规则，这里有你需要的所有入门知识，帮助你快速融入屯人服的世界。"
    link: /屯人服文档/萌新教程
  - icon: 📚
    title: "玩法攻略"
    details: "探索服务器特色玩法、经济系统、建筑技巧和红石机械等进阶内容，提升你的游戏体验。"
    link: /屯人服文档/玩法
---




<div class="custom-home-section">
  <h2>最新公告</h2>
  <div class="announcement-list">
    <div class="announcement-item">
      <span class="date">2025-07-11</span>
      <h3>✨暑假全新建筑活动开始啦！✨</h3>
      <p>各位建筑党不容错过！</p>
      <a href="/屯人服文档/活动/暑假建筑活动">阅读更多</a>
    </div>
  </div>
</div>

<MscpoBadge />

<!-- 流体动画背景 -->
<div class="fluid-background">
  <canvas id="fluid-canvas"></canvas>
</div>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

onMounted(() => {
  // 流体动画初始化
  const canvas = document.getElementById('fluid-canvas')
  if (!canvas) return; // 如果canvas不存在，则不执行后续操作
  const ctx = canvas.getContext('2d')
  let animationFrameId
  let observer

  // 设置画布大小
  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  // 创建流体动画
  function createFluidAnimation() {
    const width = canvas.width
    const height = canvas.height
    const isDarkMode = document.documentElement.classList.contains('dark')

    // 波浪参数
    const lightModeWaves = [
      { amplitude: 25, frequency: 0.02, speed: 0.01, color: 'rgba(22, 217, 199, 0.2)', phase: 0 },
      { amplitude: 20, frequency: 0.03, speed: 0.015, color: 'rgba(22, 217, 199, 0.15)', phase: 2 },
      { amplitude: 15, frequency: 0.01, speed: 0.02, color: 'rgba(255, 199, 0, 0.1)', phase: 4 }
    ]

    const darkModeWaves = [
      { amplitude: 25, frequency: 0.02, speed: 0.01, color: 'rgba(0, 122, 204, 0.2)', phase: 0 }, // 蓝色系
      { amplitude: 20, frequency: 0.03, speed: 0.015, color: 'rgba(0, 100, 180, 0.15)', phase: 2 }, // 深一点的蓝色
      { amplitude: 15, frequency: 0.01, speed: 0.02, color: 'rgba(0, 80, 150, 0.1)', phase: 4 }    // 更深一点的蓝色
    ]

    const waves = isDarkMode ? darkModeWaves : lightModeWaves;

    function drawWave(wave) {
      ctx.beginPath()
      ctx.moveTo(0, height / 2)

      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude
        ctx.lineTo(x, y)
      }

      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      ctx.fillStyle = wave.color
      ctx.fill()

      // 更新相位
      wave.phase += wave.speed
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)

      // 绘制每个波浪
      waves.forEach(drawWave)

      animationFrameId = requestAnimationFrame(animate)
    }

    // 如果已有动画帧，先取消
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    animate()
  }

  // 初始化并监听主题变化
  function initializeAndWatchTheme() {
    resizeCanvas()
    createFluidAnimation()

    // 监听主题变化
    observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          // 主题变化时重新创建动画
          createFluidAnimation()
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });
  }

  window.addEventListener('resize', resizeCanvas)
  initializeAndWatchTheme()

  // 清理函数
  onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas)
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    if (observer) {
      observer.disconnect()
    }
  })
})
</script>

<style>
/* 流体背景样式 */
.fluid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

#fluid-canvas {
  width: 100%;
  height: 100%;
  opacity: 0.8;
}



/* 新增主题层叠顺序 */
:root {
  --vp-z-index-nav: 999;
  --vp-z-index-sidebar: 998;
}
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);







/* 移动端适配样式 */
@media (max-width: 956px) {
  .custom-home-section {
    padding: 1.5rem 1rem;
  }

  .announcement-list {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .announcement-item h3 {
    font-size: 1.1rem;
  }

  .announcement-item p {
    font-size: 0.9rem;
  }
}

/* 原有样式 */
.custom-home-section {
  max-width: 1152px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  position: relative;
  z-index: 1;
}

.announcement-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 1rem;
}

.announcement-item {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.announcement-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.date {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.announcement-item h3 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

.announcement-item a {
  display: inline-block;
  margin-top: 1rem;
  color: var(--vp-c-brand);
  font-weight: 500;
}

/* 增强首页内容的可读性 */
:root {
  --vp-home-hero-name-color: var(--vp-c-brand-1);
}

.VPHero .text {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Features 区域的丝滑过渡动画 */
.VPFeatures {
  position: relative;
  z-index: 1;
}

.VPFeature {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.9;
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  animation: featureAppear 0.8s ease-out forwards;
  animation-delay: calc(var(--vp-custom-block-index, 0) * 0.1s);
}

@keyframes featureAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.VPFeature:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
  opacity: 1;
}

.VPFeature .title {
  transition: color 0.3s ease;
}

.VPFeature:hover .title {
  color: var(--vp-c-brand-1);
}

.VPFeature .details {
  transition: color 0.3s ease;
}

/* MSCPO悬浮徽章 */
.mscpo-badge {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(22, 217, 199, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 999;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mscpo-badge:hover {
  transform: translateY(-3px);
  background: rgba(22, 217, 199, 0.15);
}

.mscpo-badge .logo {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.mscpo-badge .content h3 {
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
  margin: 0;
}

.mscpo-badge .content p {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  margin: 4px 0 0;
}

@media (max-width: 768px) {
  .mscpo-badge {
    bottom: 20px;
    right: 20px;
    padding: 12px;
  }
  
  .mscpo-badge .logo {
    width: 32px;
    height: 32px;
  }
}
</style>

