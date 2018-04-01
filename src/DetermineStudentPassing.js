function DetermineStudentPassingStatus(student) {
  this.student = student;
}

DetermineStudentPassingStatus.prototype = Object.assign(
  {},
  DetermineStudentPassingStatus.prototype, {
    minimunPassingPercentage: 0.6,

    extractAssignmentGrade(assignments) {
      return assignments.reduce((accu, assignment) =>
        accu.concat(assignment.grade), []);
    },

    averageAssignmentGrade(grades) {
      return grades.reduce((accu, grade) =>
        accu + grade.percentage, 0) / grades.length;
    },

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
