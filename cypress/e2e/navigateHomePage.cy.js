import { options } from "../Constants/principal";
import principalPage from "../pages/principal/principal.page";

describe('navegar a la pagia principal', () => {

     it('navegar al home page dando click al logo', () => {
        // Visita la URL
        principalPage.visit();
        cy.wait(2000); 
        principalPage.validateTitle();
        principalPage.validatedepartingfield();
        principalPage.validatereturningfield();
        principalPage.selectDeparting(options.july);
        cy.wait(2000); 
        principalPage.selectReturning(options.decembertwoyears);
        cy.wait(2000); 
        principalPage.clickSearch();
        cy.wait(2000);
        principalPage.validatemessage('Call now on 0800 MARSAIR to book!');
        cy.wait(2000);
        principalPage.homepage();
        cy.wait(2000);
        principalPage.validatebookticketmessage();/// pOR QUE AQUI NOE SCRIBO NADA ADENTRO??
        cy.wait(2000);
      })

        it('navegar al home con el boton de back', () => {
        // Visita la URL
        principalPage.visit();
        cy.wait(2000); 
        principalPage.validateTitle();
        principalPage.validatedepartingfield();
        principalPage.validatereturningfield();
        principalPage.selectDeparting(options.july);
        cy.wait(2000); 
        principalPage.selectReturning(options.decembertwoyears);
        cy.wait(2000); 
        principalPage.clickSearch();
        cy.wait(2000);
        principalPage.validatemessage('Call now on 0800 MARSAIR to book!');
        cy.wait(2000);
        principalPage.backbuttonhome();
        cy.wait(2000);
        principalPage.validatebookticketmessage();/// pOR QUE AQUI NOE SCRIBO NADA ADENTRO??
        cy.wait(2000);
      })
    
});


