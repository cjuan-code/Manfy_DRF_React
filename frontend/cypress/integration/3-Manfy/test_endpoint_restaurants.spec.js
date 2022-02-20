context('Test del endpoint de restaurantes', () => {

    it('Get all restaurants and check if response has body and body has length of 2', () => {

        cy.request('GET', '/manfy/restaurants').as('restaurants')

        cy.get('@restaurants').should((response) => {
            expect(response).to.have.property('body')
            expect(response.body).to.have.length(2)
        })

    })

})
