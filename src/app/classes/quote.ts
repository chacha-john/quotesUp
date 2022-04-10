export class Quote {
    id:number
    quote:string
    author:string
    person:string

    constructor(id:number,quote:string,author:string,person:string){
        this.id = id
        this.quote = quote
        this.author = author
        this.person = person
    }
}
