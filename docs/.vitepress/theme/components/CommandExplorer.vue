<script setup>
import { ref, computed, onMounted } from 'vue'

// 指令数据
const commands = ref([
  {
    name: '/tpa',
    categories: ['传送'],
    description: '请求传送到另一个玩家的位置',
    usage: '/tpa <玩家名>'
  },
  {
    name: '/tpahere',
    categories: ['传送'],
    description: '请求将另一个玩家传送到你的位置',
    usage: '/tpahere <玩家名>'
  },
  {
    name: '/tpaccept',
    categories: ['传送'],
    description: '接受传送请求',
    usage: '/tpaccept'
  },
  {
    name: '/tpdeny',
    categories: ['传送'],
    description: '拒绝传送请求',
    usage: '/tpdeny'
  },
  {
    name: '/home',
    categories: ['传送'],
    description: '传送到你设置的家',
    usage: '/home [家的名称]'
  },
  {
    name: '/sethome',
    categories: ['传送'],
    description: '设置一个家的位置',
    usage: '/sethome [家的名称]'
  },
  {
    name: '/delhome',
    categories: ['传送'],
    description: '删除一个家的位置',
    usage: '/delhome <家的名称>'
  },
  {
    name: '/warp',
    categories: ['传送'],
    description: '传送到服务器设置的公共地标',
    usage: '/warp <地标名称>'
  },
  {
    name: '/spawn',
    categories: ['传送'],
    description: '传送到服务器出生点',
    usage: '/spawn'
  },
  {
    name: '/back',
    categories: ['传送'],
    description: '返回上一个位置或死亡位置',
    usage: '/back'
  },
  {
    name: '/msg',
    categories: ['社交'],
    description: '向指定玩家发送私信',
    usage: '/msg <玩家名> <消息>'
  },
  {
    name: '/r',
    categories: ['社交'],
    description: '回复最后一个私信你的玩家',
    usage: '/r <消息>'
  },
  {
    name: '/ignore',
    categories: ['社交'],
    description: '屏蔽指定玩家的消息',
    usage: '/ignore <玩家名>'
  },
  {
    name: '/balance',
    categories: ['经济'],
    description: '查看你的账户余额',
    usage: '/balance [玩家名]'
  },
  {
    name: '/pay',
    categories: ['经济'],
    description: '向其他玩家转账',
    usage: '/pay <玩家名> <金额>'
  },
  {
    name: '/shop',
    categories: ['经济', '物品'],
    description: '打开服务器商店界面',
    usage: '/shop'
  },
  {
    name: '/sell',
    categories: ['经济'],
    description: '出售手中的物品',
    usage: '/sell <数量/hand/all>'
  },
  {
    name: '/kit',
    categories: ['物品'],
    description: '领取预设的物品包',
    usage: '/kit <包名>'
  },
  {
    name: '/hat',
    categories: ['物品'],
    description: '将手中的物品戴在头上',
    usage: '/hat'
  },
  {
    name: '/afk',
    categories: ['其他'],
    description: '标记自己为离开状态',
    usage: '/afk [原因]'
  },
  {
    name: '/rules',
    categories: ['其他'],
    description: '查看服务器规则',
    usage: '/rules'
  },
  {
    name: '/help',
    categories: ['其他'],
    description: '查看帮助信息',
    usage: '/help [页码/指令名]'
  },
  {
    name: '/list',
    categories: ['其他'],
    description: '查看在线玩家列表',
    usage: '/list'
  },
  {
    name: '/claim',
    categories: ['领地'],
    description: '创建一个领地',
    usage: '/claim'
  },
  {
    name: '/unclaim',
    categories: ['领地'],
    description: '删除一个领地',
    usage: '/unclaim'
  },
  {
    name: '/trust',
    categories: ['领地'],
    description: '允许其他玩家在你的领地内建造',
    usage: '/trust <玩家名>'
  },
  {
    name: '/untrust',
    categories: ['领地'],
    description: '撤销其他玩家在你的领地内的建造权限',
    usage: '/untrust <玩家名>'
  }
])

