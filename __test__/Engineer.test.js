const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe('init', () => {
      it('should require a GitHub username', () => {
        const engineer = new Engineer('Billy', 2, 'billy@gmail.com', 'ohyeah123');
        expect('github' in engineer).toBe(true);
      });
    });
    describe('getGithub', () => {
        it('should return the GitHub username', () => {
          const engineer = new Engineer('Billy', 2, 'billy@gmail.com', 'ohyeah123' );
  
          expect(engineer.getGithub()).toBe('ohyeah123');
        });
      });
  });
