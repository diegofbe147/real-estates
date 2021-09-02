<template>
  <div>
    <span
      class="tw-rounded-full tw-h-3 tw-w-3 tw-bg-lh-caribbean-green"
      :class="customStyles"
    ></span>
    <span
      v-if="pulse"
      class="
        tw-animate-ping tw-rounded-full tw-h-3 tw-w-3 tw-bg-lh-caribbean-green
      "
      :class="customStyles"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    pulse: {
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
