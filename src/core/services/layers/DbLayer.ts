import { Layer } from "effect"
import { DatabaseServiceLive } from "../DBService"
import { ConfigServiceLive } from "../ConfigService"
import { ConfigWithLoggerLive } from "./ConfigWithLoggerLayer"

// Layer that provides the database service
export const DbLayer = DatabaseServiceLive.pipe(
    // provides the config and logger to the database
    Layer.provide(ConfigWithLoggerLive),
    Layer.provide(ConfigServiceLive)
)

// Layer with database and config
export const DbWithConfigLayer = DatabaseServiceLive.pipe(
    Layer.provide(ConfigWithLoggerLive),
    Layer.provideMerge(ConfigServiceLive)
)
