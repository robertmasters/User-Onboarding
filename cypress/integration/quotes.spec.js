const { cyan } = require("color-name")

describe('Quotes app', () =>{
    //test goes here
    beforeEach(() =>{
        //code you want running before each test
        cy.visit('http://localhost:3000')
    })

    it('can type in the inputs: name, email, password', () =>{
        //grab inputs
        //assert there empty
        //type in em
        //assert that the thing we typed is there
        cy.get('input[name ="username"]').should('have.value', '')
            .should('have.value', '')
            .type('Robert')
            .should('have.value', 'Robert')

        cy.get('input[name ="email"]').should('have.value', '')
            .should('have.value', '')
            .type('Robert@gmail.com')
            .should('have.value', 'Robert@gmail.com')

        cy.get('input[name ="password"]').should('have.value', '')
            .should('have.value', '')
            .type('rodriguez')
            .should('have.value', 'rodriguez')
        
    })

    it('can check the terms', () =>{
            cy.get('input[type ="checkbox"]')
            .check()
            .should('have.value', 'on')
    })

    it('Check to see if a user can submit the form data', () =>{
        cy.get('input[type ="checkbox"]')
        .check()
        .should('have.value', 'on')
    })
    
    it('Check for form validation if an input is left empty', () =>{
        cy.get('#submitButton')
        .should('be.disabled')

        cy.get('input[name ="username"]')
            .type(' ')

        cy.get('input[name ="email"]')
            .type(' ')

        cy.get('input[name ="password"]')
            .type(' ')

        cy.get('#submitButton')
            .should('be.disabled')
    })

    it('Check to see if a user can submit the form data', () =>{

        cy.get('input[name ="username"]').type('Robert')
        cy.get('input[name ="email"]').type('Robert@gmail.com')
        cy.get('input[name ="password"]').type('rodriguez')
        cy.get('#submitButton')
            .should('be.enabled')
    })

})