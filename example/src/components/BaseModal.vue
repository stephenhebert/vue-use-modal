<script setup>
import { ref } from 'vue'
import { useModal } from '../../../src/composables/useModal'
import BaseModalOverlay from './BaseModalOverlay.vue'

const { hide } = useModal()
const modal = ref(null)
</script>

<template>
  <BaseModalOverlay
    @click.self="hide"
    @keydown.esc="hide"
  >
    <div 
      class="flex flex-col overflow-hidden rounded bg-white shadow-xl lt-sm:m-2"
      ref="modal"
    >
      <div class="flex flex-col flex-gap-y-4 p-4">
        <div class="flex items-start justify-between flex-gap-x-4">
          <h3 class="h3">
            <slot name="header" />
          </h3>
          <button @click="hide">
            <div class="i-fa6-solid-xmark text-32px text-gray-600" />
            <span class="sr-only">Close</span>
          </button>
        </div>
        <hr>
        <slot />
      </div>
      <slot name="cta" />
    </div>
  </BaseModalOverlay>
</template>