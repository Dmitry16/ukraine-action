import { Layer } from "effect"
import { DatabaseServiceLive } from "../DBService"
import { ConfigServiceLive } from "../ConfigService"
import { ConfigWithLoggerLive } from "./ConfigWithLogger"

export const MainLive = DatabaseServiceLive.pipe(
    Layer.provide(ConfigWithLoggerLive),
    Layer.provideMerge(ConfigServiceLive)
)
