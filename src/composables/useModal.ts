import { readonly, ref, h } from 'vue'
import { createGlobalState } from '@vueuse/core'

function getInstance() {
  const modal = ref(null)
  const readonlyModal = readonly(modal)
  const hide = () => {
    modal.value = null
  }
  const show = (m: any, modalProps: any) => {
    hide()
    modal.value = h(m,modalProps)
  }

  return {
    modal: readonlyModal,
    hide,
    show,
  }
}

export const useModal = createGlobalState(getInstance)