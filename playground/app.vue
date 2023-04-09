<template>
  <div>
    Nuxt module playground!
    <ClientOnly>
      <LCard class="box-card">
        <slot name="header">
          <span>sksksks</span>
        </slot>
        <div v-for="o in 4" :key="o" class="text item">
          {{'List item ' + o }}
        </div>
      </LCard>
    </ClientOnly>
    <LTable
      :body="body"
      :header="header"
    />
  </div>
</template>

<script setup lang="ts">
const header = [
  {
    label: 'Date',
    key: 'date'
  },
  {
    label: 'Name',
    key: 'name'
  },
  {
    label: 'Address',
    key: 'address'
  }
]
const body = [
{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
]
</script>
