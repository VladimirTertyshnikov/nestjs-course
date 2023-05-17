import { OmitType, PartialType } from '@nestjs/mapped-types'
import { Schedule } from './schedule.schema'

export class CreateScheduleDto extends OmitType(Schedule, [] as const) {}

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {}
