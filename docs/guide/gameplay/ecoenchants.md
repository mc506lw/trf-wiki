# 额外附魔大全

以下是服务器添加的所有额外附魔列表，您可以通过筛选功能快速找到需要的附魔。

<div class="enchant-container">
  <div class="controls">
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="搜索附魔名称或描述..." 
      class="search-input"
    >
    <div class="filters">
      <div class="filter-group">
        <label>品质：</label>
        <div class="quality-filters">
          <button 
            v-for="quality in qualities" 
            :key="quality.value"
            @click="toggleQuality(quality.value)"
            :class="{
              'quality-btn': true,
              'active': selectedQualities.includes(quality.value),
              [quality.value]: true
            }"
          >
            {{ quality.label }}
          </button>
        </div>
      </div>
      <div class="filter-group">
        <label>获取方式：</label>
        <div class="source-filters">
          <label class="source-checkbox">
            <input type="checkbox" v-model="sources.enchantmentTable">
            <span>附魔台</span>
          </label>
          <label class="source-checkbox">
            <input type="checkbox" v-model="sources.villager">
            <span>村民</span>
          </label>
          <label class="source-checkbox">
            <input type="checkbox" v-model="sources.chest">
            <span>宝箱</span>
          </label>
        </div>
      </div>
    </div>
  </div>
  <div class="enchant-stats">
    找到 {{ filteredEnchants.length }} 个附魔（共 {{ enchants.length }} 个）
    <span v-if="selectedQualities.length > 0">
      | 品质：
      <span 
        v-for="q in selectedQualities" 
        :key="q"
        :class="['quality-tag', q]"
      >
        {{ getQualityLabel(q) }}
      </span>
    </span>
  </div>
  
  <transition-group name="enchant-list" tag="div" class="enchant-grid">
    <div 
      v-for="enchant in filteredEnchants" 
      :key="enchant.id"
      class="enchant-card"
      :class="enchant.quality"
    >
      <div class="enchant-header">
        <h3 class="enchant-name">{{ enchant.name }}</h3>
        <div class="enchant-quality" :class="enchant.quality">
          {{ getQualityLabel(enchant.quality) }}
        </div>
      </div>
      <div class="enchant-description">{{ enchant.description }}</div>
      <div class="enchant-meta">
        <div class="meta-item">
          <strong>可附魔物品：</strong>
          <span>{{ enchant.items.join('、') }}</span>
        </div>
        <div class="meta-item">
          <strong>获取方式：</strong>
          <div class="source-icons">
            <span 
              v-if="enchant.enchantmentTable" 
              class="source-icon enchantment-table-icon"
              title="可通过附魔台获取"
            >⚔️</span>
            <span 
              v-if="enchant.villager" 
              class="source-icon villager-icon"
              title="可通过村民交易获取"
            >🧑</span>
            <span 
              v-if="enchant.chest" 
              class="source-icon chest-icon"
              title="可通过宝箱获取"
            >📦</span>
            <span 
              v-if="!enchant.enchantmentTable && !enchant.villager && !enchant.chest" 
              class="source-icon special-icon"
            >✨ 特殊</span>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
  
  <div v-if="filteredEnchants.length === 0" class="no-results">
    <div class="no-results-icon">🔍</div>
    <h3>未找到匹配的附魔</h3>
    <p>请尝试调整筛选条件</p>
    <button @click="resetFilters" class="reset-btn">重置所有筛选器</button>
  </div>
</div>

<script setup>
import { ref, computed, reactive } from 'vue'

