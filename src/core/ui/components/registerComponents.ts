// import { Effect } from "effect"
// import { registerComponent } from "./componentsRegistry"
// import components from "@/lib/components"

// export const registerComponentsFromConfig = Effect.gen(function* (_) {
//   yield* _(
//     Effect.try({
//       try: () => {
//         Object.entries(components).forEach(([name, component]) => {
//             registerComponent(name, component)
//         });
//       },
//       catch: (error) => new Error(`Failed to register components: ${error}`)
//     }).pipe(
//       Effect.catchAll((err) => Effect.logError("Component registration failed", err))
//     )
//   )
//   yield* _(Effect.log("All components registered successfully!"))
// })
