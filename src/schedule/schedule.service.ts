import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { CreateScheduleDto, UpdateScheduleDto } from './schdule.dto'
import { Schedule, ScheduleDocument } from './schedule.schema'

@Injectable()
export class ScheduleService {
  constructor(@InjectModel(Schedule.name) private scheduleModel: Model<ScheduleDocument>) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<ScheduleDocument> {
    return await this.scheduleModel.create(createScheduleDto)
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<ScheduleDocument | null> {
    const schedule = await this.scheduleModel.findById(id)
    if (schedule) return await schedule.updateOne(updateScheduleDto)
    else return null
  }

  async delete(id: string): Promise<ScheduleDocument | null> {
    const schedule = await this.scheduleModel.findById(id)
    if (schedule) return await schedule.deleteOne()
    else return null
  }

  async getByRoomId(roomId: string): Promise<ScheduleDocument[]> {
    return await this.scheduleModel.find({ roomId: new Types.ObjectId(roomId) })
  }
}
