<template>
  <div class="tw-flex tw-flex-1 tw-flex-col tw-items-center tw-pt-30 lg:tw-pb-0 tw-pb-20">
    <h1 class="tw-font-semibold tw-text-lh-jungle-green tw-text-3xl tw-mb-14">
      {{ $t('favorites.title') }}
    </h1>
    <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-8 tw-gap-y-15">
      <FavoritesListItem v-for="favorite in favoritesList" :key="favorite.id" :favorite="favorite"/>
      <FavoritesListCardAddList />
    </div>
  </div>
</template>

<script>
// Services
import favoritesService from '~/services/favorites'

export default {
  data() {
    return {
      favoritesList: [],
    }
  },
  async fetch() {
    this.favoritesList = await favoritesService.getFavoritesList()
  },
}
</script>
