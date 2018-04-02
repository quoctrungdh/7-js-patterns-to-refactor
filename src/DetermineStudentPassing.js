const { extractAssignmentGrade, averageAssignmentGrade } = require('./helpers');

function DetermineStudentPassingStatus(student) {
  this.student = student;
}

DetermineStudentPassingStatus.prototype = Object.assign(
  {},
  DetermineStudentPassingStatus.prototype, {
    minimunPassingPercentage: 0.6,

    extractAssignmentGrade,

    averageAssignmentGrade,

    determinePassingStatus(averagePercentage) {
      return averagePercentage >= this.minimunPassingPercentage;
    },

    fromAssignments(assignments) {
      const extractedAssignments = this.extractAssignmentGrade(assignments);
      const averagePercentage = this.averageAssignmentGrade(extractedAssignments);
      return this.determinePassingStatus(averagePercentage);
    },
  },
);

module.exports = DetermineStudentPassingStatus;
