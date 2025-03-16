import { Effect, Context, Layer } from "effect"
import { ConfigService } from "./ConfigService"

export class LoggerService extends Context.Tag("LoggerService")<
  LoggerService,
  { readonly log: (message: string) => Effect.Effect<void> }
>() {}

export const LoggerServiceLive = Layer.effect(
  LoggerService,
  Effect.gen(function* () {
    const config = yield* ConfigService
    return {
      log: (message) =>
        Effect.gen(function* () {
          const { logLevel } = yield* config.getConfig
          console.log(`[${logLevel}] ${message}`)
        })
    }
  })
)
