import { options } from "../Constants/principal";
import principalPage, { PrincipalPage } from "../pages/principal/principal.page"

describe('Flujo vuelos sin codigo promocional', () => {

  beforeEach(() => {

     principalPage.visit();
     cy.wait(2000); 
     principalPage.validateTitle();
     
    principalPage.validatedepartingfield();
    principalPage.validatereturningfield();

    
  })


  it('vuelo Julio a diciembre 2 anos', () => { //
    // Visita la URL
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle(); // COMO SE REPITE PUEDO SACARLE CON UN HOOK
    // principalPage.validatedepartingfield();
    // principalPage.validatereturningfield();
    principalPage.selectDeparting(options.july);
    cy.wait(2000); 
    principalPage.selectReturning(options.decembertwoyears);
    cy.wait(2000); 
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('Seats available!');
    cy.wait(1000);
    principalPage.validatemessage('Call now on 0800 MARSAIR to book!');
    cy.wait(2000);
  })

  it('vuelo deciembre a diciembre en 2 anos', () => {
    // Visita la URL
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    principalPage.selectDeparting(options.december);
    cy.wait(2000); 
    principalPage.selectReturning(options.decembertwoyears);
    cy.wait(2000); 
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('Sorry, there are no more seats available.');
    cy.wait(2000);
  })

  it('vuelo deciembre a diciembre next year', () => {
    // Visita la URL
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    principalPage.selectDeparting(options.december);
    cy.wait(2000); 
    principalPage.selectReturning(options.decemberny);
    cy.wait(2000); 
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('Sorry, there are no more seats available.');
    cy.wait(2000);
  })

  it('vuelo julio a diciembre', () => {
    // Visita la URL
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    principalPage.selectDeparting(options.july);
    cy.wait(2000); 
    principalPage.selectReturning(options.december);
    cy.wait(2000); 
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('Unfortunately, this schedule is not possible. Please try again.');
    cy.wait(2000);
  })

  it('vuelo select select (invalido)', () => {
    // Visita la URL
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    //principalPage.selectDeparting(options.july); ///        AQUI DEJO VACIO ON PURPOSE
    //cy.wait(2000); 
    //principalPage.selectReturning(options.december);
    //cy.wait(2000); 
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('Sorry, there are no more seats available.'); // Aqui el mensaje debería ser invàlido
    cy.wait(2000);
  })

  it('vuelo JULIO NY a December ', () => {
    // Visita la URL
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    principalPage.selectDeparting(options.julyny);
   cy.wait(2000); 
    principalPage.selectReturning(options.december);
    cy.wait(2000); 
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('Sorry, there are no more seats available.'); 
    cy.wait(2000);
  })

  it('vuelo December a December ', () => {
    // Visita la URL
    // principalPage.visit();
    // cy.wait(2000); 
    // principalPage.validateTitle();
    principalPage.selectDeparting(options.december);
   cy.wait(2000); 
    principalPage.selectReturning(options.december);
    cy.wait(2000); 
    principalPage.clickSearch();
    cy.wait(2000);
    principalPage.validatemessage('Sorry, there are no more seats available.');
    cy.wait(2000);
  })

  /// Caso no pisble de regresar en el tiempo



  
})

