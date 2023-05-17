import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateRoomDto, UpdateRoomDto } from './room.dto'
import { Room, RoomDocument } from './room.schema'

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}

  async create(createRoomDto: CreateRoomDto): Promise<RoomDocument | null> {
    const doc = await this.roomModel.findOne({ roomNumber: createRoomDto.roomNumber })
    if (doc) return null
    else return await this.roomModel.create(createRoomDto)
  }

  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<RoomDocument | null> {
    const room = await this.roomModel.findById(id)
    if (room) return await room.updateOne(updateRoomDto)
    else return null
  }

  async delete(id: string): Promise<RoomDocument | null> {
    const room = await this.roomModel.findById(id)
    if (room) return await room.deleteOne()
    else return null
  }

  async getById(id: string): Promise<RoomDocument | null> {
    const room = await this.roomModel.findById(id)
    if (room) return room
    else return null
  }

  async getAll(): Promise<RoomDocument[]> {
    return await this.roomModel.find()
  }
}
