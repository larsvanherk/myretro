<template>
  <div class="retro-board">
    <div class="row">
      <div class="one-half column">
        <board-column
          card-type="More"
          :cards="getCardCategory('MORE')">
        </board-column>
      </div>

      <div class="one-half column">
        <board-column
          card-type="Less"
          :cards="getCardCategory('LESS')">
        </board-column>
      </div>
    </div>

    <div class="row">
      <div class="one-half column">
        <board-column
          card-type="Start"
          :cards="getCardCategory('START')">
        </board-column>
      </div>

      <div class="one-half column">
        <board-column
          card-type="Stop"
          :cards="getCardCategory('STOP')">
        </board-column>
      </div>
    </div>

    <board-column
      card-type="Continue"
      :cards="getCardCategory('CONTINUE')">
    </board-column>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BoardColumn from './subcomponents/BoardColumn.vue';

export default {
  name: 'RetroBoard',

  components: {
    BoardColumn
  },

  computed: {
    ...mapState(['retro']),
    ...mapGetters(['getCardCategory'])
  }
};
</script>

<style lang="scss">
.retro-board {
  > .board-column {
    width: 50%;
    margin: auto;
  }
}

@media screen and (max-width: 550px) {
  .retro-board {
    > .board-column {
      width: 100%;
    }
  }
}
</style>
