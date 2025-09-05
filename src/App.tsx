import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { Route, Routes, Navigate } from "react-router"
import Layout from "./pages/Layout"
import ProtectedRoute from "./pages/ProtectedRoute"

function App() {

  return (
    <div className="main_wrapper">
        <Routes>
           {/* Login page has it's own header */}
           <Route path="/login" element={ <Login/>} />

          <Route element={<ProtectedRoute/>}>
              <Route element={<Layout/>}>
                  <Route path="/profile" element={ <Profile/>} />
                  {/* add more routes here that should include header */}
              </Route>
          </Route>

           {/* Catch-all: redirect unknown URLs */}
           <Route path="*" element={<Navigate to="/login" replace />} />  
        </Routes>
    </div>
  )
}

export default App
