<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import BaseModal from './BaseModal.vue'

defineProps(['someProp'])

onMounted(() => {
  console.log('modal shown')
})

onBeforeUnmount(() => {
  console.log('modal hidden')
})
</script>

<template>
  <BaseModal>
    <div>I am a modal!</div>
    <pre>{{ {someProp} }}</pre>
  </BaseModal>
</template>