<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
export default {
  components: {
    Header
  }
}
</script>