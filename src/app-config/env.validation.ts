import { plainToInstance } from 'class-transformer'
import { IsDefined, IsNumber, validateSync } from 'class-validator'

class EnvironmentVariables {
  @IsNumber()
  PORT: number

  @IsDefined()
  DATABASE_URI: string
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, { enableImplicitConversion: true })
  const errors = validateSync(validatedConfig, { skipMissingProperties: false })
  if (errors.length > 0) {
    throw new Error(errors.toString())
  }
  return validatedConfig
}
