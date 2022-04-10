export class Quote {
    id:number
    quote:string
    author:string
    person:string
    upvotes:number
    downvotes:number
    showDetails:boolean
    creation:Date

    constructor(id:number,quote:string,author:string,person:string){
        this.id = id
        this.quote = quote
        this.author = author
        this.person = person
        this.showDetails = false
        this.upvotes = 0
        this.downvotes = 0
        this.creation = new Date()
    }
}
