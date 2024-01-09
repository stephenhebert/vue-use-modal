<script setup>
import ModalContainer from '../../src/components/ModalContainer.vue'
import { useModal } from '../../src/composables/useModal'
import { h } from 'vue'

import MyCoolModal from './components/MyCoolModal.vue'

const { show } = useModal()

function openModal() {
  console.log('open modal')
  show(h(MyCoolModal, { someProp: 'some_value' }))
}
</script>

<template>
  <button 
    class="p-4 bg-blue-500 text-white rounded"
    @click="openModal"
  >Open modal</button>
  <ModalContainer />
</template>