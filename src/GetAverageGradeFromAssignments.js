const { extractAssignmentGrade, averageAssignmentGrade } = require('./helpers');

function GetAverageGradeFromAssignments(assignments) {
  this.assignments = assignments;
}

GetAverageGradeFromAssignments.prototype = Object.assign(
  {},
  GetAverageGradeFromAssignments.prototype,
  {
    run() {
      const extractedAssignments = extractAssignmentGrade(this.assignments);
      return averageAssignmentGrade(extractedAssignments);
    },

    extractAssignmentGrade,

    averageAssignmentGrade,
  },
);


module.exports = GetAverageGradeFromAssignments;
