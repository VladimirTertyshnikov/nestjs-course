import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppConfigService } from './app-config/app-config.service'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const appConfigService = app.get(AppConfigService)
  app.setGlobalPrefix('api')
  const isProduction = appConfigService.isProduction
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: isProduction, whitelist: true }))
  const port = appConfigService.port
  await app.listen(port)
}

bootstrap()
