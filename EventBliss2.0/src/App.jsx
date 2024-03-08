import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;