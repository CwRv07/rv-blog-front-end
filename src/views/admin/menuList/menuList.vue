<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-14 15:03:03
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-18 17:26:39
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="menuList">
  import { useRouter } from 'vue-router'
  import {
    House,
    User,
    Document,
    Collection,
    CollectionTag,
  } from '@element-plus/icons-vue'
  type MenuItem = {
    index: string
    title: string
    url?: string
    icon?: any
    children?: MenuItem[]
  }

  const menu: MenuItem[] = reactive([
    {
      index: '1',
      title: '首页',
      url: '/admin/index',
      icon: markRaw(House),
    },
    {
      index: '2',
      title: '用户管理',
      url: '/admin/user',
      icon: markRaw(User),
    },
    {
      index: '3',
      title: '文章管理',
      icon: markRaw(Document),
      children: [
        {
          index: '3-1',
          title: '文章信息',
          url: '/admin/article',
        },
        {
          index: '3-2',
          title: '文章上传',
          url: '/admin/articleEdit',
        },
      ],
    },
    {
      index: '4',
      title: '类别管理',
      icon: markRaw(Collection),
    },
    {
      index: '5',
      title: '标签管理',
      icon: markRaw(CollectionTag),
    },
  ])

  /* 路由跳转 */
  const router = useRouter()
  const routerJump = (url: string) => {
    router.push({
      path: url,
    })
  }
</script>

<template>
  <div id="menu-list">
    <el-menu default-active="1">
      <template v-for="p in menu" :key="p.index">
        <template v-if="p.children == null">
          <el-menu-item :index="p.index" @click="routerJump(p.url || '')">
            <el-icon v-if="p.icon != null">
              <component :is="p.icon" />
            </el-icon>
            <span>{{ p.title }}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-sub-menu :index="p.index">
            <template #title>
              <el-icon v-if="p.icon != null">
                <component :is="p.icon" />
              </el-icon>
              <span>{{ p.title }}</span>
            </template>

            <el-menu-item
              :index="item.index"
              v-for="item in p.children"
              :key="item.index"
              @click="routerJump(item.url || '')"
            >
              {{ item.title }}
            </el-menu-item>
          </el-sub-menu>
        </template>
      </template>

      <!-- <el-sub-menu index="3">
        <template #title>
          <el-icon><location /></el-icon>
          <span>文章管理</span>
        </template>
        <el-menu-item-group title="标签管理">
          <el-menu-item index="1-1">标签信息</el-menu-item>
          <el-menu-item index="1-2">标签</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->

      <!-- <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
  #menu-list {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
</style>
