import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ScheduleService } from 'src/schedule/schedule.service'
import { CreateRoomDto, UpdateRoomDto } from './room.dto'
import { RoomService } from './room.service'

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService, private readonly scheduleService: ScheduleService) {}

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    const doc = await this.roomService.create(createRoomDto)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return await this.roomService.update(id, updateRoomDto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.roomService.delete(id)
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.roomService.getById(id)
  }

  @Get()
  async getAll() {
    return await this.roomService.getAll()
  }
}
