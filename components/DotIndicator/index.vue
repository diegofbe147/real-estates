<template>
  <div>
    <span class="tw-rounded-full tw-h-3 tw-w-3 tw-bg-lh-caribbean-green" :class="customStyles"/>
    <span
      v-if="pulseAnimation"
      class="tw-animate-ping tw-rounded-full tw-h-3 tw-w-3 tw-bg-lh-caribbean-green"
      :class="customStyles"/>
  </div>
</template>

<script>
export default {
  props: {
    pulseAnimation: {
      type: Boolean,
      required: false,
      default() {
        return false
      },
    },
    customStyles: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },
}
</script>
