
class DomWriter{

    constructor(rootElementId){
        this.root = document.getElementById(rootElementId)
    }
    
    writePersonCard(person){
        const container = document.createElement("div")
        const header =document.createElement("h1")
        header.innerText = `${person.getName()}`
        const dniText = document.createElement("p")
        dniText.innerText =person.dni
        container.appendChild(header)
        container.appendChild(dniText)
        this.root.appendChild(container)
    }
}