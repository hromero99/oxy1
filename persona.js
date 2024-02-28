class Persona{

    constructor(name,surnames,dni){
        this.name = name
        this.surnames = surnames
        this.dni = dni
    }

    getName(){
        return `${this.name} ${this.surnames}`
    }
}