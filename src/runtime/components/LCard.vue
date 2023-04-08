<template>
  <el-card>
    <slot name="header">
      <div class="clearfix">
        <span>Card name</span>
      </div>
    </slot>
    <slot />
  </el-card>
</template>
