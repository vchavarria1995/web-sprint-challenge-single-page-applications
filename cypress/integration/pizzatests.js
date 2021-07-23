describe('Lambda Eats tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const pizzaOrder = () => cy.get("button[id=order-pizza]")
    const submitBtn = () => cy.get("button[id=submit]")
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoniInput = () => cy.get('input[name=pepperoni')
    const olivesInput = () => cy.get('input[name=olives')
    const sausageInput = () => cy.get('input[name=sausage')
    const mushroomsInput = () => cy.get('input[name=mushrooms')
    const instructionsInput = () => cy.get('input[name=instructions]')

    it('Elements Showing Test', () => {
        pizzaOrder().should('exist')
        pizzaOrder().click()
        nameInput().should('exist')
        submitBtn().should('exist')
        sizeInput().should('exist')
        nameInput().should('exist')
        pepperoniInput().should('exist')
        olivesInput().should('exist')
        sausageInput().should('exist')
        mushroomsInput().should('exist')
        instructionsInput().should('exist')
    })

    it('Inputs Test', () => {
        pizzaOrder().click()
        nameInput()
            .type('Victor Chavarria')
            .should('have.value', 'Victor Chavarria')

        sizeInput()
            .select('personal')
            .should('have.value', 'personal')

        pepperoniInput().click()
            .should('have.value', 'on')

        mushroomsInput().click()
            .should('have.value', 'on')

        instructionsInput()
            .type("Extra cheese and extra sauce")
            .should('have.value', "Extra cheese and extra sauce")

        submitBtn().click()
    })
})  