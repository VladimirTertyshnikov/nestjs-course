import { Global, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppConfigService } from './app-config.service'
import { validate } from './env.validation'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
