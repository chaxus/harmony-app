// @ts-nocheck
/**
 * HarmonyOS 文档：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687
 *
 * WX 文档：
 * https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFileToDisk.html
 *
 * Taro.js 文档
 * https://taro-docs.jd.com/taro/docs/apis/files/saveFileToDisk
 *
 * HarmonyOS 不支持接口：
 * saveFileToDisk
 *
 * HarmonyOS 差异性接口：
 * openDocument：showMenu、type 选项无效
 * getSavedFileList：返回值 fileList 中的每一项不包含 createTime 属性
 * getSavedFileInfo：返回值不包含 createTime 属性
 */
import { getFileSystemManager } from './manager';
import type Taro from '../types';
export declare const saveFileToDisk: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
/**
 * HarmonyOS 不支持 showMenu 选项，并且 type 目前仅支持 *，详情参见：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-document-0000001168936589#section9616125953711
 */
export declare function openDocument(option: Taro.openDocument.Option): Promise<any>;
export declare function saveFile(option: Taro.saveFile.Option): Promise<any>;
export declare function removeSavedFile(option: Taro.removeSavedFile.Option): Promise<any>;
export declare function getFileInfo(option: Taro.getFileInfo.Option): Promise<Taro.getFileInfo.SuccessCallbackResult | Taro.getFileInfo.FailCallbackResult>;
export declare function getSavedFileList(option?: Taro.getSavedFileList.Option): Promise<Taro.getSavedFileList.SuccessCallbackResult>;
export declare function getSavedFileInfo(option: Taro.getSavedFileInfo.Option): Promise<Taro.getSavedFileInfo.SuccessCallbackResult>;
export { getFileSystemManager };
