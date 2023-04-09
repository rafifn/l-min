<template>
  <div>
    <el-table
      :data="body"
      :stripe="stripe"
      style="width: 100%"
    >
      <el-table-column
        v-for="(hd, i) in header"
        :key="i"
        :prop="hd.key"
        :label="hd.label"
      />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ElTable, ElTableColumn } from 'element-plus'
interface Header {
  label: string
  key: string
}
interface Props {
  body: Array<unknown>
  header: Header[]
  stripe?: boolean
}
defineProps<Props>()
</script>
