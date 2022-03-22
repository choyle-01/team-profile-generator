const Employee = require('../lib/Employee')

describe('Employee', () => {
  describe('init', () => {
    it('should require a name, id, and email', () => {
      const employee = new Employee('Billy', 2, 'billy@gmail.com');
      expect('name' in employee).toBe(true)
      expect('id' in employee).toBe(true)
      expect('email' in employee).toBe(true)
    });
  });
  describe('getName', () => {
    it('should return the name', () => {
      const employee = new Employee('Billy', 2, 'billy@gmail.com');

      expect(employee.getName()).toBe('Billy');
    });
  });
  describe('getId', () => {
    it('should return the id', () => {
      const employee = new Employee('Billy', 2, 'billy@gmail.com');

      expect(employee.getId()).toBe(2);
    });
  });

  describe('getEmail', () => {
      it('should return the email', () => {
        const employee = new Employee('Billy', 2, 'billy@gmail.com');

        expect(employee.getEmail()).toBe('billy@gmail.com');
      });
    });
});
