import LoginPage from "../pages/LoginPage"

describe('template spec', () => {
  const loginPage = new LoginPage();

  it('Valid credentials', () => {
    loginPage.loginToKura("John Doe", "ThisIsNotAPassword");
  })

  it('Invalid credentials', () => {
    loginPage.loginToKura("John Doe", "ThisIsNotAPasswor");
    loginPage.invalidAssertion();
  })
})