//cypress/integration/todo_spec.js
///<reference types="Cypress"/>

describe('Todo App', function () {
  it('.should() - allow adding a new todo item', function () {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('input[data-cy=newItemField]').type('$Write Test!');
    cy.get('#addBtn').click();

    cy.get('tr[data-cy=todoItem]:nth-child(1)').should('contain', '$')
    cy.get('.pure-table-horizontal').find('tr').should('have.length', 4)
  })
});
