

class APIHandler{
    constructor(base_url,dom_writer){
        this.base_url = base_url // https://fakerapi.it/api/v1/
        this.dom_writer = dom_writer
    }

    getPeople(qty){
        fetch(`${this.base_url}persons?_quantity=${qty}`).then((response) => {
            response.json().then((data) => {
                let finalData = []
                data.data.forEach(element => {
                   this.dom_writer.writePersonCard( new Teacher(element.firstname,element.lastname,element.id))
                });
                console.log(finalData)
            })
        })
    }
    getAddress(qty){
        fetch(`${this.base_url}addresses?_quantity=${qty}`).then((response) => {
            response.json().then((data) => {
                console.log(data.data)
            })
        })
    }
}