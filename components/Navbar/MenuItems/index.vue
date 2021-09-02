<template>
  <div class="tw-flex">
    <div class="tw-flex tw-text-lh-jungle-green">
      <div v-for="menuItem in menuItems" :key="menuItem.key" class="tw-mr-10">
        <a :href="menuItem.url">{{ menuItem.name }}</a>
      </div>
    </div>
    <div class="tw-flex tw-items-center">
      <div class="tw-mr-2.5 tw-font-medium">
        <a href="">Mi Perfil</a>
      </div>
      <div class="tw-relative">
        <div class="tw-z-10">
          <IconDot custom-styles="tw-bottom-2 tw-left-3 tw-absolute" pulse />
        </div>
        <div class="tw-z-20">
          <IconArrowDown />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuItems from './menuConfig'
export default {
  data() {
    return {
      menuItems,
    }
  },
}
</script>
