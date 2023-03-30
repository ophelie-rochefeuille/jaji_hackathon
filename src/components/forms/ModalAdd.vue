<template>

  <div class="vue-modal" v-show="open">
    <div class="vue-modal-inner">
      <div class="vue-modal-content">
        <font-awesome-icon class="close-cross" name="close" @click="$emit('close')" icon="fas fa-close" />
        <slot />

      </div>
    </div>

  </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

export default {
  components: {FontAwesomeIcon},
  props: {
    open: {
      type: Boolean,
      required: true
    },
    data: {
      type: {},
      required: false,

    }
  }
}
</script>

<style scoped lang="scss">
*,
::before,
::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0,0,0,0.4);
  z-index: 10;
}

.vue-modal-inner{
  max-width: 40%;
  background-color: white;
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 20%;
}

.vue-modal-content{
  padding:  2rem;
}

.close-cross{
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
}
</style>
