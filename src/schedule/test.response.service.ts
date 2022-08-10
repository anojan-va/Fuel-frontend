import { Injectable } from '@nestjs/common';
import { ScheduleDto } from './schedule.dto';
import { Schedule } from './schedule.model';
import { ProducerService } from '../kafka/producer.service';
import { OrderEvent } from './event.model';
import { MESSAGES } from '@nestjs/core/constants';


@Injectable()
export class TestResponseService {
    
    constructor(private readonly producerService:ProducerService) {}
   //

    async scheduleResponse(event:OrderEvent){

        
        console.log(event.order.orderId);
        await this.producerService.produce({
            topic:'tess',
            messages: [{
              //value: JSON.parse(JSON.stringify(event)),
              value: 'event.order.orderId',

           
            
            },],
        });
        console.log("Test response below hits");

        
        return 'Hello World...!';
        
    }

}