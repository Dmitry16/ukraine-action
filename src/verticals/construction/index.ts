// import { Plugin } from "../../core/di/types"
// import { container } from "../../core/di/container"
// import { TYPES } from "../../core/di/types"

type Plugin = {
  name: string
  register: () => void
}

const ConstructionVertical: Plugin = {
  name: "Construction",
  register: () => {
    console.log("Registering Construction Vertical...")
    // const apiService = container.get(TYPES.ApiService)

    // apiService.get("/construction/projects")
    //     .then((res) => console.log("Fetched projects:", res.data))
    //     .catch((error) => console.error("Error fetching projects:", error))
    // },
  },
}

export default ConstructionVertical

