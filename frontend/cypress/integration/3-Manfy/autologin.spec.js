context('Auto login with Cypress', () => {
  
    it('Accept cookies and complete the form', () => {
        cy.visit('http://localhost:3000/')
        cy.get('button.btn').click()
        cy.get('.navbar-nav > :nth-child(4) > .nav-link').click()
        cy.get('#email').type('root@root.com')
        cy.get('#password').type('root')
    })
    it('Sumbit the form, accepts cookies and verify that exists the user in the navbar', () => {
        cy.get(':nth-child(3) > .btn').click()
        cy.get('button.btn').click()
        cy.get('#navbarDropdownMenuLink').contains('Rooting Ruting')
    })
})