// 分类列表
const categories = computed(() => {
  const categorySet = new Set()
  commands.value.forEach(cmd => {
    cmd.categories.forEach(category => categorySet.add(category))
  })
  return Array.from(categorySet)
})

// 搜索和筛选状态
const searchQuery = ref('')
const selectedCategory = ref('全部')

// 复制功能
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      // 可以添加复制成功的提示
      console.log('复制成功')
    })
    .catch(err => {
      console.error('复制失败:', err)
    })
}

// 筛选后的指令列表
const filteredCommands = computed(() => {
  return commands.value.filter(cmd => {
    // 分类筛选
    if (selectedCategory.value !== '全部' && !cmd.categories.includes(selectedCategory.value)) {
      return false
    }
    
    // 搜索筛选
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      return cmd.name.toLowerCase().includes(query) || 
             cmd.description.toLowerCase().includes(query) ||
             cmd.categories.some(cat => cat.toLowerCase().includes(query))
    }
    
    return true
  })
})

</script>

<template>
  <div class="command-explorer">
    <!-- 搜索和筛选区域 -->
    <div class="command-filters">
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="搜索指令..." 
          class="search-input"
        />
        <div class="search-icon">🔍</div>
      </div>
      <div class="category-filter">
        <span class="filter-label">分类:</span>
        <div class="category-buttons">
          <button 
            class="category-btn" 
            :class="{ active: selectedCategory === '全部' }" 
            @click="selectedCategory = '全部'"
          >
            全部
          </button>
          <button 
            v-for="category in categories" 
            :key="category" 
            class="category-btn" 
            :class="{ active: selectedCategory === category }" 
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>
    <!-- 指令卡片区域 -->
    <div class="command-results">
      <p v-if="filteredCommands.length === 0" class="no-results">
        没有找到匹配的指令，请尝试其他搜索条件。
      </p>
      <div v-else class="command-grid">
        <div 
          v-for="cmd in filteredCommands" 
          :key="cmd.name" 
          class="command-card"
        >
          <div class="command-header">
            <h3 class="command-name">{{ cmd.name }}</h3>
            <button 
              class="copy-btn" 
              @click="copyToClipboard(cmd.name)"
              title="复制指令"
            >
              <span class="copy-icon">📋</span>
            </button>
          </div>
          <div class="command-categories">
            <span 
              v-for="(category, index) in cmd.categories" 
              :key="index" 
              class="command-category"
            >
              {{ category }}
            </span>
          </div>
          <div class="command-body">
            <p class="command-description">{{ cmd.description }}</p>
            <div class="command-details">
              <div class="detail-item">
                <span class="detail-label">用法:</span>
                <code class="detail-value">{{ cmd.usage }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.command-explorer {
  margin: 2rem 0;
  font-family: var(--vp-font-family-base);
}

/* 搜索和筛选样式 */
.command-filters {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.search-box {
  position: relative;
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  font-size: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

.search-icon {
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-2);
  pointer-events: none;
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
}

.filter-label {
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-right: 0.5rem;
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.category-btn {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-2px);
}

.category-btn.active {
  background-color: var(--vp-c-brand-1);
  color: white;
  border-color: var(--vp-c-brand-1);
}

/* 指令卡片样式 */
.command-results {
  margin-top: 1rem;
}

.no-results {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

.command-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.command-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.command-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.command-header {
  padding: 1rem 1.5rem;
  background-color: var(--vp-c-brand-1);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.command-name {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.copy-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.copy-icon {
  font-size: 16px;
}

.command-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background-color: var(--vp-c-bg-mute);
}

.command-category {
  font-size: 0.8rem;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
}

.command-body {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.command-description {
  margin-top: 0;
  margin-bottom: 1.2rem;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}

.command-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.detail-label {
  font-weight: 500;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.detail-value {
  color: var(--vp-c-text-1);
}

code {
  background-color: var(--vp-c-bg-mute);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
}

.examples-list, .aliases-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .command-grid {
    grid-template-columns: 1fr;
  }
  
  .category-filter {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .category-buttons {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    flex-wrap: nowrap;
  }
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.command-card {
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: calc(var(--index, 0) * 0.05s);
  opacity: 0;
}
</style>