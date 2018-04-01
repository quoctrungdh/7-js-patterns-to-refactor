const DetermineStudentPassingStatus = require('./DetermineStudentPassing');
const Grade = require('./Grade');

describe('DetermineStudentPassingStatus', () => {
  const student = {};
  const determineStudentPassingStatus = new DetermineStudentPassingStatus(student);

  describe('#fromAssignment', () => {
    it('should return TRUE for PASSING grades', () => {
      const passing = determineStudentPassingStatus.fromAssignments([
        { grade: new Grade(0.5) },
        { grade: new Grade(0.8) },
        { grade: new Grade(0.9) },
        { grade: new Grade(0.6) },
      ]);

      expect(passing).toBe(true);
    });

    it('should return FALSE for FAILING grades', () => {
      const passing = determineStudentPassingStatus.fromAssignments([
        { grade: new Grade(0.5) },
        { grade: new Grade(0.4) },
        { grade: new Grade(0.8) },
        { grade: new Grade(0.6) },
      ]);

      expect(passing).toBe(false);
    });
  });
});
