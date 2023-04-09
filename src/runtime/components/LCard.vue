<template>
  <el-card>
    <template #header>
      <slot name="header" />
    </template>
    <slot />
  </el-card>
</template>

<script setup lang="ts">
import { ElCard } from 'element-plus'
</script>
