import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScheduleDto } from './schedule.dto';
import { ScheduleService } from './schedule.service';
import { ScheduleResponseService } from './schedule-response.service';
import { TestResponseService } from './test.response.service';
import { Order } from './order.model';
import { OrderEvent } from './event.model';

@Controller('test')
export class TestController {
    constructor(private testResponseService:TestResponseService){}
    
    order:Order;
    event:OrderEvent;

    @Get()
    testSchdule(){

       

        this.order = new Order(8,"MN12","P20",500,"suc","22-7-9",7,17,80,20);
        this.event=new OrderEvent("Order test placed","Success",this.order);
        console.log("Test controller hits");

        //const obj = {name: "John", age: 30, city: "New York"};
        //const myJSON = JSON.stringify(obj);
        //return myJSON;
       return this.testResponseService.scheduleResponse(this.event);
    }


}
