# vue-use-modal

## Installation

```
> pnpm add vue-use-modal
```

## Usage

### App.vue
```
<script setup>
import { ModalContainer } from 'vue-use-modal'
...
</script>

<template>
  ...
  <ModalContainer />
</template>
```

### Component.vue
```
<script setup>
import { show } from 'vue-use-modal'

import ModalComponent from '...'

function showMyModal() {
  show(ModalComponent, { prop1, prop2, ...})
}
</script>
```

See [example](example)