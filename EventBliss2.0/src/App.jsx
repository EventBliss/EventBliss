import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { SignUpClient } from "./pages/SignUpClient"
import { LogIn } from "./pages/LogIn"
import { Dashboard } from "./pages/Dashboard"
import { AdmDashboard } from "./pages/AdmDashboard"
import ProtectedRoute from "./components/ProtectedRoute";
// import ProtectedRouteAdm from "./components/ProtectedRouteAdm";
import { Protect } from "@clerk/clerk-react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/SignUpClient" element={<SignUpClient/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/Dashboard" element={<ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>} />
          <Route path="/AdmDashboard" element={ <Protect role="org:admin">
            <AdmDashboard/>
          </Protect>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
