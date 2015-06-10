Auction.AuctionController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm('Are you sure you want to remove this auction?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('auctions');
      }
    }
  }
});
