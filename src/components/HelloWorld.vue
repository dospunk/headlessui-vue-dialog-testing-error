<template>
  <button @click="open = true" id="open-button">Open Dialog</button>
  <Dialog :open="open" style="border: 1px solid red;">
    I am open!
    <button @click="open = false">Close me</button>
  </Dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Dialog } from '@headlessui/vue'

export default defineComponent({
  components: { Dialog },
  setup() {
    const open = ref(false)
    return { open }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
