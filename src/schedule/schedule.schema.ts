import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Room } from '../room/room.schema'

@Schema()
export class Schedule {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Room.name, required: true })
  roomId: Room

  @Prop({ type: String, required: true })
  scheduleDay: string

  @Prop({ type: Date, required: true, expires: 0 })
  expires: Date
}

export type ScheduleDocument = mongoose.HydratedDocument<Schedule>

export const ScheduleSchema = SchemaFactory.createForClass(Schedule)
