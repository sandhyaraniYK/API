
describe('my api test',()=>{
    let url:string
    let Getrequest:string
    
    it('positive Api tests',()=>{
        
        cy.fixture('example.json').then(data=>{
            url=data.url
            Getrequest=data.getrequest
            
            cy.request(Getrequest, url).then(response => {
            //assert
            expect(response).to.have.property('status', 200);
            //log
            cy.log('response.JSON:', {
                message: 'Request received',
                data: JSON.stringify(Response)
            })
    
             })
        })
    })
    it('negative Api tests',()=>{
        cy.fixture('example.json').then(data=>{
            url=data.incorrectUrl
            Getrequest=data.getrequest
            cy.request({
                method :Getrequest,
                url:url,
                failOnStatusCode: false
             }).then(response=>{
        expect(response).to.have.property('status',404);
            })
        
        })
    })
    
        })