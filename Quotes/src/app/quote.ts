export class Quote {
     uvotes:number
    dvotes:number

    constructor(
         id:number,
         quote:string, 
         author:string,
         publisher:string,
         completeDate:Date
    ){
        this.uvotes = 0
        this.dvotes = 0
    }
}