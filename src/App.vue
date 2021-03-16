<template>
  <Count v-for="item in counts" :key="item" :count="item" />
  <button @click="add_count">添加</button>
</template>

<script>
import Count from './components/Count.vue'
import { reactive } from 'vue'
export default {
  name: 'App',
  components: { Count },
  setup() {
    let counts = reactive([])
    const add_count = () => counts.push(counts.length)
    return {
      add_count,
      counts
    }
  }
}
</script>
