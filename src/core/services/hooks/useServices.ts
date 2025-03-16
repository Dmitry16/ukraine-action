import { Effect } from 'effect'
import { useContext } from "react"
import { ServicesContext } from "../provider"
import { DatabaseService } from "../DBService"

export const useDbService = (query: string) => {
    let runnableEffect: Effect.Effect<unknown>
    const context = useContext(ServicesContext)

    if (!context) {
        throw new Error("useComponent must be used within a ComponentProvider")
    }

    const DbLayer = context?.DbWithConfigLayer

    if (!DbLayer) {
        throw new Error("useDbService must be used within a ServicesProvider")
    }

    const program = Effect.gen(function* () {
        const database = yield* DatabaseService
        const result = yield* database.query(query)
        return result
    })

    runnableEffect = Effect.provide(program, DbLayer)

    return runnableEffect
}
