import principalPage from "../pages/principal/principal.page";

describe('Test links del home page', () => {
    it('test link report and issue', () => {
        principalPage.visit();
        cy.wait(2000); 

        principalPage.reportanissuelink();
        cy.wait(2000);
        
    });
    
});