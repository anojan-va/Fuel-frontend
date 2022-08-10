import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';
import { Kafka,Producer, ProducerRecord } from 'kafkajs'
import { OrderEvent } from 'src/schedule/event.model';
import { Order } from 'src/schedule/order.model';
import { OrderEventDto } from 'src/schedule/ordereventdto.model';

@Injectable()
export class ProducerService implements OnModuleInit {
    private readonly kafka = new Kafka({
        brokers: ['localhost:9092'],
    });
    
    private readonly producer: Producer = this.kafka.producer();
    

    async onModuleInit() {
        await this.producer.connect();
    }

    async produce(record:ProducerRecord){
        await this.producer.send(record);

    }
  



    async OnApplicationShutdown(){
        await this.producer.disconnect();
    }
}
