/*
    S: Single responsability principle
    O: Open-Closed principle
    L: Liskov Sustitution principle
    I: Interface Segregation Principle
    D: Depency injection principle
*/

const personas = new DomWriter("people")
const profesores = new DomWriter("teacher")
const apiPersonas = new APIHandler("https://fakerapi.it/api/v1/",personas)
const apiProfesores= new APIHandler("https://fakerapi.it/api/v1/",profesores)
const apiProfesores2= new FakeApi("",profesores)

apiPersonas.getPeople(10)
apiProfesores.getPeople(10)
apiProfesores2.getPeople(10)