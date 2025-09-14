#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 开始修复 Taro 构建后的文件...');

// 修复 index_taro_comp.js 中的导入路径
function fixIndexTaroComp() {
  const filePath = 'entry/src/main/ets/pages/index/index/index_taro_comp.js';
  
  if (!fs.existsSync(filePath)) {
    console.log('❌ 文件不存在:', filePath);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // 修复所有导入路径
  const fixes = [
    { from: '"../../npm/@tarojs/taro"', to: '"../../../npm/@tarojs/taro"' },
    { from: '"../../npm/@tarojs/plugin-framework-react/dist/runtime"', to: '"../../../npm/@tarojs/plugin-framework-react/dist/runtime"' },
    { from: '"../../npm/@tarojs/components/tag"', to: '"../../../npm/@tarojs/components/tag"' },
    { from: '"../../npm/@tarojs/runtime"', to: '"../../../npm/@tarojs/runtime"' },
    { from: '"../../npm/react/jsx-runtime"', to: '"../../../npm/react/jsx-runtime"' },
    { from: '"../../npm/react"', to: '"../../../npm/react"' },
    { from: '"../../npm/@tarojs/react"', to: '"../../../npm/@tarojs/react"' }
  ];

  let hasChanges = false;
  fixes.forEach(fix => {
    if (content.includes(fix.from)) {
      content = content.replace(new RegExp(fix.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fix.to);
      hasChanges = true;
    }
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log('✅ 修复了 index_taro_comp.js 的导入路径');
  } else {
    console.log('ℹ️  index_taro_comp.js 无需修复');
  }
}

// 修复 app/index_taro_comp.js 中的导入路径
function fixAppTaroComp() {
  const filePath = 'entry/src/main/ets/app/index_taro_comp.js';
  
  if (!fs.existsSync(filePath)) {
    console.log('❌ 文件不存在:', filePath);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // 修复所有导入路径
  const fixes = [
    { from: '"./npm/@tarojs/taro"', to: '"../npm/@tarojs/taro"' },
    { from: '"./npm/@tarojs/plugin-framework-react/dist/runtime"', to: '"../npm/@tarojs/plugin-framework-react/dist/runtime"' },
    { from: '"./npm/react"', to: '"../npm/react"' },
    { from: '"./npm/@tarojs/react"', to: '"../npm/@tarojs/react"' }
  ];

  let hasChanges = false;
  fixes.forEach(fix => {
    if (content.includes(fix.from)) {
      content = content.replace(new RegExp(fix.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fix.to);
      hasChanges = true;
    }
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log('✅ 修复了 app/index_taro_comp.js 的导入路径');
  } else {
    console.log('ℹ️  app/index_taro_comp.js 无需修复');
  }
}

// 修复 index.ets 中的 @Entry 装饰器
function fixIndexEts() {
  const filePath = 'entry/src/main/ets/pages/index/index.ets';
  
  if (!fs.existsSync(filePath)) {
    console.log('❌ 文件不存在:', filePath);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // 检查是否已经有 @Entry 装饰器
  if (content.includes('@Entry')) {
    console.log('ℹ️  index.ets 已有 @Entry 装饰器');
    return;
  }

  // 在 @Component 前添加 @Entry
  content = content.replace(/(@Component\s*struct Index)/, '@Entry\n@Component\nstruct Index');
  
  fs.writeFileSync(filePath, content);
  console.log('✅ 添加了 @Entry 装饰器到 index.ets');
}

// 修复 pageStack 数组访问问题
function fixPageStackAccess() {
  const filePath = 'entry/src/main/ets/pages/index/index.ets';
  
  if (!fs.existsSync(filePath)) {
    console.log('❌ 文件不存在:', filePath);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  // 修复第一个 pageStack 访问
  if (content.includes('this.pageStack[0].path') && !content.includes('this.pageStack.length > 0 && this.pageStack[0].path')) {
    content = content.replace(
      /if \(this\.pageStack\[0\]\.path/g,
      'if (this.pageStack.length > 0 && this.pageStack[0].path'
    );
    hasChanges = true;
  }

  // 修复第二个 pageStack 访问
  if (content.includes('this.pageStack[this.pageStack.length - 1].path') && !content.includes('this.pageStack.length > 0 && this.pageStack[this.pageStack.length - 1].path')) {
    content = content.replace(
      /if \(this\.pageStack\[this\.pageStack\.length - 1\]\.path/g,
      'if (this.pageStack.length > 0 && this.pageStack[this.pageStack.length - 1].path'
    );
    hasChanges = true;
  }

  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log('✅ 修复了 pageStack 数组访问问题');
  } else {
    console.log('ℹ️  pageStack 数组访问无需修复');
  }
}

// 执行所有修复
try {
  fixIndexTaroComp();
  fixAppTaroComp();
  fixIndexEts();
  fixPageStackAccess();
  console.log('🎉 所有修复完成！');
} catch (error) {
  console.error('❌ 修复过程中出现错误:', error.message);
  process.exit(1);
}
