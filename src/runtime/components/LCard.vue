<template>
  <el-card>
    <template #header />
    <slot />
  </el-card>
</template>

<script setup lang="ts">
import { ElCard } from 'element-plus'
</script>
