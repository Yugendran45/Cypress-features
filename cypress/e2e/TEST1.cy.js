

  context('Before URL', () => {
    beforeEach(()=>{
      cy.visit('https://dev-fe.buttonshift.com')

    })
  


describe('Signup  the user ', () => {
    it('passes', () => {
      cy.visit('https://dev-fe.buttonshift.com')
      cy.get('.css-m7nve9 > .MuiButton-text').click()
      cy.get('[data-cy="auth-email-input"]').type('yugendrankumar002@gmail.com{enter}')
      cy.get('#mui-3').type('Yugendran@45')
      cy.get('#mui-4').type('Yugendran@45{enter}')
      cy.get('[aria-label="Please enter OTP character 1"]').type('1')
      cy.get('[aria-label="Please enter OTP character 1"]').type('2')
      cy.get('[aria-label="Please enter OTP character 1"]').type('3')
      cy.get('[aria-label="Please enter OTP character 1"]').type('4')
      cy.get('[aria-label="Please enter OTP character 1"]').type('5')
      cy.get('[aria-label="Please enter OTP character 1"]').type('6{enter}')
        cy.get('#mui-6').select('value2');
     cy.get('[data-cy="signup-phone-input"]').type('8932372343{enter}')                   


    })
  })
  describe('login the user ', () => {
     it('passes', () => {
      //cy.visit('https://dev-fe.buttonshift.com')
          cy.get('.css-m7nve9 > .MuiButton-text').click()
           cy.get('[data-cy="auth-email-input"]').type('yugendrankumar002@gmail.com{enter}')
           cy.get('[data-cy="auth-password-input"]').type('Yugendran@45{enter}')
           cy.get('.MuiFab-colorInherit > .MuiBox-root > .MuiAvatar-root').click()
           cy.get('[aria-label="Logout"]').click()
     })
   })

   describe('Invalid login data passing  ', () => {
    it('passes', () => {
      //cy.visit('https://dev-fe.buttonshift.com')
      cy.get('.css-m7nve9 > .MuiButton-text').click()
      cy.get('[data-cy="auth-email-input"]').type('yugendran{enter}')
      cy.get('#mui-2-helper-text').invoke('text')
      


       })
  })
})