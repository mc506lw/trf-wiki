---
title: 枪械系统
description: 屯人服枪械系统详细介绍
---

# 枪械系统

<script setup>
import { ref, onMounted } from 'vue'

const weapons = ref([])
const ammo = ref([])
const activeTab = ref('weapons')
const expandedWeapon = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('/data/weapons.json')
    const data = await response.json()
    weapons.value = data.weapons
    ammo.value = data.ammo
    isLoading.value = false
  } catch (error) {
    console.error('加载武器数据失败:', error)
    isLoading.value = false
  }
})

const toggleWeaponDetails = (weaponId) => {
  if (expandedWeapon.value === weaponId) {
    expandedWeapon.value = null
  } else {
    expandedWeapon.value = weaponId
  }
}

const getAmmoById = (ammoId) => {
  return ammo.value.find(a => a.id === ammoId) || {}
}

const scrollToAmmo = (ammoId) => {
  activeTab.value = 'ammo'
  setTimeout(() => {
    const element = document.getElementById(`ammo-${ammoId}`)
    if (element) {
      // 获取元素的位置信息
      const rect = element.getBoundingClientRect()
      // 计算滚动位置，使目标元素位于视口上方100px处
      const scrollTop = window.pageYOffset + rect.top - 100
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      })
    }
  }, 100)
}
</script>

<style>
.tabs-container {
  margin: 2rem 0;
}

.tabs {
  display: flex;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 1.5rem;
}

.tab {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab.active {
  color: var(--vp-c-brand);
  border-bottom: 2px solid var(--vp-c-brand);
}

.tab:hover {
  color: var(--vp-c-brand-light);
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--vp-c-brand);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 武器卡片样式 */
.weapons-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 1rem;
}

.weapon-card {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  position: relative;
  cursor: pointer;
}

.weapon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand);
}

.weapon-header {
  display: flex;
  align-items: center;
  padding: 16px;
}

.weapon-image-container {
  width: 240px;
  height: 135px;
  background-color: var(--vp-c-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  flex-shrink: 0;
}

.weapon-image-container img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.weapon-card:hover .weapon-image-container img {
  transform: scale(1.05);
}

.weapon-title {
  flex: 1;
}

.weapon-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--vp-c-brand);
}

.weapon-type {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
}

.weapon-type::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--vp-c-brand);
  margin-right: 6px;
}

.weapon-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.weapon-details.expanded {
  max-height: 500px;
  border-top: 1px dashed var(--vp-c-divider);
}

.weapon-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 16px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2px;
}

.stat-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.weapon-ammo {
  padding: 0 16px 16px;
}

.ammo-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
}

.ammo-title::before {
  content: '🔸';
  margin-right: 6px;
}

.ammo-link {
  display: inline-block;
  font-size: 0.9rem;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: var(--vp-c-brand-dimm);
  color: var(--vp-c-brand);
  cursor: pointer;
  transition: all 0.2s ease;
}

.ammo-link:hover {
  background-color: var(--vp-c-brand-light);
  color: var(--vp-c-white);
}

.weapon-acquisition {
  padding: 0 16px 16px;
  border-top: 1px dashed var(--vp-c-divider);
  margin-top: 8px;
}

.acquisition-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 16px;
  color: var(--vp-c-text-1);
}

.acquisition-text {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

/* 弹药卡片样式 */
.ammo-container {
  margin-top: 1rem;
}

.ammo-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.ammo-card:hover {
  transform: translateX(5px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.ammo-header {
  display: flex;
  padding: 16px;
}

.ammo-image-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-alt);
  border-radius: 6px;
  margin-right: 16px;
  flex-shrink: 0;
}

.ammo-image-container img {
  max-width: 80%;
  max-height: 80%;
}

.ammo-info {
  flex: 1;
}

.ammo-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  margin-bottom: 4px;
}

.ammo-description {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}

.ammo-content {
  padding: 0 16px 16px;
}

.compatible-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.compatible-weapons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.compatible-weapon {
  font-size: 0.8rem;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
}

.compatible-weapon:hover {
  background-color: var(--vp-c-brand-dimm);
  color: var(--vp-c-brand);
}

.ammo-acquisition {
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 16px;
  margin-top: 8px;
}

