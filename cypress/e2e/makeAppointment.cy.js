import MakeAppointment from "../pages/MakeAppointmentPage";
import LoginPage from "../pages/LoginPage"

describe('Make appointment', () => {
    const makeAppointment = new MakeAppointment();
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.viewport(1920, 1080);
        loginPage.loginToKura("John Doe", "ThisIsNotAPassword");
    });

    it('User appointment', () => {
        makeAppointment.bookAppointment();
    })
})