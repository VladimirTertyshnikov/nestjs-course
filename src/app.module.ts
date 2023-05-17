import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppConfigModule } from './app-config/app-config.module'
import { AppConfigService } from './app-config/app-config.service'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RoomModule } from './room/room.module'
import { ScheduleModule } from './schedule/schedule.module'

@Module({
  imports: [
    AppConfigModule,
    RoomModule,
    ScheduleModule,
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => ({ uri: appConfigService.dbUri }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
