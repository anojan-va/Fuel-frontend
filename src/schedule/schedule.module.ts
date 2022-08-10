import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.model'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleRequestService } from './schedule-request.service';
import { Kafka } from 'kafkajs';
import { KafkaModule } from 'src/kafka/kafka.module';
import { ScheduleResponseService } from './schedule-response.service';
import { TestController } from './test.controller';
import { TestRequestService } from './test.request.service';
import { TestResponseService } from './test.response.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Schedule]),KafkaModule],
  controllers: [ScheduleController,TestController],
  providers: [ScheduleService,ScheduleRequestService,ScheduleResponseService,TestRequestService,TestResponseService]
})
export class ScheduleModule {}

const entities = [Schedule];
export { Schedule};

export default entities;



