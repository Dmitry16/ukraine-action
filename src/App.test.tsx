import { render, screen } from "@testing-library/react"
import App from "./App"
import AuthService from "./core/services/AuthService"

jest.mock("./core/services/AuthService", () => ({
  getCustomerVertical: jest.fn(),
}))

jest.mock("./verticals/construction/App", () => ({
  __esModule: true,
  default: () => <div>Mocked TestVertical Loaded</div>,
}))

describe("App Component", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders loading state initially", () => {
    (AuthService.getCustomerVertical as jest.Mock).mockReturnValue(null)

    render(<App />)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

//   it("renders unauthorized message when no vertical is assigned", async () => {
//     (AuthService.getCustomerVertical as jest.Mock).mockReturnValue(null)

//     render(<App />)

//     await waitFor(() =>
//       expect(screen.getByText("Unauthorized: No vertical assigned")).toBeInTheDocument()
//     )
//   })

//   it("loads and renders the mocked vertical component", async () => {
//     (AuthService.getCustomerVertical as jest.Mock).mockReturnValue("TestVertical")

//     render(
//       <Suspense fallback={<p>Loading Vertical...</p>}>
//         <App />
//       </Suspense>
//     )

//     expect(screen.getByText("Loading Vertical...")).toBeInTheDocument()

//     await waitFor(() => expect(screen.getByText("Mocked TestVertical Loaded")).toBeInTheDocument())
//   })
})
