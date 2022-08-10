import { Order } from "./order.model";

export class OrderEventDto{
    message:string="";
    status:string="";
    order:Order=null;

    
}