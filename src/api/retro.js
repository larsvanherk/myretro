export default class Retro {
  constructor(firebase) {
    if (!firebase) throw Error('A valid Firebase instance is required');
    this.db = firebase.database().ref('retro');
  }

  addCard({ type, message }, cb) {
    this.db.child(type)
      .push({
        message,
        upvotes: 0
      }, cb);
  }

  upvoteCard(type, cardId) {
    this.db.child(`${type}/${cardId}/upvotes`)
      .transaction(upvotes => upvotes + 1);
  }

  registerListener(cb) {
    return this.db.on('value', cb);
  }

  detachListener(listener) {
    this.db.off('value', listener);
  }
}
