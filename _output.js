this.after('initialize', function() {
  this.on('submit', this.requestTag);
});
