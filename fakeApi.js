

class FakeApi{
    constructor(base_url,dom_writer){
        this.base_url = ""
        this.dom_writer = dom_writer
    }
    getPeople(qty){
       let finalData = []
        for (let index = 0; index < qty; index++) {
            this.dom_writer.writePersonCard(new Persona(
                "Hector","Romero",1
            ))
            
        }
       console.log(finalData)
    }
}