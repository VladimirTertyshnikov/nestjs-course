import { OmitType, PartialType } from '@nestjs/mapped-types'
import { Room } from './room.schema'

export class CreateRoomDto extends OmitType(Room, [] as const) {}

export class UpdateRoomDto extends PartialType(CreateRoomDto) {}
