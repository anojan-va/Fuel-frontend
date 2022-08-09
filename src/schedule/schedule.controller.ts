import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScheduleDto } from './schedule.dto';
import { ScheduleService } from './schedule.service';
import { ScheduleResponseService } from './schedule-response.service';

@Controller('schedule')
export class ScheduleController {
    constructor(private scheduleService:ScheduleService, private scheduleResponseService: ScheduleResponseService){}

    @Get()
    getAllSchdule(){
        return this.scheduleService.getScheduleList();
    }


}
