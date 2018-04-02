const GradeReportPresenter = require('./GradeReportPresenter');
const Grade = require('./Grade');

describe('GradeReportPresenter', () => {
  const student = {
    id: '212',
    firstName: 'T',
    lastName: 'D',
    gender: 'm',
    phone: '5551234567',
    assignments: [
      { grade: new Grade(0.65) },
      { grade: new Grade(0.83) },
      { grade: new Grade(0.90) },
    ],
  };

  const presentedStudent = new GradeReportPresenter(student).present();

  describe('#properties', () => {
    it('should returns averageGrade specified properties', () => {
      expect(presentedStudent).toHaveProperty('averageGrade');
    });

    it('should returns phone specified properties', () => {
      expect(presentedStudent).toHaveProperty('phone');
    });

    it('should returns isPassing specified properties', () => {
      expect(presentedStudent).toHaveProperty('isPassing');
    });
  });

  describe('#averageGrade', () => {
    it('should return correct value', () => {
      expect(presentedStudent.averageGrade).toBeCloseTo(0.79);
    });
  });

  describe('#isPassing', () => {
    it('should return correct value', () => {
      expect(presentedStudent.isPassing).toBe(true);
    });
  });

  describe('#phone', () => {
    it('should return correct value', () => {
      expect(presentedStudent.phone).toBe('555-123-4567');
    });
  });
});
