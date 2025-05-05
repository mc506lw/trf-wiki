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
  },
  {
    name: 'レミリア',
    id: 'remlia_',
    roles: ['插件开发', '配置文件编辑']
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
      skinViewer.value.background = 0x16d9c7;
    }
  }).catch(error => {
    console.error('Failed to load skinview3d:', error);
  });
});
</script>

<div class="admin-showcase">
  <div class="admin-viewer">
    <div class="admin-controls">
      <button @click="prevAdmin" class="control-btn">←</button>
      <canvas ref="skinViewerContainer" class="skin-viewer"></canvas>
      <button @click="nextAdmin" class="control-btn">→</button>
    </div>
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
.admin-showcase {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.admin-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(22, 217, 199, 0.1);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.admin-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;
}

.skin-viewer {
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.control-btn {
  background: #10b3a3;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.control-btn:hover {
  background: #0a8c7f;
}

.admin-info {
  text-align: center;
  margin-top: 0.5rem;
}

.admin-info h2 {
  margin: 0.2rem 0;
  color: #0a8c7f;
  font-size: 1.3rem;
}

.admin-roles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 0.5rem;
}

.role-tag {
  background: #ffc700;
  color: #333;
  padding: 0.2rem 0.6rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>