import { ref } from 'vue'
export default function(initialValue = 0) {
  let count = ref(initialValue)
  const increment = () => {
    count.value++
  }
  return {
    increment,
    count
  }
}