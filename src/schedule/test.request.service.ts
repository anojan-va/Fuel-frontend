import { Injectable, OnModuleInit } from '@nestjs/common';
import { Schedule } from './schedule.model';
import { ConsumerService } from '../kafka/consumer.service';
import { OrderEvent } from './event.model';
import { ScheduleDto } from './schedule.dto';
import { ScheduleService } from './schedule.service';
import { ScheduleResponseService } from './schedule-response.service';
import { Order } from './order.model';



@Injectable()
export class TestRequestService implements OnModuleInit {
       private event:OrderEvent;
       private scheduleDto:ScheduleDto;
    constructor(private readonly consumerService:ConsumerService,private  readonly scheduleService:ScheduleService, private readonly scheduleResponseService:ScheduleResponseService) {}
    async onModuleInit() {

      console.log("Kafka receiver hits");
       
        await this.consumerService.consume(
           // { topic: 'order-topic'},
           { topic: 'tess'},
            {
                eachMessage: async ({ topic, partition, message }) => {
                  /*
                let event:OrderEvent;
                let evetu:OrderEvent;

                const eventObj = message.value as any;
                evetu = message.value as any;

                console.log("Test00A: "+evetu.order.orderId);

                event = JSON.parse(eventObj);

                const sdate= new Date();
               */

               // console.log("Test115A: "+event.order.orderId);

                //console.log("Gas: "+event.order.gasStationId);
       
                console.log("Test00A");

                  console.log({
                  value: message.value.toString(),
                  topic: topic.toString(),
                  partition: partition.toString(),
                  
                });
              },
            },
          );
    }

}