const enchants = [
  {
    id: 1,
    name: "磨损",
    description: "对目标的护甲额外造成附魔等级点耐久损耗",
    items: ["剑", "斧"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 2,
    name: "肾上腺素",
    description: "在抵挡攻击时,将获得1 + 附魔等级 ÷ 2秒的力量效果",
    items: ["盾牌"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 3,
    name: "奥术防御",
    description: "有附魔等级 x 4的几率免疫药水伤害",
    items: ["护甲"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 4,
    name: "☆ 升腾",
    description: "右键时,将你悬浮在空中,持续附魔等级 ÷ 4秒",
    items: ["剑"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 5,
    name: "光环",
    description: "距离你3 + 附魔等级 x 2格内的玩家受到的伤害降低附魔等级 x 10%",
    items: ["胸甲", "护腿"],
    quality: "特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 6,
    name: "黑暗降临",
    description: "有6 + 附魔等级%的几率使目标在4 + 附魔等级 ÷ 2秒内获得黑暗效果",
    items: ["剑"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 7,
    name: "爆炸挖掘",
    description: "有5 x 附魔等级%的几率挖掘一个3x3的区域",
    items: ["镐"],
    quality: "特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 8,
    name: "流血",
    description: "有1.5 x 附魔等级%的几率使目标获得流血效果",
    items: ["剑"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 9,
    name: "窒息保护",
    description: "有附魔等级 x 15%的几率免疫窒息伤害",
    items: ["头盔"],
    quality: "普通",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 10,
    name: "Boss杀手",
    description: "对Boss生物造成额外10 x 附魔等级%的伤害",
    items: ["弓", "弩"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 11,
    name: "采集诅咒",
    description: "有15 x 附魔等级%的几率无法成功破坏方块",
    items: ["斧", "锄", "镐", "铲"],
    quality: "传奇",
    enchantmentTable: true,
    villager: false,
    chest: true
  },
  {
    id: 12,
    name: "光明附加",
    description: "在深暗之域中对监守者造成额外4 x 附魔等级%的伤害",
    items: ["剑"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 13,
    name: "疾袭",
    description: "在疾跑时,攻击速度额外提升5 x 附魔等级%",
    items: ["剑"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 14,
    name: "切割",
    description: "攻击时对1 + 附魔等级格内的实体造成附魔等级 x 2点伤害",
    items: ["斧"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 15,
    name: "☆ 冲锋",
    description: "右键时,以5 x 附魔等级x的速度向前冲锋",
    items: ["剑"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 16,
    name: "混乱",
    description: "有2 x 附魔等级%的几率打乱目标的快捷栏",
    items: ["剑"],
    quality: "特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 17,
    name: "瘟疫",
    description: "有5 x 附魔等级%的几率在三叉戟落地处生成毒云",
    items: ["三叉戟"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 18,
    name: "暴击",
    description: "增加10 x 附魔等级%的暴击伤害",
    items: ["剑", "斧"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 19,
    name: "粘液杀手",
    description: "对史莱姆和岩浆怪造成额外5 x 附魔等级%的伤害",
    items: ["剑", "斧", "弓", "弩"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 20,
    name: "轻巧",
    description: "增加附魔等级 x 10%的攻击速度",
    items: ["剑", "斧"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 21,
    name: "☆ 爆破艺术",
    description: "右键时,挖掘1 + 附魔等级 x 4x1 + 附魔等级 x 4区域的方块",
    items: ["镐"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 22,
    name: "末地杀手",
    description: "对末地生物造成额外1 + 0.5 x 附魔等级点近战伤害",
    items: ["剑", "斧"],
    quality: "罕见",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 23,
    name: "末地领主",
    description: "在末地中时,将额外增加20 + 附魔等级 x 10%的伤害",
    items: ["剑", "弓", "三叉戟"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 24,
    name: "逃逸",
    description: "在受到伤害后,将获得附魔等级%的奔跑速度加成",
    items: ["靴子"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 25,
    name: "麒麟臂",
    description: "挖掘时,向前额外挖掘附魔等级个方块",
    items: ["铲"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 26,
    name: "轻功",
    description: "跳跃时不会踩踏作物和耕田",
    items: ["靴子"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 27,
    name: "致命一击",
    description: "基于目标损失的每一点生命值,将增加0.2 x 附魔等级%的伤害",
    items: ["剑", "斧"],
    quality: "罕见",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 28,
    name: "先发制人",
    description: "攻击时若目标处于最大生命值状态时,将造成额外30 + 20 x 附魔等级%的伤害",
    items: ["剑", "斧"],
    quality: "罕见",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 29,
    name: "闪光弹",
    description: "有附魔等级%的几率使目标获得失明效果",
    items: ["弓", "弩"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 30,
    name: "果农",
    description: "破坏树叶时，将额外提高一些几率掉落苹果",
    items: ["剪刀"],
    quality: "普通",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 31,
    name: "坚韧",
    description: "额外提供附魔等级 x 2%的伤害加成",
    items: ["护甲"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 32,
    name: "冰霜",
    description: "有3 + 2 x 附魔等级%的几率让目标获得2 + 附魔等级秒冻结效果",
    items: ["弓"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 33,
    name: "游离",
    description: "当生命值低于20%时,将获得10 x 附魔等级%的移动速度加成",
    items: ["靴子"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 34,
    name: "巨人杀手",
    description: "当目标拥有更多的生命值时,将额外造成0.5 + 附魔等级 x 0.1x(上限为1.6 + 附魔等级 x 0.4x)伤害",
    items: ["剑"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 35,
    name: "软弱诅咒",
    description: "有15 x 附魔等级%的几率使攻击无效",
    items: ["剑", "斧"],
    quality: "传奇",
    enchantmentTable: true,
    villager: false,
    chest: true
  },
  {
    id: 36,
    name: "生化母体",
    description: "死亡后释放一个1 + 附魔等级秒伤害效果云",
    items: ["头盔"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 37,
    name: "饥饿诅咒",
    description: "增加50 x 附魔等级%的饥饿值流失速度",
    items: ["头盔"],
    quality: "传奇",
    enchantmentTable: true,
    villager: false,
    chest: true
  },
  {
    id: 38,
    name: "自动冶炼",
    description: "挖掘时自动将方块掉落物熔炼成其对应的产物",
    items: ["镐"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 39,
    name: "内斗",
    description: "对玩家额外造成2.5 x 附魔等级点伤害",
    items: ["剑"],
    quality: "普通",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 40,
    name: "跳跃射击",
    description: "在空中时,伤害额外增升10 x 附魔等级%",
    items: ["弓", "弩"],
    quality: "罕见",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 41,
    name: "吸血鬼",
    description: "对目标造成伤害时,恢复生命值为伤害的附魔等级 x 10%",
    items: ["剑"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 42,
    name: "伐木工",
    description: "一次性破坏最多4 x 附魔等级块木头",
    items: ["斧"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 43,
    name: "新陈代谢",
    description: "吃食物时,将额外增加附魔等级 x 12.5%的饱食度",
    items: ["胸甲"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 44,
    name: "倒霉诅咒",
    description: "破坏方块时有15 x 附魔等级%的几率不掉落战利品",
    items: ["锄", "铲", "镐", "斧"],
    quality: "传奇",
    enchantmentTable: true,
    villager: false,
    chest: true
  },
  {
    id: 45,
    name: "地狱领主",
    description: "在地狱中时，将额外增加20 + 附魔等级 x 10%的伤害",
    items: ["剑", "弓", "三叉戟"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 46,
    name: "远古时运",
    description: "挖掘远古残骸时,将额外增加一定的掉落几率",
    items: ["镐"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 47,
    name: "忍者",
    description: "在潜行时,将额外造成0.5 + 附魔等级 x 0.5%的伤害",
    items: ["剑"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 48,
    name: "破釜沉舟",
    description: "额外增加500%的伤害，但会与其他所有附魔排斥",
    items: ["剑", "斧"],
    quality: "非常特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 49,
    name: "永恒诅咒",
    description: "阻止该物品在铁砧上修改",
    items: ["all"],
    quality: "传奇",
    enchantmentTable: true,
    villager: false,
    chest: true
  },
  {
    id: 50,
    name: "毒刺",
    description: "每受到2点的伤害，将对攻击者造成0.5 x 附魔等级秒(不会超过4 + 附魔等级秒)的中毒效果",
    items: ["护腿"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 51,
    name: "快速拉弓",
    description: "让你在使用100 - (15 x 附魔等级)%的张力下可以全速射击箭矢",
    items: ["弓"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 52,
    name: "反弹",
    description: "将受到的20 + 附魔等级 x 10%伤害反弹给攻击者",
    items: ["盾牌"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 53,
    name: "自我修复",
    description: "每隔1.5秒自动恢复附魔等级点耐久度",
    items: ["all"],
    quality: "非常特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 54,
    name: "生生不息",
    description: "农作物将自动重新种植播种",
    items: ["锄"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 55,
    name: "节约",
    description: "在使用烟花时,有附魔等级 x 20%的几率不会消耗",
    items: ["鞘翅"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 56,
    name: "☆ 冲击",
    description: "右键时,对半径为2 + 附魔等级格范围内所有实体造成3 x 附魔等级点伤害",
    items: ["剑"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 57,
    name: "潜影抢夺",
    description: "抢夺潜影壳时,将额外增加一定的掉落几率",
    items: ["剑"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 58,
    name: "修罗",
    description: "当生命值低于50%时，对目标的暴击伤害将增加1 + 0.25 x 附魔等级%",
    items: ["斧"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 59,
    name: "狙击手",
    description: "增加10 x 附魔等级%的爆头伤害",
    items: ["弓", "弩", "三叉戟"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 60,
    name: "屠夫",
    description: "对友好生物额外造成2.5 x 附魔等级点伤害",
    items: ["剑"],
    quality: "普通",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 61,
    name: "滑流",
    description: "握持时,将额外增加附魔等级 x 8%的移动速度",
    items: ["三叉戟"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 62,
    name: "空气动力学",
    description: "每飞行1 x 附魔等级个方块,箭矢将额外造成11 - 附魔等级 ÷ 2%的伤害",
    items: ["弓", "弩"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 63,
    name: "灵魂绑定",
    description: "死亡时保留该物品",
    items: ["all"],
    quality: "非常特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 64,
    name: "☆ 灵魂风暴",
    description: "右键时,献祭6点生命值,在15 + 5 x 附魔等级秒内提供150 + 50 x 附魔等级的攻击伤害加成",
    items: ["剑"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 65,
    name: "避雷针",
    description: "在雷暴天气中,钩中目标有1 + 附魔等级%的几率生成25 + 5 x 附魔等级点伤害的闪电",
    items: ["钓鱼竿"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 66,
    name: "耐力",
    description: "减少奔跑时的附魔等级 x 20%的饥饿值消耗",
    items: ["胸甲"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 67,
    name: "轻量化",
    description: "提供附魔等级 x 5%的移动速度加成",
    items: ["靴子"],
    quality: "特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 68,
    name: "安眠锤",
    description: "攻击时有2.5 + 2.5 x 附魔等级%的几率使目标获得1秒的震荡效果",
    items: ["剑", "弓", "三叉戟", "弩"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 69,
    name: "物品磁铁",
    description: "战利品,掉落物和经验直接进入你的背包",
    items: ["镐", "剑", "斧"],
    quality: "普通",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 70,
    name: "宙斯之力",
    description: "有附魔等级%的几率在攻击目标时触发附魔等级 ÷ 2道闪电",
    items: ["弓", "弩"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 71,
    name: "生机勃勃",
    description: "提供额外附魔等级点生命值",
    items: ["护甲"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 72,
    name: "☆ 向位传送",
    description: "右键时,将你向前传送3 + 附魔等级 x 2个方块",
    items: ["剑"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 73,
    name: "三重射击",
    description: "一次装填发射三支箭矢",
    items: ["弓"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 74,
    name: "隐匿",
    description: "受到伤害后有2 x 附魔等级%的几率消失0.5 + 附魔等级 ÷ 4秒",
    items: ["护甲"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 75,
    name: "连锁",
    description: "挖掘矿石时,最多连锁2 + 3 x 附魔等级个相同方块",
    items: ["镐"],
    quality: "稀有",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 76,
    name: "☆ 活力",
    description: "右键时,将你恢复至最大生命值",
    items: ["剑", "斧", "镐", "铲"],
    quality: "特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 77,
    name: "跃迁引擎",
    description: "用箭击中目标时会将你传送到目标身边",
    items: ["弓"],
    quality: "非常特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 78,
    name: "经验时运",
    description: "掉落的经验额外增加100 + 附魔等级 x 20",
    items: ["剑", "斧", "镐", "铲", "锄", "弓", "弩", "三叉戟"],
    quality: "罕见",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 79,
    name: "创伤",
    description: "攻击时有附魔等级 x 3%的几率给予目标持续0.75 x (附魔等级 + 2)秒的1点伤害",
    items: ["弓", "弩"],
    quality: "传奇",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 80,
    name: "龙之后裔",
    description: "提供10 x 附魔等级%的近战伤害加成",
    items: ["鞘翅"],
    quality: "史诗",
    enchantmentTable: true,
    villager: true,
    chest: true
  },
  {
    id: 81,
    name: "☆ 透视",
    description: "右键时,在半径为3 + 2 x 附魔等级个方块内，让矿石获得1 + 附魔等级秒发光效果",
    items: ["镐"],
    quality: "特殊",
    enchantmentTable: true,
    villager: true,
    chest: true
  }
]



// 定义品质选项
const qualities = [
  { value: "普通", label: "普通" },
  { value: "罕见", label: "罕见" },
  { value: "稀有", label: "稀有" },
  { value: "史诗", label: "史诗" },
  { value: "传奇", label: "传奇" },
  { value: "特殊", label: "特殊" },
  { value: "非常特殊", label: "非常特殊" }
]

// 获取品质标签
const getQualityLabel = (value) => {
  const quality = qualities.find(q => q.value === value)
  return quality ? quality.label : value
}

// 搜索查询
const searchQuery = ref('')

// 选中的品质
const selectedQualities = ref([])

// 获取方式筛选
const sources = reactive({
  enchantmentTable: false,
  villager: false,
  chest: false
})

// 切换品质筛选
const toggleQuality = (quality) => {
  const index = selectedQualities.value.indexOf(quality)
  if (index === -1) {
    selectedQualities.value.push(quality)
  } else {
    selectedQualities.value.splice(index, 1)
  }
}

// 重置所有筛选器
const resetFilters = () => {
  searchQuery.value = ''
  selectedQualities.value = []
  sources.enchantmentTable = false
  sources.villager = false
  sources.chest = false
}

// 筛选后的附魔
const filteredEnchants = computed(() => {
  return enchants.filter(enchant => {
    // 搜索筛选
    const query = searchQuery.value.toLowerCase()
    if (query && 
        !enchant.name.toLowerCase().includes(query) && 
        !enchant.description.toLowerCase().includes(query)) {
      return false
    }
    
    // 品质筛选
    if (selectedQualities.value.length > 0 && 
        !selectedQualities.value.includes(enchant.quality)) {
      return false
    }
    
    // 来源筛选
    const sourceFilters = []
    if (sources.enchantmentTable) sourceFilters.push(enchant.enchantmentTable)
    if (sources.villager) sourceFilters.push(enchant.villager)
    if (sources.chest) sourceFilters.push(enchant.chest)
    
    // 如果至少一个来源被选中，但当前附魔不满足任何被选中的来源需求
    if (sourceFilters.length > 0 && !sourceFilters.some(Boolean)) {
      return false
    }
    
    return true
  })
})
</script>

<style scoped>
.enchant-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333333;
}

.controls {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 25px;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #a3d2ca;
  border-radius: 8px;
  background: #ffffff;
  color: #333333;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #5eaaa8;
  box-shadow: 0 0 0 3px rgba(94, 170, 168, 0.2);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 20px;
}

.filter-group {
  flex: 1;
  min-width: 300px;
}

.filter-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333333;
  font-size: 16px;
}

.quality-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.quality-btn {
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  background: #e0e0e0;
  color: #333333;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.quality-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.quality-btn.active {
  background: #5eaaa8;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(94, 170, 168, 0.3);
}

.source-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.source-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 15px;
  background: #f0f0f0;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.source-checkbox:hover {
  background: #dbebe7;
}

.source-checkbox input {
  margin-right: 8px;
}

.enchant-stats {
  padding: 10px 15px;
  background: #f0f0f0;
  border-radius: 6px;
  margin-bottom: 20px;
  color: #333333;
  font-size: 15px;
}

.quality-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  margin: 0 5px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  background: #a3d2ca;
}

.enchant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.enchant-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #a3d2ca;
  transform: translateY(0);
}

.enchant-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.enchant-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
}

.enchant-name {
  margin: 0;
  font-size: 20px;
  color: #333333;
}

.enchant-quality {
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 13px;
  font-weight: bold;
}

.enchant-quality.普通 { background: #95a5a6; color: #2c3e50; }
.enchant-quality.罕见 { background: #2ecc71; color: white; }
.enchant-quality.稀有 { background: #3498db; color: white; }
.enchant-quality.史诗 { background: #9b59b6; color: white; }
.enchant-quality.传奇 { background: #f1c40f; color: #2c3e50; }
.enchant-quality.特殊 { background: #e74c3c; color: white; }
.enchant-quality.非常特殊 { 
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  color: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.enchant-quality.非常特殊::before {
  content: attr(data-text);
  position: absolute;
  -webkit-text-fill-color: white;
}

.enchant-description {
  padding: 20px;
  color: #555555;
  line-height: 1.6;
  min-height: 80px;
}

.enchant-meta {
  padding: 0 20px 20px;
}

.meta-item strong {
  color: #777777;
}

.source-icons {
  display: flex;
  gap: 12px;
  margin-top: 5px;
}

.source-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e0e0e0;
  color: #5eaaa8;
  font-size: 18px;
}

.source-icon.enchantment-table-icon { background: rgba(52, 152, 219, 0.2); }
.source-icon.villager-icon { background: rgba(46, 204, 113, 0.2); }
.source-icon.chest-icon { background: rgba(241, 196, 15, 0.2); }
.source-icon.special-icon { 
  background: rgba(231, 76, 60, 0.2);
  width: auto;
  padding: 0 12px;
  border-radius: 18px;
}


.no-results {
  text-align: center;
  padding: 50px 20px;
  background: #ffffff;
  border-radius: 12px;
  margin-top: 20px;
}

.no-results-icon {
  font-size: 60px;
  margin-bottom: 20px;
  color: #c0c0c0;
}

.no-results h3 {
  color: #555555;
  margin-bottom: 10px;
}

.no-results p {
  color: #999999;
  margin-bottom: 20px;
}

.reset-btn {
  padding: 10px 25px;
  background: #5eaaa8;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;
}

.reset-btn:hover {
  background: #4d9a94;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(94, 170, 168, 0.2);
}

/* 动画效果 */
.enchant-list-move,
.enchant-list-enter-active,
.enchant-list-leave-active {
  transition: all 0.5s ease;
}

.enchant-list-enter-from,
.enchant-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.enchant-list-leave-active {
  position: absolute;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .filters {
    flex-direction: column;
    gap: 15px;
  }

  .filter-group {
    min-width: 100%;
  }

  .enchant-grid {
    grid-template-columns: 1fr;
  }
}
</style>