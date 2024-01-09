<script setup>
import { ref, watch, nextTick } from 'vue'
import { getFirstFocusableElement } from '../utils/getFirstFocusableElement'
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap';
import { useModal } from '../composables/useModal'

const vKbdTrap = VueKeyboardTrapDirectiveFactory().directive;
const { modal } = useModal()
const modalRef = ref(null)
const returnFocusElement = ref(null)

function setFocus() {
  returnFocusElement.value = document.activeElement
  const firstFocusableElement = getFirstFocusableElement(modalRef)
  if (firstFocusableElement) {
    firstFocusableElement.focus()
  }
}

function returnFocus() {
  returnFocusElement.value?.focus()
  returnFocusElement.value = null
}


function onModalShow() {
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    setFocus()
  })
}

function onModalHide() {
  document.body.style.overflow = 'auto'
  returnFocus()
}

watch(
  modal, 
  (newModal, oldModal) => {
    if (!newModal || newModal !== oldModal) {
      onModalHide()
    }
    if (newModal) {
      onModalShow()
    }
  }
)
</script>

<template>
  <Teleport v-if="modal" to="body">
    <div ref="modalRef">
      <component
        v-kbd-trap
        :is="modal" 
      />
    </div>
  </Teleport>
</template>