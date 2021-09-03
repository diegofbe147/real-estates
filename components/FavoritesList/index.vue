<template>
  <div class="tw-flex tw-flex-col tw-flex-1 tw-pt-15 tw-pb-20 tw-items-center">
    <div class="tw-flex">
      <h1 class="tw-text-lh-jungle-green tw-font-semibold tw-text-3xl">Listas de favoritos</h1>
    </div>
  </div>
</template>

<script>
// Services
import favoritesService from '~/services/favorites';

export default {
  data() {
    return {
      favoritesList: []
    }
  },
  async fetch() {
    this.favoritesList = await favoritesService.getFavoritesList();
  }
}
</script>
