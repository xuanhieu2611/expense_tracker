import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import { SignedIn, SignedOut } from "@clerk/clerk-react"
import { Navigate } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Home />
              </SignedIn>
              <SignedOut>
                <Navigate to="/" />
              </SignedOut>
            </>
          }
        />
        <Route index element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
