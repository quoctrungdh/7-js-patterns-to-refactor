function extractAssignmentGrade(assignments) {
  return assignments.reduce((accu, assignment) =>
    accu.concat(assignment.grade), []);
}

function averageAssignmentGrade(grades) {
  return grades.reduce((accu, grade) =>
    accu + grade.percentage, 0) / grades.length;
}

module.exports = {
  extractAssignmentGrade,
  averageAssignmentGrade,
};
