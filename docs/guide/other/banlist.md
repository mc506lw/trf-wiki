# 封神榜

<style>
.fengshen-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  min-height: auto;
}

.ban-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: visible;
  border: 2px solid #ffd700;
  transform-style: preserve-3d;
}

.ban-card::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffd700);
  z-index: -1;
  filter: blur(25px);
  opacity: 0.3;
  transition: opacity 0.3s;
}

.ban-card:hover {
  transform: translateY(-10px) rotateX(5deg) rotateY(5deg) scale(1.05);
  box-shadow: 0 15px 45px rgba(255, 215, 0, 0.4);
}

.ban-card:hover::before {
  opacity: 0.6;
}

.ban-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff6b6b, #ffd93d);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  border: 2px solid white;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.ban-content {
  margin: 1.5rem 0;
  line-height: 1.6;
  position: relative;
}

.ban-content::after {
  content: "😅";
  position: absolute;
  right: -30px;
  top: -30px;
  font-size: 2em;
  animation: float 2s ease-in-out infinite;
}

.ban-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px dashed #ff6b6b;
}

.penalty-indicator {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 1em;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

.penalty-indicator::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%);
  animation: shine 3s infinite;
}

@keyframes shine {
  100% {
    transform: translateX(200%);
  }
}

.penalty-1 { background: linear-gradient(45deg, #ffd93d, #ff9d00); }
.penalty-2 { background: linear-gradient(45deg, #ff6b6b, #ff0080); }
.penalty-3 { background: linear-gradient(45deg, #6c5ce7, #00ff87); }
.penalty-4 { 
  background: linear-gradient(45deg,rgb(150, 165, 169), #d63031);
  animation: rainbow 2s infinite;
}

@keyframes rainbow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

/* 添加表情包装饰 */
.ban-card::after {
  content: "🤡";
  position: absolute;
  font-size: 2em;
  right: -15px;
  top: -15px;
  transform: rotate(15deg);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

/* 悬停时的小动画 */
.ban-card:hover .avatar {
  transform: rotate(360deg);
  transition: transform 0.8s ease;
}

.ban-info {
  margin-top: -1.7rem;
}
</style>


<div class="fengshen-container">
  <div class="ban-card warning">
    <div class="ban-header">
      <img src="https://q1.qlogo.cn/g?b=qq&nk=473654757&s=100" alt="用户头像" class="avatar"></img>
      <div class="ban-info">
        <h3>ddsudd</h3>
        <span style="color: #666; text-decoration: none;">QQ: 473654757</span>
      </div>
    </div>
    <div class="ban-content">
      <p>❌ 违反规定：开挂，随意打人</p>
      <p>📝 评价：糖B一个</p>
    </div>
    <div class="ban-footer">
      <span class="penalty-indicator penalty-1">永久封禁</span>
      <time>2025-05-25</time>
    </div>
  </div>

  <div class="ban-card warning">
    <div class="ban-header">
      <img src="https://q1.qlogo.cn/g?b=qq&nk=1466260233&s=100" alt="用户头像" class="avatar"></img>
      <div class="ban-info">
        <h3>訑.</h3>
        <span style="color: #666; text-decoration: none;">QQ: 1466260233</span>
      </div>
    </div>
    <div class="ban-content">
      <p>❌ 违反规定：开挂，分享外挂，骂人</p>
      <p>📝 评价：是个人物</p>
    </div>
    <div class="ban-footer">
      <span class="penalty-indicator penalty-1">永久封禁</span>
      <time>2025-06-27</time>
    </div>
  </div>
</div>