const NewStudentFormValidator = require('./NewStudentFormValidator');

describe('#NewStudentFormValidator', () => {
  describe('valid form data', () => {
    const validFormData = {
      firstName: 'T',
      lastName: 'D',
    };

    const rawForm = new NewStudentFormValidator();
    const firstNameSpy = jest.spyOn(rawForm, 'validateFirstName');
    const validatedForm = rawForm.validate(validFormData);

    it('should called validateFirstName as least once', () => {
      expect(firstNameSpy).toHaveBeenCalledTimes(1);
    });

    it('should return ZERO error with a valid form data', () => {
      expect(validatedForm.errors.length).toBe(0);
    });
  });

  describe('invalid form data', () => {
    const invalidFormData = {
      firstName: 'T',
    };

    const rawForm = new NewStudentFormValidator();
    const validatedForm = rawForm.validate(invalidFormData);

    it('should return 1 error with an invalid form without lastName', () => {
      expect(validatedForm.errors.length).toBe(1);
    });
  });
});
