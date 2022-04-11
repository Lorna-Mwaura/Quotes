export class Quote {
    id: any;
    quote: string;
    author: string;
    publisher: string;
    upvotes: number;
    downvotes: number;
    completeDate:Date;

    constructor(id:number, quote: string,author: string,publisher:string, upvotes: number, downvotes: number,completeDate:Date) {
        this.id = id;
        this.quote = quote
        this.author = author
        this.publisher = publisher
        this.upvotes = 0
        this.downvotes = 0
         this.completeDate = completeDate
    } 
}
