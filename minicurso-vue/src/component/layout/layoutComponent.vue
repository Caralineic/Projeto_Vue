<script setup lang="ts">
  import Header from "@/component/layout/headerComponent.vue"
  import Footer from "@/component/layout/footerComponent.vue"
  import HomeView from "@/component/views/HomeView.vue"
</script>
<template>
<Header></Header>
<HomeView/>
<Footer></Footer>
</template>

<style scoped>
main{
  min-height: 80vh;
}
</style>