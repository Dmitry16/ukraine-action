// import ApiService from "./ApiService"

type Vertical = "construction" | "healthcare" | "education"

interface LoginResponse {
  vertical: Vertical
  token: string // Adjust this based on actual API response
}

const verticals: Vertical[] = ["construction", "healthcare", "education"]

class AuthService {
    // async login(email: string, password: string): Promise<LoginResponse> {
    //     const response = await axios.post<LoginResponse>(
    //         "http://localhost:3000/api/auth/login",
    //         { email, password }
    //     )
    
    //     localStorage.setItem("vertical", response.data.vertical)
    
    //     import(`../verticals/${response.data.vertical}/App`)
    
    //     return response.data
    // }

    getCustomerVertical(): Vertical | null {
        // return localStorage.getItem("vertical")
        // return null
        return verticals[2]
    }
}

export default new AuthService()
  