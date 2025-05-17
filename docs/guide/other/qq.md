## QQ社群

欢迎加入我们的QQ社群，点击下方卡片即可快速加入：

<div class="qq-group-container">

  <a href="https://qm.qq.com/q/f8RTISPDHi" class="qq-group-card">
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
  background: linear-gradient(135deg, var(--vp-c-brand-1) 20%, var(--vp-c-brand-2) 100%);
  color: black;
  text-decoration: none;
  transition: var(--qq-card-transition);
  box-shadow: var(--qq-card-shadow);
  border: 1px solid var(--vp-c-brand-3);
}

.qq-group-card {
  background: linear-gradient(135deg, var(--vp-c-brand-1) 30%, var(--vp-c-brand-3) 100%);
  color: black;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
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
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.15);
  color: black;
}

.text-content p {
  margin: 0.5rem 0 0;
  opacity: 0.95;
  font-size: 0.95rem;
  font-weight: 500;
  color: black;
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
  box-shadow: var(--qq-card-shadow-hover);
}

.qq-group-card:hover .icon,
.qq-channel-card:hover .icon {
  transform: scale(1.1);
}

.qq-group-card:hover .arrow,
.qq-channel-card:hover .arrow {
  transform: translateX(3px);
  opacity: 1;
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