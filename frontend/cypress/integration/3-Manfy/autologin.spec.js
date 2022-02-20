context('Auto login and update user with Cypress', () => {
  
    it('Accept cookies and complete the form', () => {
        cy.visit('http://localhost:3000/')
        cy.get('button.btn').click()
        cy.get('.navbar-nav > :nth-child(4) > .nav-link').click()
        cy.get('#email').type('root@root.com')
        cy.get('#password').type('root')
    })

    it('Sumbit the form, accepts cookies and verify that exists the user in the navbar, join profile, update user info and check the changes', () => {
        cy.get(':nth-child(3) > .btn').click()
        cy.get('button.btn').click()
        cy.get('#navbarDropdownMenuLink').contains('Rooting Ruting')

        cy.get('#navbarDropdownMenuLink').click()
        cy.get(':nth-child(1) > .dropdown-item').click()

        cy.get('#name').type('modify')
        cy.get('#password').type('root')
        cy.get('form.form-group > .btn').click()
        cy.get('.user-name').contains('Rootingmodify Ruting')

    })

})
