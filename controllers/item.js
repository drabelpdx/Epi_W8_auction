Auction.ItemController = Ember.ObjectController.extend({
  needs: ['auction'],
  actions: {
    delete: function() {
      if (confirm('Are you sure you want to remove this item from the auction?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('auction', auction.id); //auction.id needed?
      }
    }
  }
});
