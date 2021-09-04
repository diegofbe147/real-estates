<template>
  <div
    class="tw-sticky tw-top-0 tw-z-50 tw-h-15 md:tw-px-18 tw-px-5 tw-bg-white tw-border-b tw-border-lh-bg-gray">
    <div class="md:tw-flex tw-hidden tw-w-full tw-h-full tw-items-center tw-justify-between">
      <img src="~/assets/images/lh-desktop-logo.svg" alt="La Haus logo" />
      <div class="tw-flex">
        <div v-for="menuItem in menuItems" :key="menuItem.key" class="tw-mr-10">
          <NuxtLink :to="menuItem.urlPath" class="tw-text-lh-jungle-green">
            {{ menuItem.name }}
          </NuxtLink>
        </div>
        <div class="tw-flex tw-items-center tw-cursor-pointer">
          <NuxtLink to="/" class="tw-mr-2.5 tw-font-medium tw-text-lh-jungle-green">
            {{ $t('navbar.myProfile') }}
          </NuxtLink>
          <div class="tw-relative">
            <DotIndicator custom-styles="tw-bottom-2 tw-left-3 tw-absolute" pulse-animation />
            <img src="~/assets/icons/lh-arrow-down.svg" alt="icono flecha abajo" />
          </div>
        </div>
      </div>
    </div>
    <div class="md:tw-hidden tw-flex tw-h-full tw-w-full tw-items-center">
      <div class="tw-mr-2.5 tw-relative">
        <DotIndicator custom-styles="tw-z-10 tw--top-1 tw-right-0 tw-absolute" pulse-animation />
        <img src="~/assets/icons/lh-hamburger-menu.svg" class="tw-z-20" alt="icono menú" />
      </div>
      <img src="~/assets/images/lh-mobile-logo.svg" alt="La Haus logo" />
    </div>
  </div>
</template>

<script>
// Config
import menuItems from './menuConfig'

export default {
  data() {
    return {
      menuItems,
    }
  },
}
</script>
