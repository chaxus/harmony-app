#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 开始修复 Taro 构建后的文件...');

// 修复所有页面 taro_comp.js 中的导入路径
function fixAllTaroComps() {
  const pagesDir = 'entry/src/main/ets/pages';
  const fixes = [
    { from: '"../../npm/@tarojs/taro"', to: '"../../../npm/@tarojs/taro"' },
    { from: '"../../npm/@tarojs/plugin-framework-react/dist/runtime"', to: '"../../../npm/@tarojs/plugin-framework-react/dist/runtime"' },
    { from: '"../../npm/@tarojs/components/tag"', to: '"../../../npm/@tarojs/components/tag"' },
    { from: '"../../npm/@tarojs/runtime"', to: '"../../../npm/@tarojs/runtime"' },
    { from: '"../../npm/react/jsx-runtime"', to: '"../../../npm/react/jsx-runtime"' },
    { from: '"../../npm/react"', to: '"../../../npm/react"' },
    { from: '"../../npm/@tarojs/react"', to: '"../../../npm/@tarojs/react"' }
  ];

  // 查找所有 taro_comp.js 文件
  const taroCompFiles = [];
  
  function findTaroCompFiles(dir) {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        findTaroCompFiles(fullPath);
      } else if (item === 'index_taro_comp.js') {
        taroCompFiles.push(fullPath);
      }
    });
  }

  findTaroCompFiles(pagesDir);

  if (taroCompFiles.length === 0) {
    console.log('ℹ️  未找到页面 taro_comp.js 文件');
    return;
  }

  let totalFixed = 0;
  taroCompFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    fixes.forEach(fix => {
      if (content.includes(fix.from)) {
        content = content.replace(new RegExp(fix.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fix.to);
        hasChanges = true;
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      totalFixed++;
    }
  });

  if (totalFixed > 0) {
    console.log(`✅ 修复了 ${totalFixed} 个页面 taro_comp.js 文件的导入路径`);
  } else {
    console.log('ℹ️  所有页面 taro_comp.js 文件无需修复');
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

// 修复页面配置和 @Entry 装饰器
function fixPageConfig() {
  // 检查是否存在 taro_tabbar.ets
  const tabbarPath = 'entry/src/main/ets/taro_tabbar.ets';
  const indexPath = 'entry/src/main/ets/pages/index/index.ets';
  
  if (fs.existsSync(tabbarPath)) {
    // 如果存在 taro_tabbar.ets，更新 main_pages.json
    const mainPagesPath = 'entry/src/main/resources/base/profile/main_pages.json';
    let content = fs.readFileSync(mainPagesPath, 'utf8');
    
    if (!content.includes('"taro_tabbar"')) {
      content = content.replace(/"pages\/index\/index"/g, '"taro_tabbar"');
      fs.writeFileSync(mainPagesPath, content);
      console.log('✅ 更新了 main_pages.json 使用 taro_tabbar');
    } else {
      console.log('ℹ️  main_pages.json 已配置 taro_tabbar');
    }
    
    // 检查 taro_tabbar.ets 是否有 @Entry 装饰器
    let tabbarContent = fs.readFileSync(tabbarPath, 'utf8');
    if (!tabbarContent.includes('@Entry')) {
      tabbarContent = tabbarContent.replace(/(@Component\s*struct)/, '@Entry\n@Component\nstruct');
      fs.writeFileSync(tabbarPath, tabbarContent);
      console.log('✅ 添加了 @Entry 装饰器到 taro_tabbar.ets');
    } else {
      console.log('ℹ️  taro_tabbar.ets 已有 @Entry 装饰器');
    }
  } else if (fs.existsSync(indexPath)) {
    // 如果存在传统的 index.ets，处理它
    let content = fs.readFileSync(indexPath, 'utf8');
    
    if (!content.includes('@Entry')) {
      content = content.replace(/(@Component\s*struct Index)/, '@Entry\n@Component\nstruct Index');
      fs.writeFileSync(indexPath, content);
      console.log('✅ 添加了 @Entry 装饰器到 index.ets');
    } else {
      console.log('ℹ️  index.ets 已有 @Entry 装饰器');
    }
  } else {
    console.log('❌ 未找到页面文件 (taro_tabbar.ets 或 index.ets)');
  }
}

// 添加网络权限配置
function addNetworkPermissions() {
  const moduleJsonPath = 'entry/src/main/module.json5';
  const stringJsonPath = 'entry/src/main/resources/base/element/string.json';
  
  // 检查 module.json5 是否已有网络权限配置
  if (fs.existsSync(moduleJsonPath)) {
    let content = fs.readFileSync(moduleJsonPath, 'utf8');
    
    if (!content.includes('ohos.permission.INTERNET')) {
      // 添加网络权限配置
      content = content.replace(
        /"extensionAbilities": \[\s*\]/,
        `"extensionAbilities": [],
    "requestPermissions": [
      {
        "name": "ohos.permission.INTERNET",
        "reason": "$string:internet_permission_reason",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when": "inuse"
        }
      }
    ]`
      );
      
      fs.writeFileSync(moduleJsonPath, content);
      console.log('✅ 添加了网络权限配置到 module.json5');
    } else {
      console.log('ℹ️  module.json5 已有网络权限配置');
    }
  }

  // 检查并添加字符串资源
  if (fs.existsSync(stringJsonPath)) {
    let content = fs.readFileSync(stringJsonPath, 'utf8');
    
    if (!content.includes('internet_permission_reason')) {
      // 添加网络权限说明字符串
      content = content.replace(
        /(\s*{\s*"name":\s*"EntryAbility_label",\s*"value":\s*"label"\s*})/,
        `$1,
    {
      "name": "internet_permission_reason",
      "value": "应用需要网络权限以支持WebView组件访问网页内容"
    }`
      );
      
      fs.writeFileSync(stringJsonPath, content);
      console.log('✅ 添加了网络权限说明字符串');
    } else {
      console.log('ℹ️  字符串资源已包含网络权限说明');
    }
  }
}

// 修复 pageStack 数组访问问题
function fixPageStackAccess() {
  const filesToCheck = [
    'entry/src/main/ets/pages/index/index.ets',
    'entry/src/main/ets/taro_tabbar.ets'
  ];

  let totalFixed = 0;
  
  filesToCheck.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
      console.log(`ℹ️  文件不存在: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // 修复第一个 pageStack 访问 (pageStack[0])
    if (content.includes('this.pageStack[0].path') && !content.includes('this.pageStack.length > 0 && this.pageStack[0].path')) {
      content = content.replace(
        /if \(this\.pageStack\[0\]\.path/g,
        'if (this.pageStack.length > 0 && this.pageStack[0].path'
      );
      hasChanges = true;
    }

    // 修复第二个 pageStack 访问 (pageStack[length - 1])
    if (content.includes('this.pageStack[this.pageStack.length - 1].path') && !content.includes('this.pageStack.length > 0 && this.pageStack[this.pageStack.length - 1].path')) {
      content = content.replace(
        /if \(this\.pageStack\[this\.pageStack\.length - 1\]\.path/g,
        'if (this.pageStack.length > 0 && this.pageStack[this.pageStack.length - 1].path'
      );
      hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      totalFixed++;
    }
  });

  if (totalFixed > 0) {
    console.log(`✅ 修复了 ${totalFixed} 个文件的 pageStack 数组访问问题`);
  } else {
    console.log('ℹ️  pageStack 数组访问无需修复');
  }
}

// 执行所有修复
try {
  fixAllTaroComps();
  fixAppTaroComp();
  fixPageConfig();
  fixPageStackAccess();
  addNetworkPermissions();
  console.log('🎉 所有修复完成！');
} catch (error) {
  console.error('❌ 修复过程中出现错误:', error.message);
  process.exit(1);
}
