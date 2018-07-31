<template>
  <div class="board-column">
    <h5 class="board-column__header">{{cardType}}</h5>

    <div v-for="card of cards" :key="card.id" class="card card--has-badge">
      <pre>{{card.message}}</pre>

      <div class="card__badge">
        {{card.upvotes}}
        <span class="card__badge-upvote" @click="upvote(card.id)">^</span>
      </div>
    </div>

    <form v-if="showForm" @submit.prevent="submitNewCard()">
      <label for="message">Message</label>
      <textarea v-model="message" class="u-full-width" id="message"></textarea>

      <div class="row">
        <button class="button one-half column" type="button" @click="showForm = false">
          Cancel
        </button>
        <button class="button button-primary one-half column" type="submit"
          :disabled="!message">
          Add
        </button>
      </div>
    </form>

    <button v-else class="button button--block"
      @click="showForm = true">
      Add a card
    </button>
  </div>
</template>

<script>
import api from '@/api';

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

  data: () => ({
    showForm: false,
    message: ''
  }),

  methods: {
    submitNewCard() {
      api.addCard({
        type: this.cardType.toUpperCase(),
        message: this.message
      });

      this.showForm = false;
      this.message = '';
    },
    upvote(cardId) {
      api.upvoteCard(this.cardType.toUpperCase(), cardId);
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
