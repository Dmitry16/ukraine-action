// import { Plugin } from "../../core/di/types"
// import { container } from "../../core/di/container"
// import { TYPES } from "../../core/di/types"

type Plugin = {
  name: string
  register: () => void
}

const EducationVertical: Plugin = {
  name: "Education Vertical",
  register: () => {
    console.log("Registering Education Vertical...")
    // const apiService = container.get(TYPES.ApiService)

    // apiService.get("/construction/projects")
    //     .then((res) => console.log("Fetched projects:", res.data))
    //     .catch((error) => console.error("Error fetching projects:", error))
    // },
  },
}

export default EducationVertical

