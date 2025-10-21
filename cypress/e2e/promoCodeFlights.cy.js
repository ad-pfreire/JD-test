import { options } from "../Constants/principal";
import principalPage from "../pages/principal/principal.page";

describe('Flujo vuelos con codigo promocional', () => {

    beforeEach(() => {
        principalPage.visit();
        cy.wait(2000); 
        principalPage.validateTitle();;
    });


  it('vuelo Julio a diciembre 2 anos (AF2-FJK-417) 20% discount', () => {

    // Visita la URL
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    principalPage.selectDeparting(options.july);
    cy.wait(2000); 
    principalPage.selectReturning(options.decembertwoyears);
    cy.wait(2000); 
    principalPage.promocode('AF2-FJK-417');// aaux
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('20% discount');
    cy.wait(2000);
    principalPage.validatemessage('Call now on 0800 MARSAIR to book!');
    cy.wait(2000);
  })


  it('vuelo Julio a diciembre 2 anos (CO6-MBI-118) 60% discount', () => {
    //  principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    principalPage.selectDeparting(options.july);
    cy.wait(2000); 
    principalPage.selectReturning(options.decembertwoyears);
    cy.wait(2000); 
    principalPage.promocode('CO6-MBI-118');// aaux
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('60% discount!');
    cy.wait(2000);
    principalPage.validatemessage('Call now on 0800 MARSAIR to book!');
    cy.wait(2000);
    
  })

  it('vuelo Julio a diciembre 2 anos (YG7-OLI-115) code not valid', () => {
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    principalPage.selectDeparting(options.july);
    cy.wait(2000); 
    principalPage.selectReturning(options.decembertwoyears);
    cy.wait(2000); 
    principalPage.promocode('YG7-OLI-115');// aaux
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage(' is not valid');
    cy.wait(2000);
    principalPage.validatemessage('Call now on 0800 MARSAIR to book!');
    cy.wait(2000);
  })

  it('vuelo Julio a diciembre (AF2-FJK-417) schedule not possible ', () => {
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    principalPage.selectDeparting(options.july);
    cy.wait(2000); 
    principalPage.selectReturning(options.december);
    cy.wait(2000); 
    principalPage.promocode('AF2-FJK-417');// aaux
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('Unfortunately, this schedule is not possible. Please try again.');
    cy.wait(2000);
    //principalPage.validatemessage('Call now on 0800 MARSAIR to book!');
    //cy.wait(2000);
  })

})

