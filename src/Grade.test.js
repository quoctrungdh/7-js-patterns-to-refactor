const Grade = require('./Grade');

describe('Grade functions', () => {
  it('should return percentage', () => {
    const p = 0.5;
    const g = new Grade(p);

    expect(g.getPercentage()).toBe(p);
  });
});
