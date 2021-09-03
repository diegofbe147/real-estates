<template>
  <div>
    <div class="tw-mb-5">
      <FavoritesListCardImagesCollage :gallery-images="favorite.galleryImages" />
    </div>
    <div class="tw-flex tw-flex-col">
      <span class="tw-text-lg tw-font-semibold tw-text-lh-jungle-green tw-mb-3" >{{favorite.name}}</span>
      <span class="tw-text-sm tw-font-regular tw-text-lh-jungle-green" >{{favorite.galleryImages.length}} propiedades guardadas</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favorite: {
      type: Object,
      required: true,
    },
  },
}
</script>
