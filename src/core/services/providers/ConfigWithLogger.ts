import { Layer } from "effect"
import { ConfigServiceLive } from "../ConfigService"
import { LoggerServiceLive } from "../LoggerService"

export const ConfigWithLoggerLive = Layer.merge(ConfigServiceLive, LoggerServiceLive)