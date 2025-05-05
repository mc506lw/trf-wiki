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
      link: /guide/
    - theme: alt
      text: "加入我们"
      link: /guide/join/

features:
  - icon: 🏠
    title: "服务器介绍"
    details: "屯人服是一个注重玩家体验的Minecraft生存服务器，提供稳定、公平的游戏环境和丰富的社区活动。"
    link: /guide/
  - icon: 🧭
    title: "新手指南"
    details: "从连接服务器到了解基本规则，这里有你需要的所有入门知识，帮助你快速融入屯人服的世界。"
    link: /guide/join/
  - icon: 📚
    title: "玩法攻略"
    details: "探索服务器特色玩法、经济系统、建筑技巧和红石机械等进阶内容，提升你的游戏体验。"
    link: /guide/gameplay/
---


<!-- Logo互动效果 -->
<div class="logo-interactive-container">
  <div class="logo-interactive" id="interactive-logo">
    <img src="/logo.svg" alt="屯人服Logo" />
    <div class="logo-particles"></div>
  </div>
</div>

<div class="custom-home-section">
  <h2>最新公告</h2>
  <div class="announcement-list">
    <div class="announcement-item">
      <span class="date">2023-12-15</span>
      <h3>服务器1.20.4版本更新公告</h3>
      <p>我们已经完成了服务器核心的升级，现在支持Minecraft 1.20.4版本...</p>
      <a href="/guide/updates/">阅读更多</a>
    </div>
    <div class="announcement-item">
      <span class="date">2023-12-01</span>
      <h3>冬季活动预告</h3>
      <p>即将到来的冬季活动将带来丰富的游戏内容和奖励，敬请期待...</p>
      <a href="/guide/community/events">阅读更多</a>
    </div>
  </div>
</div>

<!-- 流体动画背景 -->
<div class="fluid-background">
  <canvas id="fluid-canvas"></canvas>
</div>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Logo互动状态
const isLogoAnimating = ref(false)
const isLogoClicking = ref(false)
const isLogoHovering = ref(false) // 新增：跟踪鼠标是否悬停在Logo上

