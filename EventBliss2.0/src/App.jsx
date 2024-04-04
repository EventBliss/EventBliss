import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { SignUpClient } from "./pages/SignUpClient";
import { LogIn } from "./pages/LogIn";
import { Events } from "./pages/Events";
import { User } from "./components/user";
import { Admin } from "./components/admin";
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Products } from "./pages/Products";
<<<<<<< HEAD
import { useUser } from "@clerk/clerk-react";

function App() {
  const { isSignedIn, user } = useUser();
  console.log(user.organizationMemberships)
=======
import { FormsEvent } from "./pages/FormsEvent";

function App() {
  
>>>>>>> e7084506c36d86ba6efb8e22285d8083d1913be7
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to='/EventBliss' />}/>
          <Route path="/EventBliss" element={<HomePage/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignUpClient" element={<SignUpClient />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/FormsEvent" element={<FormsEvent />} />
          <Route path="/user" element={
          <ProtectedRoute>
            <User/>
          </ProtectedRoute>} />
          <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>} />
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Products" element={<Products/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
