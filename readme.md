# HarmonyOS 应用项目

基于 [chaxus/native](https://github.com/chaxus/native/tree/harmony) 项目的 HarmonyOS 分支构建的跨平台移动应用。

## 📱 项目概述

这是一个使用 Taro 框架开发的 HarmonyOS 应用，支持跨平台开发，能够运行在 HarmonyOS 设备上。

### 🌟 特性

- **🚀 跨平台支持**: 基于 Taro 框架，支持 HarmonyOS 平台
- **📱 现代 UI**: 使用 HarmonyOS 原生组件构建
- **🔧 TypeScript**: 完整的 TypeScript 支持
- **🌐 WebView 集成**: 支持高级 WebView 功能
- **📦 模块化架构**: 清晰的代码组织结构

## 🛠️ 技术栈

- **框架**: Taro 3.x
- **语言**: TypeScript + ArkTS
- **平台**: HarmonyOS 5.0.5(17)
- **构建工具**: hvigor
- **包管理**: pnpm

## 📦 项目结构

```
harmony/
├── AppScope/                    # 应用级配置
│   ├── app.json5               # 应用配置
│   └── resources/              # 应用资源
├── entry/                      # 主模块
│   ├── src/main/
│   │   ├── ets/               # 源代码
│   │   │   ├── app.ets        # 应用入口
│   │   │   ├── pages/         # 页面
│   │   │   └── npm/           # 依赖包
│   │   ├── resources/         # 模块资源
│   │   └── module.json5       # 模块配置
│   └── build-profile.json5    # 构建配置
├── hvigor/                     # 构建工具配置
└── oh-package.json5           # 依赖配置
```

## 🚀 快速开始

### 环境要求

- **DevEco Studio**: 最新版本
- **HarmonyOS SDK**: 5.0.5(17) 或更高版本
- **Node.js**: 18+ 版本
- **pnpm**: 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd harmony
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **构建项目**
   ```bash
   pnpm build:harmony
   ```

### 开发调试

1. **打开 DevEco Studio**
2. **导入项目**: 选择项目根目录
3. **配置模拟器**: 创建并启动 HarmonyOS 模拟器
4. **运行项目**: 点击运行按钮或使用快捷键

## 🔧 构建命令

### 推荐构建方式（自动修复）

```bash
# 构建并自动修复 Taro 构建问题
pnpm run build:harmony:fix

# 或者使用脚本
./build-and-fix.sh
```

### 手动构建

```bash
# 构建 HarmonyOS 应用
pnpm build:harmony

# 手动修复构建后的文件
pnpm run fix:taro
```

### 其他命令

```bash
# 清理构建缓存
pnpm run clean

# 仅执行修复（不重新构建）
pnpm run fix:taro
```

### ⚠️ 重要说明

**Taro 构建问题**: Taro 构建会覆盖手动修复的文件，导致以下问题：
- 导入路径错误（`../../npm/` 应该是 `../../../npm/`）
- 缺少 `@Entry` 装饰器
- `pageStack` 数组访问问题

**WebView 网络权限**: 根据 [华为开发者论坛](https://developer.huawei.com/consumer/cn/forum/topic/0201894660337260403) 的说明，HarmonyOS 中的 WebView 组件需要配置网络权限才能正常工作。

**解决方案**: 使用 `pnpm run build:harmony:fix` 命令，它会自动构建并修复这些问题，包括：
- 自动修复所有导入路径问题
- 自动添加必需的 `@Entry` 装饰器
- 自动修复 `pageStack` 数组访问问题
- 自动配置网络权限支持 WebView 组件

## 📱 运行应用

### 在模拟器中运行

1. 启动 DevEco Studio
2. 打开项目
3. 选择 HarmonyOS 模拟器
4. 点击运行按钮

### 在真机上运行

1. 连接 HarmonyOS 设备
2. 启用开发者模式
3. 在 DevEco Studio 中选择设备
4. 运行应用

## 🛠️ 开发指南

### 页面开发

页面文件位于 `entry/src/main/ets/pages/` 目录下：

```typescript
@Entry
@Component
struct Index {
  // 页面逻辑
}
```

### 组件开发

共享组件位于 `entry/src/main/ets/npm/@tarojs/components/` 目录下。

### 资源管理

- **图片资源**: `entry/src/main/resources/base/media/`
- **字符串资源**: `entry/src/main/resources/base/element/string.json`
- **颜色资源**: `entry/src/main/resources/base/element/color.json`

## 🔍 故障排除

### 常见问题

1. **构建失败**
   - 检查 HarmonyOS SDK 版本
   - 确保 DevEco Studio 版本兼容
   - 清理构建缓存后重新构建

2. **模拟器无法启动**
   - 检查模拟器配置
   - 确保系统支持虚拟化
   - 重启 DevEco Studio

3. **应用崩溃**
   - 检查控制台错误信息
   - 验证代码语法
   - 检查资源文件路径

### 调试技巧

- 使用 DevEco Studio 的调试工具
- 查看控制台日志输出
- 使用断点调试功能

## 📚 相关文档

- [HarmonyOS 开发文档](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/overview-0000001478061905-V3)
- [Taro 框架文档](https://taro-docs.jd.com/docs/)
- [DevEco Studio 使用指南](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/ohos-deveco-studio-user-guide-0000001263280425-V3)

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源协议。

## 🔗 相关链接

- **源码项目**: [chaxus/native](https://github.com/chaxus/native/tree/harmony)
- **HarmonyOS 官网**: https://www.harmonyos.com/
- **Taro 官网**: https://taro-docs.jd.com/

## 📞 支持

如果遇到问题或有疑问：

1. 查看本文档的故障排除部分
2. 搜索现有的 Issues
3. 创建新的 Issue 并提供详细信息

---

**基于 [chaxus/native](https://github.com/chaxus/native/tree/harmony) 项目构建，使用 ❤️ 和 Taro 框架开发**
