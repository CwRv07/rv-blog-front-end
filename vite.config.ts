/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 08:15:49
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-03 17:25:29
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
// vite.config.ts
import { UserConfig, loadEnv, ConfigEnv } from 'vite'
import path from 'path'
/* // setup name 增强插件
import vueSetupExtend from "vite-plugin-vue-setup-extend";
// 为打包后的文件提供传统浏览器兼容性支持
import legacy from "@vitejs/plugin-legacy";
// 压缩插件
import compressPlugin from "vite-plugin-compression";
//图片压缩
import viteImagemin from "vite-plugin-imagemin";
// 自动引入组件
import Components from "unplugin-vue-components/vite";
// ElementPlus
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 自动引入组件样式-ElementPlus
import {
	createStyleImportPlugin,
	ElementPlusResolve,
} from "vite-plugin-style-import";
// API自动引入
import AutoImport from "unplugin-auto-import/vite";
// 启动优化
import OptimizationPersist from "vite-plugin-optimize-persist";
// 扩展config
import PkgConfig from "vite-plugin-package-config"; */
// 环境配置
import { wrapperEnv } from './config/utils'

import { createVitePlugins, createViteServer, createViteBuild } from './config'
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  const { VITE_PUBLIC_PATH } = viteEnv
  return {
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
    server: createViteServer(viteEnv),
    build: createViteBuild(isBuild),
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/css/variables.scss" as *;
           `,
        },
      },
    },
  }
}
