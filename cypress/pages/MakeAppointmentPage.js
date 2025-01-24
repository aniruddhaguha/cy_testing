class MakeAppointment {
    bookAppointment() {
        cy.get('select').select('Hongkong CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_visit_date').type('24/01/2025');
        cy.get('h2').click();
        cy.get('#txt_comment').type('Test comment');
        cy.get('#btn-book-appointment').click();
        cy.get('h2').should('have.text', 'Appointment Confirmation');
    }
}

export default MakeAppointment;