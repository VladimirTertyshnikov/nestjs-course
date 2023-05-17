import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get isProduction(): boolean {
    return process.env.NODE_ENV === 'production'
  }

  get port(): number {
    return this.configService.get<number>('PORT')
  }

  get dbUri(): string {
    return this.configService.get<string>('DATABASE_URI')
  }
}
