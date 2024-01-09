# vue-use-modal

## Installation

```
> pnpm add @stephenhebert/vue-use-modal
```

## Usage

### App.vue
```
<script setup>
import { ModalContainer } from '@stephenhebert/vue-use-modal'
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
import { show } from '@stephenhebert/vue-use-modal'

import ModalComponent from '...'

function showMyModal() {
  show(ModalComponent, { prop1, prop2, ...})
}
</script>
```

See [example](example)