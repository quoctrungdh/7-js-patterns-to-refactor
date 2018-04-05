const PassingStudentPolicy = require('./PassingStudentPolicy');

describe('Policy', () => {
  it('should return true if the object passes the policy tests', () => {
    const student = {
      name: 'td',
      isExpelled: false,
      isSuspended: false,
    };

    const eligibility = new PassingStudentPolicy(student).run();

    expect(eligibility).toBe(true);
  });

  it('should return false if the object doesn\'t pass the policy test', () => {
    const student = {
      name: 'td',
      isExpelled: false,
      isSuspended: true,
    };

    const eligibility = new PassingStudentPolicy(student).run();

    expect(eligibility).toBe(false);
  });
});
