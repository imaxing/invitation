<template>
  {{count}}
  <button @click="increment">count{{count}} vue increment</button> <br>
</template>
<script>
import useCount from '../hooks/use-count'
export default {
  name: 'Count',
  props: {
    count: {
      type: Number,
      default: 0,
      required: false
    }
  },
  setup(props) {
    return useCount(props.count)
  }
}
</script>