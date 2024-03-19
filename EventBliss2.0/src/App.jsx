import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { SignUpClient } from "./pages/SignUpClient";
import { LogIn } from "./pages/LogIn";
import { useUser } from "@clerk/clerk-react";
import { User } from "./components/user";
import { Admin } from "./components/admin";

function App() {
  const [validation, setValidation] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (user && user.organizationMemberships && user.organizationMemberships.length > 0) {
      if (user.organizationMemberships[0].role === 'org:member') {
        setValidation(false);
      } else if (user.organizationMemberships[0].role === 'org:admin') {
        setValidation(true);
      }
    } else {
      console.log(user);
    }
  }, [user]);


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignUpClient" element={<SignUpClient />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
