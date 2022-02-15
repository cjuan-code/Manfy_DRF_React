context('Auto login with Cypress', () => {
  
    it('Login with root user in Manfy App and accept cookies', () => {
        cy.visit('http://localhost:3000/')
        cy.get('button.btn').click()
        cy.get('.navbar-nav > :nth-child(4) > .nav-link').click()
        cy.get('#email').type('root@root.com')
        cy.get('#password').type('root')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('button.btn').click()
        cy.get('#navbarDropdownMenuLink').contains('Rooting Ruting')
        
    })
})