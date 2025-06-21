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


> 💡 点击卡片即可快速加入，加入后请查看置顶公告了解最新动态
---
# 屯人服QQ群管理规则  
**最新修订于2025年6月20日**

> **仅为屯人服服务器规则的QQ群内独立版本，无极大区别。**

## 一、基本原则  
**"独立思考，和谐共处"**  
所有群成员需遵守腾讯QQ群管理规范，并具备基本判断力。本规则适用于"屯人服"官方QQ群全体成员，包括群内聊天、文件传输、群活动等行为。


## 二、违规分类与处置措施  

### **A类 - 严重违规**
1. **言论禁区**  
   - 发布涉及政治敏感、宗教极端主义、种族歧视、人身攻击、涉黄涉暴言论  
   - 传播恐怖谣言、煽动对管理团队或其他成员的恶意攻击  
   - 发送钓鱼链接、病毒文件、恶意插件  

2. **恶意营销**  
   - 未经报备发布外部服务器宣传信息、RMB交易广告  
   - 使用机器人批量刷屏、刷表情包干扰正常聊天  
   - 冒充管理员进行诈骗或诱导性发言  

3. **连带责任**  
   - 群内组织或参与对抗管理团队的行为  
   - 教唆他人违反本规则且造成实际影响  

> **处置**：包括但不限于：  

> ▶ 移除违规成员  
> ▶ 禁言30天

---

### **B类 - 一般违规**
1. **不当言论**  
   - 公开辱骂、阴阳怪气、恶意调侃他人  
   - 讨论外挂使用方法、游戏漏洞利用技巧  
   - 传播未经核实的服务器负面消息  

2. **行为规范**  
   - 使用多个小号重复领取群内福利
   - 恶意举报他人、伪造违规证据  
   - 连续3次提醒仍不配合群管理  

> **处置梯度**：  
> ▶ 首次：禁言1-7天并公开检讨  
> ▶ 二次：禁言30天 
> ▶ 三次：升级为A类处理  

---

### **C类 - 提示性规范（警告教育为主）**
1. **灰色地带**  
   - 非恶意提及历史争议事件、社会热点话题  
   - 个人作品推广未标注"广告"字样  
   - 使用非主流昵称影响群成员辨识  

2. **技术要求**  
   - 发送超大体积文件影响群功能运行  
   - 频繁@全体成员非紧急通知  
   - 未按要求备注群昵称（格式：游戏ID+姓名）  

> **处置**：首次口头警告，二次强制修改，三次计入B类违规

---

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