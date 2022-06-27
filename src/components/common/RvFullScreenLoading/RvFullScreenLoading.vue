<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-13 09:07:38
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-13 10:33:41
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div
    id="fullScreenLoading"
    v-loading.fullscreen.lock="isFullScreenLoading"
    :element-loading-spinner="svg"
    element-loading-svg-view-box="0 0 38 38"
    element-loading-background="rgba(90, 90, 90, 0.9)"
  ></div>
</template>

<script setup lang="ts" name="rvFullScreenLoading">
  import { useFullScreenLoadingStore } from '@/store/fullScreenLoading'
  import { storeToRefs } from 'pinia'
  const { isFullScreenLoading } = storeToRefs(useFullScreenLoadingStore())
  const svg = `
  <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stop-color="#fff" stop-opacity="0" offset="0%"/>
            <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>
            <stop stop-color="#fff" offset="100%"/>
        </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </path>
            <circle fill="#fff" cx="36" cy="18" r="1">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
`
</script>

<style lang="scss" scoped>
  #fullScreenLoading {
    :deep(.el-loading-spinner) {
      background-color: red;
    }
  }
</style>
