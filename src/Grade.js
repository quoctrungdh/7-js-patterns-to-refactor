function Grade(percentage) {
  this.percentage = percentage;
}

Grade.prototype = Object.assign({}, Grade.prototype, {
  getPercentage() {
    return this.percentage;
  },
});

module.exports = Grade;
