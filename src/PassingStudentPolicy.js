function PassingStudentPolicy(student) {
  this.student = student;
}

PassingStudentPolicy.prototype = Object.assign(
  {},
  PassingStudentPolicy.prototype,
  {
    run() {
      return this.isNotExpelled() && this.isNotSuspended() && this.isPassing();
    },

    isNotExpelled() {
      return this.student.isExpelled !== true;
    },

    isNotSuspended() {
      return this.student.isSuspended !== true;
    },

    isPassing() {
      // return new PassingStudentPolicy(this.student).run();
      return true;
    },
  },
);

module.exports = PassingStudentPolicy;
