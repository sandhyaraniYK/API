
import{testdata1} from '../Test/testdata1'
it('tests data',()=>{
    let testdata2=new testdata1()
    let url:string
    let Getrequest:string  
    cy.fixture('example.json').then(data=>{
        url=data.url
        Getrequest=data.getrequest
        
        cy.request(Getrequest, url).then(response => {
            expect(response.body[0].name).to.equal(testdata2.getname())
            expect(response.body[0].email).to.equal(testdata2.getEmail())
            expect(response.status).to.equal(testdata2.getstatus())
            
                
        })
})
})