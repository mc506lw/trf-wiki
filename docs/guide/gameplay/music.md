# 🎵 点歌系统

## 📌 基础操作
::: warning 注意
点歌系统必须安装配套客户端 Mod（在QQ群内下载）
:::

### ▶️ 点歌系统
```bash
/music [音乐ID/网易云链接]    # 快速点歌（支持网易云分享链接）
/music stop                   # 停止当前播放
/music list                   # 查看当前歌曲队列
```

**示例：**
```bash
/music https://music.163.com/song?id=2622931900
/music 2622931900
```

### 🔍 搜索与选择
```bash
/music search [歌名]      # 搜索歌曲（支持分页）
/music select [序号]      # 从搜索结果选择歌曲
/music nextpage           # 切换下一页
/music lastpage           # 切换上一页
```

## 🧾 队列管理

### 🗑️ 点歌维护
```bash
/music cancel (序号)   # 取消自己的点歌请求
```

### 🗳️ 投票系统
```bash
/music vote            # 投票切歌（需达到指定票数）
/music vote cancel     # 取消已发起的切歌投票
/music push (序号)     # 投票将歌曲插入队列头部
/music push cancel     # 取消已发起的插歌投票
```

## 🎨 界面设置

### 🖥️ HUD 管理
```bash
/music hud enable                # 启用/关闭所有界面
/music hud reset                 # 重置所有界面设置
```

### 🎛️ 单项设置
```bash
/music hud [位置] enable         # 启用/关闭特定界面
/music hud [位置] pos [x] [y]    # 设置界面坐标
/music hud [位置] dir [对齐方式] # 设置对齐方式（left/center/right）
/music hud [位置] color [HEX]    # 设置界面颜色
/music hud [位置] reset          # 重置特定界面
```

**位置参数说明：**
- `lyric`：歌词显示
- `info`：播放信息
- `queue`：歌曲队列

### 🖼️ 图片特效
```bash
/music hud pic size [尺寸]     # 设置专辑图尺寸（1-10）
/music hud pic rotate [on/off] # 开启/关闭图片旋转
/music hud pic speed [数值]    # 设置旋转速度（0.1-5.0）
```

## ⚠️ 注意事项

- 需安装配套客户端 Mod（在QQ群内下载）

## 📚 快捷参考表

| 功能类别 | 指令 | 说明 |
|---------|------|------|
| 播放控制 | `/music stop` | 停止播放 |
| 队列管理 | `/music list` | 查看队列 |
| 投票系统 | `/music vote` | 发起切歌投票 |
| 界面设置 | `/music hud reset` | 重置所有界面 |
| 搜索操作 | `/music search` | 搜索歌曲 |

## 💡 使用技巧
1. **快速点歌**：直接粘贴网易云分享链接，自动解析音乐ID
2. **高效投票**：当队列歌曲较多时，使用 `/music push` 将喜欢的歌曲提前
3. **个性化界面**：
   ```bash
   /music hud lyric color #FFD700    # 设置歌词为金色
   /music hud info pos 10 200       # 调整信息框位置
   ```
4. **静音模式**：使用 `/music mute` 可暂时退出点歌系统而不影响他人
---