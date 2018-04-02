const DetermineStudentPassingStatus = require('./DetermineStudentPassing');
const GetAverageGradeFromAssignments = require('./GetAverageGradeFromAssignments');

function GradeReportPresenter(student) {
  this.student = student;
}

GradeReportPresenter.prototype = Object.assign(
  {},
  GradeReportPresenter.prototype,
  {
    present() {
      const presentedStudent = {};
      const withGrade = this.averageGrade(presentedStudent);
      const withPassing = this.passingStatus(withGrade);
      const withPhone = this.phoneNumber(withPassing);

      return withPhone;
    },

    averageGrade(presentedStudent) {
      const { assignments } = this.student;
      return Object.assign(
        {},
        presentedStudent,
        {
          averageGrade: new GetAverageGradeFromAssignments(assignments).run(),
        },
      );
    },

    passingStatus(presentedStudent) {
      const { assignments } = this.student;
      return Object.assign(
        {},
        presentedStudent,
        {
          isPassing: new DetermineStudentPassingStatus({}).fromAssignments(assignments),
        },
      );
    },

    phoneNumber(presentedStudent) {
      const phoneRegex = new RegExp(/(\d{3})(\d{3})(\d{4})/);
      const { phone } = this.student;
      return Object.assign(
        {},
        presentedStudent,
        {
          phone: phone.replace(phoneRegex, '$1-$2-$3')
        },
      );
    },
  },
);

module.exports = GradeReportPresenter;
