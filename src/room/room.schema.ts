import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IsBoolean, IsIn, IsString } from 'class-validator'
import * as mongoose from 'mongoose'

const roomTypeEnum = ['single', 'double', 'luxury']
type RoomType = 'single' | 'double' | 'luxury'

@Schema()
export class Room {
  @IsString()
  @Prop({ type: String, required: true, unique: true })
  roomNumber: string // Номер помещения

  @IsString()
  @Prop({ type: String, required: true })
  floor: string // Этаж

  @IsIn(roomTypeEnum)
  @Prop({ type: String, enum: roomTypeEnum })
  roomType: RoomType // Тип помещения

  @IsBoolean()
  @Prop({ type: Boolean, required: true })
  seaView: boolean // Наличие вида на море

  @IsString()
  @Prop({ type: String, required: true })
  details: string // Уточняющее описание
}

export type RoomDocument = mongoose.HydratedDocument<Room>

export const RoomSchema = SchemaFactory.createForClass(Room)