/* 动画效果 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.weapon-card, .ammo-card {
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
}

.weapon-card:nth-child(1) { animation-delay: 0.1s; }
.weapon-card:nth-child(2) { animation-delay: 0.2s; }
.weapon-card:nth-child(3) { animation-delay: 0.3s; }
.weapon-card:nth-child(4) { animation-delay: 0.4s; }
.weapon-card:nth-child(5) { animation-delay: 0.5s; }
.weapon-card:nth-child(6) { animation-delay: 0.6s; }

.ammo-card:nth-child(1) { animation-delay: 0.1s; }
.ammo-card:nth-child(2) { animation-delay: 0.2s; }
.ammo-card:nth-child(3) { animation-delay: 0.3s; }
.ammo-card:nth-child(4) { animation-delay: 0.4s; }
.ammo-card:nth-child(5) { animation-delay: 0.5s; }

@keyframes highlight {
  0% { background-color: var(--vp-c-brand-light); }
  100% { background-color: transparent; }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .weapon-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .weapon-image-container {
    width: 100%;
    height: 180px;
    margin-right: 0;
    margin-bottom: 16px;
  }
  
  .weapon-stats {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

<div class="tabs-container">
  <div class="tabs">
    <div 
      class="tab" 
      :class="{ active: activeTab === 'weapons' }" 
      @click="activeTab = 'weapons'"
    >
      枪械
    </div>
    <div 
      class="tab" 
      :class="{ active: activeTab === 'ammo' }" 
      @click="activeTab = 'ammo'"
    >
      弹药
    </div>
  </div>
  
  <div v-if="isLoading" class="loading-container">
    <div class="loading-spinner"></div>
  </div>
  
  <div v-else>
    <!-- 枪械页面 -->
    <div v-if="activeTab === 'weapons'">
      <p>在屯人服中，我们引入了多种精心设计的枪械，每种枪械都有其独特的属性和使用方式。点击枪械卡片可查看详细信息。</p>
      <div class="weapons-container">
        <div 
          v-for="weapon in weapons" 
          :key="weapon.id" 
          class="weapon-card"
          @click="toggleWeaponDetails(weapon.id)"
        >
          <div class="weapon-header">
            <div class="weapon-image-container">
              <img :src="weapon.image" :alt="weapon.name" onerror="this.src='/logo.svg'; this.style.padding='10px'">
            </div>
            <div class="weapon-title">
              <div class="weapon-name">{{ weapon.name }}</div>
              <div class="weapon-type">{{ weapon.type }}</div>
            </div>
          </div>
          <div class="weapon-details" :class="{ expanded: expandedWeapon === weapon.id }">
            <div class="weapon-stats">
              <div 
                v-for="(value, key) in weapon.stats" 
                :key="key"
                class="stat-item"
              >
                <span class="stat-label">{{ weapon.statsLabels?.[key] || key }}</span>
                <span class="stat-value">{{ value }}</span>
              </div>
            </div>
            <div class="weapon-ammo">
              <div class="ammo-title">适用弹药</div>
              <span 
                class="ammo-link" 
                @click.stop="scrollToAmmo(weapon.ammo)"
              >
                {{ getAmmoById(weapon.ammo).name }}
              </span>
            </div>
            <div class="weapon-acquisition">
              <div class="acquisition-title">获取方式</div>
              <div class="acquisition-text">{{ weapon.acquisition }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹药页面 -->
    <div v-if="activeTab === 'ammo'">
      <p>不同的枪械需要不同类型的弹药。了解各种弹药的特性和兼容性对于战斗至关重要。</p>
      <div class="ammo-container">
        <div 
          v-for="item in ammo" 
          :key="item.id" 
          class="ammo-card"
          :id="`ammo-${item.id}`"
        >
          <div class="ammo-header">
            <div class="ammo-image-container">
              <img :src="item.image" :alt="item.name" onerror="this.src='/logo.svg'; this.style.padding='10px'">
            </div>
            <div class="ammo-info">
              <div class="ammo-name">{{ item.name }}</div>
              <div class="ammo-description">{{ item.description }}</div>
            </div>
          </div>
          <div class="ammo-content">
            <div class="compatible-title">兼容武器</div>
            <div class="compatible-weapons">
              <span 
                v-for="weaponId in item.compatibleWeapons" 
                :key="weaponId" 
                class="compatible-weapon"
              >
                {{ weapons.find(w => w.id === weaponId)?.name || weaponId }}
              </span>
            </div>
            <div class="ammo-acquisition">
              <div class="acquisition-title">获取方式</div>
              <div class="acquisition-text">{{ item.acquisition }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## 使用技巧

1. **选择合适的枪械**：根据战斗距离和个人喜好选择合适的枪械。近距离战斗推荐使用冲锋枪或霰弹枪，中距离推荐突击步枪，远距离则适合使用狙击步枪。

2. **弹药管理**：随时关注弹药储备，确保有足够的弹药应对战斗。不同枪械使用不同类型的弹药，合理分配资源至关重要。

3. **精准射击**：瞄准敌人的头部可以造成更高的伤害。控制后坐力对于保持精准度非常重要，特别是在使用高后坐力武器时。

4. **战术配合**：与队友协同作战，合理分配不同类型的武器可以提高团队的整体战斗力。

5. **武器熟练度**：经常使用同一种武器可以提高你对该武器的熟练度，减少后坐力影响，提高命中率。

6. **合理搭配**：主武器和副武器应当合理搭配，以应对不同距离的战斗需求。例如，狙击步枪搭配手枪可以应对远距离和近距离的战斗。