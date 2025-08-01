---
order: 10
---
# 管理团队

<script setup>
import { onMounted, ref } from 'vue';

const adminList = [
  {
    name: '老万Pro',
    id: 'mc506lw',
    roles: ['服主', '网页开发', '宣传', '配置文件编辑']
  },
  {
    name: 'alazeprt',
    id: 'alazeprt',
    roles: ['服主', '插件开发', '配置文件编辑']
  },
  {
    name: 'rainuil',
    id: 'rainuil',
    roles: ['管理']
  }
];

const currentAdmin = ref(0);
const skinViewer = ref(null);
const skinViewerContainer = ref(null);

const prevAdmin = () => {
  currentAdmin.value = (currentAdmin.value - 1 + adminList.length) % adminList.length;
  updateSkinViewer();
};

const nextAdmin = () => {
  currentAdmin.value = (currentAdmin.value + 1) % adminList.length;
  updateSkinViewer();
};

const updateSkinViewer = () => {
  if (!skinViewer.value || !adminList[currentAdmin.value].id) return;
  
  // 加载皮肤
  skinViewer.value.loadSkin(`/skin/${adminList[currentAdmin.value].id}.png`);
};

onMounted(() => {
  // 动态加载 skinview3d
  import('skinview3d').then((skinview3d) => {
    if (skinViewerContainer.value) {
      skinViewer.value = new skinview3d.SkinViewer({
        canvas: skinViewerContainer.value,
        width: 250,
        height: 350,
        skin: `/skin/${adminList[currentAdmin.value].id}.png`
      });

      // 设置动画
      skinViewer.value.animation = new skinview3d.WalkingAnimation();
      skinViewer.value.animation.speed = 1;
      
      // 启用自动旋转
      skinViewer.value.autoRotate = true;
      
      // 设置背景色
      skinViewer.value.background = 0xfff5e6; // 十六进制米白色
// 使用中青绿色，更柔和
    }
  }).catch(error => {
    console.error('Failed to load skinview3d:', error);
  });
});
</script>

<div class="admin-showcase">
  <div class="admin-viewer">
    <ClientOnly>
      <div class="admin-controls">
        <button @click="prevAdmin" class="control-btn">←</button>
        <canvas ref="skinViewerContainer" class="skin-viewer"></canvas>
        <button @click="nextAdmin" class="control-btn">→</button>
      </div>
      <template #fallback>
        <div class="loading-placeholder">
          <p>加载中...</p>
        </div>
      </template>
    </ClientOnly>
    <div class="admin-info" v-if="adminList[currentAdmin]">
      <h2>{{ adminList[currentAdmin].name }}</h2>
      <p v-if="adminList[currentAdmin].id">ID: {{ adminList[currentAdmin].id }}</p>
      <div class="admin-roles">
        <span v-for="role in adminList[currentAdmin].roles" :key="role" class="role-tag">{{ role }}</span>
      </div>
    </div>
  </div>
</div>

<style>
:root {
  --admin-card-bg: color-mix(
    in srgb, 
    var(--vp-c-brand-1) 5%, 
    rgba(255, 255, 255, 0.9)
  );

  --role-tag-bg: rgba(255, 255, 255, 0.18); /* 保持原有半透明效果 */
  --role-tag-hover: color-mix(
    in srgb, 
    var(--vp-c-brand-1) 15%, 
    rgba(255, 255, 255, 0.9)
  ); /* 悬停时增加品牌色浓度 */
  --admin-name-color: var(--vp-c-brand-1); /* 保持清晰可读性 */
  --control-btn-hover: color-mix(
    in srgb, 
    var(--vp-c-brand-1) 10%, 
    rgba(255, 255, 255, 0.9)
  ); /* 按钮悬停中等浓度 */
}


@media (max-width: 768px) {
  .admin-viewer {
    padding: 1rem;
    max-width: 95%;
  }
  
  .skin-viewer {
    width: 180px !important;
    height: 250px !important;
  }
  
  .control-btn {
    width: 36px;
    height: 36px;
    margin: 0 0.4rem;
  }
  
  .admin-info h2 {
    font-size: 1.2rem;
  }
  
  .role-tag {
    font-size: 0.8rem;
    padding: 0.25rem 0.7rem;
  }
}
.admin-showcase {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.admin-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--admin-card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--vp-shadow-3);
  max-width: 560px;
  width: 100%;
  border: 1px solid var(--vp-c-brand-3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.admin-viewer:hover {
  transform: translateY(-3px);
  box-shadow: var(--vp-shadow-4);
}

.admin-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;
}

.skin-viewer {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skin-viewer:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.control-btn {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: 1px solid var(--vp-button-brand-border);
  border-radius: 8px;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  box-shadow: var(--vp-shadow-1);
}

.control-btn:hover {
  background: var(--control-btn-hover);
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-2);
}

.admin-info {
  text-align: center;
  margin-top: 0.5rem;
}

.admin-info h2 {
  margin: 0.2rem 0;
  color: var(--admin-name-color);
  font-size: 1.3rem;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.admin-roles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 0.5rem;
}

.role-tag {
  background: var(--role-tag-bg);
  color: var(--vp-c-text-1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.25s ease;
  border: 1px solid var(--vp-c-brand-3);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.role-tag:hover {
  transform: translateY(-3px);
  box-shadow: var(--vp-shadow-3);
  background: var(--role-tag-hover);
  color: white;
}

.dark .admin-viewer {
  background: linear-gradient(145deg, var(--vp-c-brand-4) 0%, var(--vp-c-brand-5) 100%); /* 使用更深的品牌色 */
  border-color: var(--vp-c-brand-4);
}

.dark .admin-info h2 {
  color: var(--vp-c-brand-2); /* 使用较亮的品牌色 */
}

.dark .admin-roles .role-tag {
  background: rgba(255, 255, 255, 0.1); /* 更柔和的背景 */
  color: var(--vp-c-text-2); /* 调整文字颜色 */
  border-color: var(--vp-c-brand-4);
}

.dark .role-tag:hover {
  background: var(--vp-c-brand-3); /* 悬停背景 */
  color: white;
}

.dark .control-btn {
  background: var(--vp-button-brand-bg-dark); /* 使用黑暗模式按钮背景 */
  color: var(--vp-button-brand-text-dark); /* 使用黑暗模式按钮文字颜色 */
  border-color: var(--vp-button-brand-border-dark); /* 使用黑暗模式按钮边框颜色 */
}

.dark .control-btn:hover {
  background: var(--vp-c-brand-3); /* 悬停背景 */
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-2);
}

/* 定义黑暗模式下的品牌色变量，假设存在 */
/* 如果全局已定义，这些可以移除 */
.dark {
  --vp-c-brand-4: #0a8c7f; /* 假设的更深的品牌色 */
  --vp-c-brand-5: #076b61; /* 假设的更深的品牌色 */
  --vp-c-text-2: rgba(235, 235, 235, 0.6); /* 假设的黑暗模式文字颜色 */
  --vp-button-brand-bg-dark: var(--vp-c-brand-3); /* 假设的黑暗模式按钮背景 */
  --vp-button-brand-text-dark: white; /* 假设的黑暗模式按钮文字颜色 */
  --vp-button-brand-border-dark: var(--vp-c-brand-2); /* 假设的黑暗模式按钮边框颜色 */
}

/* 添加加载状态样式 */
.loading-placeholder {
  width: 250px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--admin-card-bg);
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-3);
}
</style>