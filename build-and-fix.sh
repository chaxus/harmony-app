#!/bin/bash

echo "🚀 开始构建 HarmonyOS 应用..."

# 执行 Taro 构建
echo "📦 执行 pnpm build:harmony..."
pnpm build:harmony

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "✅ Taro 构建成功"
    
    # 执行修复脚本
    echo "🔧 开始修复构建后的文件..."
    node fix-taro-build.js
    
    if [ $? -eq 0 ]; then
        echo "🎉 构建和修复完成！现在可以运行应用了。"
    else
        echo "❌ 修复过程中出现错误"
        exit 1
    fi
else
    echo "❌ Taro 构建失败"
    exit 1
fi
