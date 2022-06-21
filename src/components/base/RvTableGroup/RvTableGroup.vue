<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-16 11:43:42
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 21:08:19
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvTableGroup">
  import { toRaw } from 'vue'
  import { Plus } from '@element-plus/icons-vue'

  /* 表格数据 & 分页器数据 */
  defineProps<{
    tableProps: {
      prop: string
      label: string
      width: string | number
      fixed?: boolean
      overflow?: boolean
      formatter?: (row: any, column: any, cellValue: any, index: any) => any
    }[]
    tableData: { [key: string]: any }[]
    pageData: {
      currentPage: number
      pageSize: number
      total: number
    }
  }>()

  /* 表格操作 & 分页器操作 */
  const emit = defineEmits([
    'editItem',
    'deleteItem',
    'changePage',
    'insertItem',
  ])
</script>

<template>
  <div id="rv-table-group">
    <el-table class="userTable" :data="tableData" style="width: 100%" stripe>
      <el-table-column
        v-for="p in tableProps"
        :key="p.prop"
        :prop="p.prop"
        :label="p.label"
        :min-width="p.width"
        :fixed="p.fixed == null ? false : true"
        :show-overflow-tooltip="p.overflow == null ? false : true"
        :formatter="p.formatter"
      />
      <el-table-column fixed="right" min-width="100">
        <template #header>
          <div class="operation">
            <span>操作</span>
            <el-button
              type="primary"
              size="small"
              :icon="Plus"
              circle
              @click="emit('insertItem')"
            />
          </div>
        </template>
        <template #default="slotProps">
          <el-button
            link
            type="primary"
            size="small"
            @click="emit('editItem', slotProps.$index, toRaw(slotProps.row))"
          >
            编辑
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
            @click="emit('deleteItem', slotProps.$index, toRaw(slotProps.row))"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="pageData.currentPage"
      v-model:page-size="pageData.pageSize"
      :total="pageData.total"
      layout="prev, pager, next"
      @current-change="(val:number) => emit('changePage', val)"
      hide-on-single-page
    />
  </div>
</template>

<style lang="scss" scoped>
  #rv-table-group {
    .userTable {
      font-size: var(--el-font-size-base);
    }

    .operation {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .el-pagination {
      padding: 0;
    }
  }
</style>
