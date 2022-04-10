export class Quote {
    id:number
    quote:string
    author:string
    person:string
    showDetails:boolean

    constructor(id:number,quote:string,author:string,person:string){
        this.id = id
        this.quote = quote
        this.author = author
        this.person = person
        this.showDetails = false
    }
}
