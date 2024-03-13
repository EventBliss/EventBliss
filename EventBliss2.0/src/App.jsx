import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { SingIn } from "./pages/SignUp"
import { LogIn } from "./pages/LogIn"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/SingIn" element={<SingIn/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
