# 服务器线路

<div class="server-lines">
  <div class="server-line" onclick="copyToClipboard('a.506521.xyz')">
    <h3>北京直连线路</h3>
    <p>联通优选</p>
    <p>a.506521.xyz</p>
  </div>
  
  <div class="server-line" onclick="copyToClipboard('m.506521.xyz')">
    <h3>三网优化线路</h3>
    <p>联通/电信</p>
    <p>m.506521.xyz</p>
  </div>
  
  <div class="server-line" onclick="copyToClipboard('yd.506521.xyz')">
    <h3>三网优化线路</h3>
    <p>移动</p>
    <p>yd.506521.xyz</p>
  </div>
</div>

<script setup>
import { ref, onMounted } from 'vue'
// Ensure the function is defined before any onclick handlers
window.copyToClipboard = function(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const notification = document.createElement('div');
      notification.className = 'copy-notification';
      notification.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
        <span>已成功复制: ${text}</span>
      `;
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 2000);
    }).catch(err => {
      console.error('复制失败: ', err);
    });
  } else {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.innerHTML = `
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
      <span>已成功复制: ${text}</span>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  }
};
</script>

<style>
.copy-notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 16px;
  background: var(--vp-c-brand);
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease-out;
  z-index: 999;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.server-lines {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.server-line {
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: all 0.2s;
}

.server-line:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.server-line h3 {
  margin: 0 0 10px 0;
  color: var(--vp-c-brand);
}

.server-line p {
  margin: 5px 0;
}
</style>