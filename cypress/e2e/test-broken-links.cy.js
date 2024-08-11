describe('Test for dead links', () => {
  it('Test the dead links in a page', () => {
   // cy.visit('https://example.cypress.io')
    cy.visit('https://www.lambdatest.com/blog/selenium-best-practices-for-web-testing/')
       // Get all links within a tag
       cy.get('a').each(($link)=>
      {
        let url=$link.prop('href')
        //If href link tag exist
        if(url)
        {
          cy.request(
            {
              url,
              failOnStatusCode: false,//Not fail the request even if ist not 200/201
              timeout:6000//Some links might need time to respons
  
            }).then ((response)=>
            {
                  //log the links
                  if(response.status>400)
                  {
                    cy.log(url+" is broken")
                  }

            })
        }
      })
  })
})