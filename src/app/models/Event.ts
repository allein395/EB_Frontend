export class Event {
    
    eventId:number;
    eventName:string;
    peopleCapacity:number;
    location:string;
    price:number;
    description:string;
    image:any;

    constructor()
    {
        this.eventId=0,
        this.eventName=" ",
        this.peopleCapacity=0,
        this.location=" ",
        this.price=0,
        this.description=" ",
        this.image=" ";
    }
}