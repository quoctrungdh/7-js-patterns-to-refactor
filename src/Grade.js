function Grade(percentage) {
  this.percentage = percentage;
  this.grade = this.grade(percentage);
}

Grade.prototype = Object.assign({}, Grade.prototype, {
  grade(percentage) {
    return this.grades.find(grade => percentage >= grade.minimumPercentage);
  },

  isPassing() {
    return this.grade.passing;
  },

  letterGrade() {
    return this.grade.letter;
  },

  passingGradeLetters() {
    return this.grades.reduce((accu, grade) => {
      if (grade.passing) {
        return accu.concat(grade.letter);
      }
      return accu;
    }, []);
  },

  isBetterThan(grade) {
    return this.percentage > grade.percentage;
  },

  grades: [
    { letter: 'A', minimumPercentage: 0.9, passing: true },
    { letter: 'B', minimumPercentage: 0.8, passing: true },
    { letter: 'C', minimumPercentage: 0.7, passing: true },
    { letter: 'D', minimumPercentage: 0.6, passing: true },
    { letter: 'F', minimumPercentage: 0, passing: false },
  ],
});

module.exports = Grade;
