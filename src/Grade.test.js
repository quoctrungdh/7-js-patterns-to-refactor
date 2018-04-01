const Grade = require('./Grade');

describe('Grade', () => {
  describe('#passing', () => {
    it('should pass for 0.7', () => {
      const grade = new Grade(0.7);
      expect(grade.isPassing()).toBe(true);
    });

    it('should NOT pass for anything below 0.6', () => {
      const grade = new Grade(0.4);
      expect(grade.isPassing).not.toBe(true);
    });
  });

  describe('#letterGrade', () => {
    it('should return A for 100 percent', () => {
      const grade = new Grade(1);
      expect(grade.letterGrade()).toBe('A');
    });

    it('should return correct letter B for 0.8', () => {
      const grade = new Grade(0.8);
      expect(grade.letterGrade()).toBe('B');
    });

    it('should return F for anything lower than 0,6', () => {
      const grade = new Grade(0.59);
      expect(grade.letterGrade()).toBe('F');
    });
  });

  describe('#passingLetters', () => {
    it('should return all passing letters', () => {
      const grade = new Grade(0);
      const passingGradeLetters = ['A', 'B', 'C', 'D'];
      expect(grade.passingGradeLetters()).toEqual(passingGradeLetters);
    });
  });

  describe('#isBetterThan', () => {
    it('should return true if grade is better than comparison grade', () => {
      const grade1 = new Grade(0.5);
      const grade2 = new Grade(0.6);

      expect(grade1.isBetterThan(grade2)).toBe(false);
    });
  });
});
