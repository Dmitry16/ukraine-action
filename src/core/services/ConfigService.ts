import { Effect, Context, Layer } from "effect"

export class ConfigService extends Context.Tag("ConfigService")<
  ConfigService,
  {
    readonly getConfig: Effect.Effect<{
      readonly logLevel: string
      readonly connection: string
    }>
  }
>() {}


export const ConfigServiceLive = Layer.succeed(ConfigService, {
    getConfig: Effect.succeed({
      logLevel: "INFO",
      connection: "mysql://username:password@hostname:port/database_name"
    })
})
