import config from '../../config/network.conf.json'

describe('Symbol Explorer Transaction detail page for Hash Lock.', () => {
    beforeEach(() => {
        cy.visit(`/transaction/${config.testTransactions.hashLock}`)
    })

    describe('Transaction info card should', () => {
        it('load title', () => {
            cy.get('[data-cy="transactionInfoTitle"]').should('contain', 'Transaction Info')
        })

        it('render data info in table', ()=> {
            cy.renderTableInCard("transactionInfoTitle")
        })

        it('render correct transaction info titles', ()=> {
            const items = ['Block Height', 'Transaction Hash', 'Transaction ID', 'Date', 'Deadline', 'Fee', 'Signature', 'Signer', 'Status', 'Confirmation']
            cy.renderFieldInTable("transactionInfoTitle", items)
        })
    })

    describe('Transaction Detail card should', () => {
        it('load title', () => {
            cy.get('[data-cy="transactionDetailTitle"]').should('contain', 'Transaction Detail')
        })

        it('render data info in table', ()=> {
            cy.renderTableInCard("transactionDetailTitle")
        })

        it('render correct transaction detail titles', () => {
            const items = ['Type', 'Type', 'Duration', 'Mosaic ID', 'Amount']
            cy.renderFieldInTable("transactionDetailTitle", items)
        })

    })
})