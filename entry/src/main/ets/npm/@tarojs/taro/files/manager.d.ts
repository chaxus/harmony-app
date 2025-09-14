// @ts-nocheck
/**
 * HarmonyOS 文档：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687
 *
 * WX 文档：
 * https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.html
 *
 * Taro.js 文档
 * https://taro-docs.jd.com/taro/docs/apis/files/FileSystemManager
 *
 * HarmonyOS 不支持接口：
 * readCompressedFile
 * readCompressedFileSync
 * readdirSync
 * readZipEntry
 *
 * HarmonyOS 差异性接口：
 * readFile：encoding 仅支持 utf-8
 * readFileSync：encoding 仅支持 utf-8
 * write：encoding 仅支持 utf-8
 * writeSync：encoding 仅支持 utf-8
 * rmdirSync：recursive 参数无效（即不支持递归删除）
 * statSync：recursive 参数无效（即不支持递归获取目录下的每个文件的 Stats 信息）
 * getSavedFileList：返回值 fileList 中的每一项不包含 createTime 属性
 */
import type Taro from '../types';
export declare function validateSavedFilePath(savedFilePath: string): void;
export declare function getFileSystemManager(): Taro.FileSystemManager;
