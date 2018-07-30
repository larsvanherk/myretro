<template>
  <section class="home">
    <h1>v-retro</h1>
    <retro-board/>
  </section>
</template>

<script>
import RetroBoard from '@/components/retro-board/RetroBoard.vue';

export default {
  name: 'Home',

  components: {
    RetroBoard
  }
};
</script>

<style lang="scss">
.home {
  h1 {
    margin: 7vh auto;
    text-align: center;
  }
}
</style>

