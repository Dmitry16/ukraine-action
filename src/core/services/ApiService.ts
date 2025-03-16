import { Effect, Context } from "effect"

export class ApiService extends Context.Tag("ApiService")<
  ApiService,
  { readonly fetch: (url: string) => Effect.Effect<any> }
>() {}

const apiService = Effect.gen(function* () {
    const apiService = yield* ApiService
    const fetchApi = apiService.fetch
    console.log(fetchApi)
    const response = yield* fetchApi("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response)
})

const runnable = Effect.provideService(apiService, ApiService, {
  fetch: (url) => Effect.sync(async () => fetch(url).then(res => res.json()))
})

Effect.runPromise(runnable)
