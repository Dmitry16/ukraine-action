import { Effect, Context, Layer } from "effect"
import { ConfigService } from "./ConfigService"
import { LoggerService } from "./LoggerService"

export class DatabaseService extends Context.Tag("DatabaseService")<
  DatabaseService,
  { readonly query: (sql: string) => Effect.Effect<unknown> }
>() {}

export const DatabaseServiceLive = Layer.effect(
  DatabaseService,
  Effect.gen(function* () {
    const config = yield* ConfigService
    const logger = yield* LoggerService
    return {
      query: (sql: string) =>
        Effect.gen(function* () {
          yield* logger.log(`Executing query: ${sql}`)
          const { connection } = yield* config.getConfig
          return { result: `Results from ${connection}` }
        })
    }
  })
)