onMounted(() => {
  // 流体动画初始化
  const canvas = document.getElementById('fluid-canvas')
  const ctx = canvas.getContext('2d')
  let animationFrameId
  
  // 设置画布大小
  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  
  // 创建流体动画
  function createFluidAnimation() {
    const width = canvas.width
    const height = canvas.height
    
    // 波浪参数
    const waves = [
      { amplitude: 25, frequency: 0.02, speed: 0.01, color: 'rgba(22, 217, 199, 0.2)', phase: 0 },
      { amplitude: 20, frequency: 0.03, speed: 0.015, color: 'rgba(22, 217, 199, 0.15)', phase: 2 },
      { amplitude: 15, frequency: 0.01, speed: 0.02, color: 'rgba(255, 199, 0, 0.1)', phase: 4 }
    ]
    
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
    
    animate()
  }
  
  // 初始化流体动画
  window.addEventListener('resize', resizeCanvas)
  resizeCanvas()
  createFluidAnimation()
  
  // Logo互动效果初始化
  const logo = document.getElementById('interactive-logo')
  const logoParticles = document.querySelector('.logo-particles')
  
  if (logo && logoParticles) {
    // 创建粒子
    function createParticles() {
      logoParticles.innerHTML = ''
      const particleCount = 20
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.setProperty('--delay', `${Math.random() * 2}s`)
        particle.style.setProperty('--size', `${Math.random() * 8 + 2}px`)
        logoParticles.appendChild(particle)
      }
    }
    
    // 添加悬停效果
    logo.addEventListener('mouseenter', () => {
      isLogoHovering.value = true // 设置悬停状态为true
      
      // 只有在没有点击动画进行中时才应用悬停效果
      if (!isLogoClicking.value) {
        isLogoAnimating.value = true
        logo.classList.add('logo-hover')
        createParticles()
      }
    })
    
    logo.addEventListener('mouseleave', () => {
      isLogoHovering.value = false // 设置悬停状态为false
      isLogoAnimating.value = false
      logo.classList.remove('logo-hover')
    })
    
    // 添加点击效果，防止多次点击导致的鬼畜
    logo.addEventListener('click', () => {
      if (isLogoClicking.value) return // 如果正在执行点击动画，则忽略新的点击
      
      isLogoClicking.value = true
      isLogoAnimating.value = true // 设置动画状态为true
      
      // 移除悬停效果，避免动画冲突
      logo.classList.remove('logo-hover')
      
      // 移除之前可能存在的点击动画类
      logo.classList.remove('logo-click')
      
      // 清除之前的所有爆发粒子
      const oldBursts = logo.querySelectorAll('.logo-burst')
      oldBursts.forEach(burst => burst.remove())
      
      // 添加新的点击动画
      // 使用setTimeout确保DOM有时间处理类的移除
      setTimeout(() => {
        logo.classList.add('logo-click')
        
        // 创建更多粒子用于点击效果
        const burstCount = 15
        for (let i = 0; i < burstCount; i++) {
          const burst = document.createElement('div')
          burst.className = 'logo-burst'
          burst.style.setProperty('--angle', `${Math.random() * 360}deg`)
          burst.style.setProperty('--distance', `${Math.random() * 100 + 50}px`)
          burst.style.setProperty('--size', `${Math.random() * 10 + 5}px`)
          burst.style.setProperty('--color', Math.random() > 0.5 ? 'var(--vp-c-brand-1)' : 'var(--vp-c-yellow-1)')
          logo.appendChild(burst)
          
          // 移除爆发粒子
          setTimeout(() => {
            burst.remove()
          }, 1000)
        }
        
        // 动画结束后重置状态并检查是否需要应用悬停效果
        setTimeout(() => {
          logo.classList.remove('logo-click')
          isLogoClicking.value = false
          
          // 如果鼠标仍然悬停在Logo上，应用悬停效果
          if (isLogoHovering.value) {
            logo.classList.add('logo-hover')
            createParticles()
          } else {
            isLogoAnimating.value = false
          }
        }, 800) // 略长于动画时间，确保动画完全结束
      }, 10)
    })
    
    // 初始创建粒子
    createParticles()
  }
  
  // 清理函数
  onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas)
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    
    // 清理Logo事件监听器
    if (logo) {
      logo.removeEventListener('mouseenter', () => {})
      logo.removeEventListener('mouseleave', () => {})
      logo.removeEventListener('click', () => {})
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

/* Logo互动样式 */
.logo-interactive-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.logo-interactive {
  position: absolute;
  top: -37rem;
  right: 10%;
  width: 256px;
  height: 256px;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo-interactive img {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 8px rgba(22, 217, 199, 0.3));
  transition: filter 0.5s, transform 0.5s;
}

.logo-hover {
  transform: scale(1.1) rotate(5deg);
}

.logo-hover img {
  filter: drop-shadow(0 0 15px rgba(22, 217, 199, 0.6));
}

.logo-click {
  animation: logo-pulse 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes logo-pulse {
  0% { transform: scale(1); }
  30% { transform: scale(0.9) rotate(-5deg); }
  60% { transform: scale(1.1) rotate(5deg); }
  100% { transform: scale(1); }
}

.logo-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  background-color: var(--vp-c-brand-1);
  border-radius: 50%;
  opacity: 0;
  animation: float 3s ease-in-out infinite;
  animation-delay: var(--delay);
  width: var(--size);
  height: var(--size);
}

@keyframes float {
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translate(calc(Math.random() * 80px - 40px), calc(Math.random() * -100px - 20px));
  }
}

.logo-burst {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--size);
  height: var(--size);
  background-color: var(--color);
  border-radius: 50%;
  transform-origin: center;
  animation: burst 1s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
  pointer-events: none;
}

@keyframes burst {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0) rotate(0deg);
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) translateX(calc(cos(var(--angle)) * var(--distance))) translateY(calc(sin(var(--angle)) * var(--distance))) scale(1) rotate(360deg);
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

.VPFeature .icon {
  transition: transform 0.5s ease;
}

.VPFeature:hover .icon {
  transform: scale(1.2) rotate(5deg);
}

/* 修复VitePress默认Logo位置，避免与自定义Logo冲突 */
.VPHero .image {
  opacity: 0;
  pointer-events: none;
}
</style>

