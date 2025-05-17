## QQ社群

欢迎加入我们的QQ社群，点击下方卡片即可快速加入：

<div class="qq-group-container">

  <a href="https://qm.qq.com/q/6rVnCwgEmc" class="qq-group-card">
    <div class="card-content">
      <span class="icon">🎮</span>
      <div class="text-content">
        <h3>官方QQ群</h3>
        <p>玩家交流/问题反馈/组队联机</p>
      </div>
      <span class="arrow">➡️</span>
    </div>
  </a>
</div>

<style>
:root {
  --qq-card-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  --qq-card-shadow-hover: 0 6px 16px rgba(0, 0, 0, 0.15);
  --qq-card-transition: all 0.3s ease;
}

.qq-group-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  padding: 0 1rem;
}

.qq-channel-card,
.qq-group-card {
  display: block;
  border-radius: 12px;
  padding: 1.5rem;
  background: linear-gradient(135deg, #2E8B57 20%, #3CB371 100%);
  text-decoration: none;
  transition: var(--qq-card-transition);
  box-shadow: var(--qq-card-shadow);
  border: 1px solid #8FBC8F;
  backdrop-filter: saturate(180%) blur(16px);
  position: relative;
  overflow: hidden;
}

/* 黑暗模式适配 */
.dark .qq-group-card {
  background: linear-gradient(135deg, #2E8B57 20%, #3CB371 100%);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  color: white;
}

.dark .qq-group-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.03);
  z-index: -1;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
}

.icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: var(--qq-card-transition);
}

.text-content h3 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.text-content p {
  margin: 0.5rem 0 0;
  opacity: 0.95;
  font-size: 0.95rem;
  font-weight: 500;
}

.arrow {
  margin-left: auto;
  font-size: 1.5rem;
  opacity: 0.8;
  transition: var(--qq-card-transition);
}

.qq-channel-card:hover,
.qq-group-card:hover {
  transform: translateY(-3px);
}

.qq-group-card:hover .icon,
.qq-channel-card:hover .icon {
  transform: scale(1.1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.dark .qq-group-card:hover {
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.6);
  color: white;
}


.qq-group-card:hover .arrow,
.qq-channel-card:hover .arrow {
  transform: translateX(3px);
  opacity: 1;
}

/* 增强交互效果 */
.qq-group-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .qq-group-container {
    padding: 0 0.5rem;
  }
  
  .qq-channel-card,
  .qq-group-card {
    padding: 1.2rem;
  }
  
  .icon {
    font-size: 2rem;
  }
  
  .text-content h3 {
    font-size: 1.1rem;
  }
  
  .text-content p {
    font-size: 0.9rem;
  }
}
</style>

> 💡 点击卡片即可快速加入，加入后请查看置顶公告了解最新动态