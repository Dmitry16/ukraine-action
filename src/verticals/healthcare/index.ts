type Plugin = {
  name: string
  register: () => void
}

const HealthcareVertical: Plugin = {
  name: "Healthcare Vertical",
  register: () => {
    console.log("Registering Healthcare Vertical...")
    // const apiService = container.get(TYPES.ApiService)

    // apiService.get("/construction/projects")
    //     .then((res) => console.log("Fetched projects:", res.data))
    //     .catch((error) => console.error("Error fetching projects:", error))
    // },
  },
}

export default HealthcareVertical
