
import { config } from "../../Constants/setup";
import { buttons, departing, options, promocode, returning } from "../../Constants/principal"; // OJOOO ESTA LE IMPORTE MANUALMENTE COPIANDO EL IMPOPRT DE ARRIBA?? noo!!

export class PrincipalPage { // EN ESTA CLASE.... AQUI TOOODAS ESTAS SON FUNCIONES, QUE YO CREÉ CONS SUS NOMBRES
    //----------------------------------------
    visit() {
        cy.visit(config.baseUrl);
    }
    //----------------------------------------

    validatedepartingfield() {
        cy.get(departing.id).should('be.visible');
    }

    validatereturningfield() {
        cy.get(returning.id).should('be.visible');
    }

    validateTitle () {
        cy.title().should('include', 'Mars Airlines: Home')
    }
   //------------------------------------------------------------------

    selectDeparting(optionsmonthdeparting) { //// AQUI OJO DONDE PUSE ESTO ADNETRO DEL ARENTESIS COMO?????
       // cy.get(departing.id).select(options.july); 
       cy.get(departing.id).select(optionsmonthdeparting);
    }


    selectReturning(optionsmonthreturning) {
        cy.get(returning.id).select(optionsmonthreturning);
    }

    clickSearch() {
        cy.get(buttons.buttonsearch).click(); // PRIMERO LLAMO AL OBJETo (butttons) LUEGO A LA PROPIEDAD (buttonsearch)
    }

    validatemessage(messages) {
        cy.contains(messages).should('be.visible');
    }

    promocode(code){ // PARA GENERRALIZAR E SLO QUE YO ESCRIBO ADENTRO DEL PARENTESIS !!!!!
        cy.get(promocode.id).type(code);
    }

    homepage(){
        cy.get('#app > h1 > a').click();
    }

    backbuttonhome(){
        cy.get('#content > p:nth-child(4) > a').click();
    }

    // Book a ticket to the red planet now!” should apperar somewhere prominent on the page.
    validatebookticketmessage(){
        cy.contains('Book a ticket to the red planet now!').should('be.visible');
    }

    reportanissuelink(){
        cy.get('#report_issue > ul > li:nth-child(1) > a) > a').should('be.visible').click();
    }

}

export default new PrincipalPage();



//// NICOOOOOOOOOO (instancias)

// const principalPageTest = new PrincipalPage();
//principalPageTest.visit();

// LA CLASE ES UNA DEFINICON DE OBEJEO :

// ULA CLASE ARBOL.. QUE TIENE?? TIENE HOJAS, (estatico las valriables, key values)
// pero la clase tambien tiene funciones (metodos) que hacen cosas con esas variables
