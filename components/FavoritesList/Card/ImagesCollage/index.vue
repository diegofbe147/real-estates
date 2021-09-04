<template>
  <div class="tw-w-73 tw-h-49 tw-relative tw-cursor-pointer tw-bg-lh-jungle-green tw-rounded-card">
    <div v-if="galleryImages.length === 0">
      <img src="~/assets/images/lh-empty-favorite.svg" alt="lista vacía"/>
    </div>
    <img
      v-for="(image, index) in imagesToDisplay" :key="index"
      alt="imagen de favorito"
      class="tw-absolute tw-h-full tw-rounded-card tw-object-cover tw-border-r tw-border-white"
      :src="image"
      :class="stylesByNumOfElements[numberOfImagesToDisplay][index]"
    />
    <div
      v-if="galleryImages.length >= 3"
      class="tw-relative tw-flex tw-items-center tw-justify-end tw-z-10 tw-h-full">
      <span class="tw-text-lh-white tw-font-semibold tw-z-20 tw-mr-5.5 tw-text-lg">
        +{{numberOfRemainingFavorites}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    galleryImages: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      stylesByNumOfElements: {
        1: ['tw-w-full tw-z-30'],
        2: ['tw-w-37.5 tw-z-30', 'tw-w-54.5 tw-z-20 tw-right-0'],
        3: [
        'tw-w-37.5 tw-z-30',
        'tw-w-28.5 tw-z-20 tw-left-28.5',
        'tw-w-30.5 tw-z-10 tw-right-0 tw-opacity-30'
        ]
      }
    }
  },
  computed: {
    imagesToDisplay() {
      return this.galleryImages.slice(0, 3)
    },
    numberOfImagesToDisplay() {
      return this.imagesToDisplay.length
    },
    numberOfRemainingFavorites() {
      return this.galleryImages.length - 2
    },
  },
}
</script>
