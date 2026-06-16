import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast"
import NavBar from "./components/NavBar"

function App() {
  return (
     <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/todos" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />

      </Routes>
      <Toaster/>
     </div>
  )
}

export default App
