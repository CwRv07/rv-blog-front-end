/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 09:43:23
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 10:57:34
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import legacy from '@vitejs/plugin-legacy'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
// import { configMockPlugin } from "./mock";
import { configCompressPlugin } from './compress'
import { configImageminPlugin } from './imagemin'
import { configStyleImportPlugin } from './style'
import {
  configAutoImportPlugin,
  configVueComponentsPlugin /* configVueIconsPlugin */,
} from './unplugin'
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_USE_COMPRESS,
    VITE_COMPRESS_DELETE_ORIGIN_FILE,
    VITE_USE_MOCK,
    VITE_LEGACY,
  } = viteEnv
  const plugins = [vue(), vueSetupExtend(), PkgConfig(), OptimizationPersist()]
  // vite-plugin-mock
  // VITE_USE_MOCK && plugins.push(configMockPlugin(isBuild));
  // 是否为打包后的文件提供传统浏览器兼容性支持
  VITE_LEGACY &&
    plugins.push(
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      })
    )
  if (isBuild) {
    // vite-plugin-compress
    VITE_USE_COMPRESS &&
      plugins.push(configCompressPlugin(VITE_COMPRESS_DELETE_ORIGIN_FILE))
    // vite-plugin-imagemin
    VITE_USE_IMAGEMIN && plugins.push(configImageminPlugin())
  }
  // unplugin-auto-import
  plugins.push(configAutoImportPlugin())
  // unplugin-vue-components
  plugins.push(configVueComponentsPlugin())
  // vite-plugin-style-import
  // plugins.push(configStyleImportPlugin())
  // unplugin-icons
  // plugins.push(configVueIconsPlugin());
  return plugins
}
