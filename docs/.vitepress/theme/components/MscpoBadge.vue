<template>
  <div class="mscpo-badge">
    <img src="/mscpo-logo.svg" alt="MSCPO Logo" class="logo">
    <div class="content">
      <h3>MSCPO认证成员服务器</h3>
      <p>我们已通过MSCPO高品质公益服务器认证</p>
    </div>
    <a class="details-btn" href="https://www.mscpo.top/" target="_blank">了解详情 →</a>
  </div>
</template>

<style scoped>
.mscpo-badge {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(22, 217, 197, 0.182);
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

.logo {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.content h3 {
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
  margin: 0;
}

.content p {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  margin: 4px 0 0;
}

.details-btn {
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(22, 217, 199, 0.3), rgba(22, 217, 199, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: var(--vp-c-brand-1);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(4px);
  margin-left: 15px;
  text-decoration: none;
}

@media (max-width: 768px) {
  .mscpo-badge {
    bottom: 20px;
    right: 20px;
    padding: 12px;
  }
  
  .logo {
    width: 32px;
    height: 32px;
  }
  
  .details-btn {
    padding: 6px 12px;
    font-size: 0.7rem;
    margin-left: 8px;
  }
}
</style>