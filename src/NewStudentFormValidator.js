function NewStudentFormValidator() {
  this.errors = [];
}

NewStudentFormValidator.prototype = Object.assign(
  {},
  NewStudentFormValidator.prototype,
  {
    validate(data) {
      this.validateFirstName(data);
      this.validateLastName(data);

      return this;
    },

    validateFirstName(data) {
      if (!data.firstName) {
        this.errors.push(new Error('firstName is required'));
      }
      return data;
    },

    validateLastName(data) {
      if (!data.lastName) {
        this.errors.push(new Error('lastName is required'));
      }
      return data;
    },
  },
);

module.exports = NewStudentFormValidator;

// TODO: refactor this into validator factory
