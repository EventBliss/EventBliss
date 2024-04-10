import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/public/HomePage";
import { AboutUs } from "./pages/public/AboutUs";
import { Contact } from "./pages/public/Contact";
import { SignUpClient } from "./pages/public/SignUpClient";
import { LogIn } from "./pages/public/LogIn";
import { Events } from "./pages/public/Events";
import { User } from "./components/user";
import { Admin } from "./components/admin";
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Products } from "./pages/products/Products";
import { ProductCardsModal } from "./pages/products/ProductCardsModal";
import { FormsEvent } from "./pages/FormsEvent"
import { CreateOrganizer } from "./pages/CreateOrganizer";


function App() {

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
          <Route path="/Products/:id" element={<ProductCardsModal/>}/>
          <Route path="/becomeAnOrganizer" element={<CreateOrganizer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
