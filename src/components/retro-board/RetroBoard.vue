<template>
  <div class="retro-board">
    <div class="row">
      <div class="one-half column">
        <board-column
          card-type="More"
          :cards="moreCards">
        </board-column>
      </div>

      <div class="one-half column">
        <board-column
          card-type="Less"
          :cards="lessCards">
        </board-column>
      </div>
    </div>

    <div class="row">
      <div class="one-half column">
        <board-column
          card-type="Start"
          :cards="startCards">
        </board-column>
      </div>

      <div class="one-half column">
        <board-column
          card-type="Stop"
          :cards="stopCards">
        </board-column>
      </div>
    </div>

    <board-column
      card-type="Continue"
      :cards="continueCards">
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
    ...mapGetters([
      'moreCards',
      'lessCards',
      'startCards',
      'stopCards',
      'continueCards'
    ])
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
