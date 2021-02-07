<template>
  <div>
   我对策音乐
   
  </div>
</template>

<script>
import { getRouter } from "@/utils/save-browser";
export default {
  mounted (){
    this.$nextTick(() => {
      console.log(getRouter())
    })
  }
}
</script>

<style scoped>

</style>