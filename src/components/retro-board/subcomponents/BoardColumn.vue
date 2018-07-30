<template>
  <div class="board-column">
    <h5 class="board-column__header">{{cardType}}</h5>

    <div v-for="card of cards" :key="card.id" class="card card--has-badge">
      {{card.message}}

      <div class="card__badge">
        {{card.upvotes}}
        <span class="card__badge-upvote" @click="upvote(card.id)">^</span>
      </div>
    </div>

    <button class="button button--block"
      @click="showForm()">
      Add a card
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'BoardColumn',

  props: {
    cardType: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    }
  },

  methods: {
    ...mapActions(['addCard', 'upvoteCard']),
    upvote(cardId) {
      this.upvoteCard(cardId);
    },
    showForm() {
      this.addCard({
        type: this.cardType.toUpperCase(),
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro accusantium eveniet vero eum harum atque doloribus'
      });
    }
  }
};
</script>

<style lang="scss">
.board-column {
  margin-bottom: 60px;

  &__header {
    text-align: center;
  }
}
</style>
