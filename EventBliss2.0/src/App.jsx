import { useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute, ProtectedRoutePublic } from "./components/ProtectedRoute";
import { ProtectedRoute, ProtectedRoutePublic } from "./components/ProtectedRoute";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/public/HomePage";
import { Contact } from "./pages/public/Contact";
import { AboutUs } from "./pages/public/AboutUs";
import { Products } from "./pages/products/Products";
// import { ProductCardsModal } from "./pages/products/ProductCardsModal";
import { User } from "./pages/ClientPages/user";
import { Events } from "./pages/public/Events";
import { LogIn } from "./pages/public/LogIn";
import { SignUpClient } from "./pages/public/SignUpClient";
import { CreateOrganizer } from "./pages/CreateOrganizer";

// importaciones del role de admin
import { SideBar } from "./pages/organizer/SideBarOrganizer";
import { Admin } from "./components/admin";
import { Dashboard } from "./pages/organizer/Dashboard";
import { TableProducts } from "./pages/organizer/TableProduct";
import { FormsEvent } from "./pages/organizer/TableProduct/FormsEvent";


function App() {
  const { user, isSignedIn } = useUser()
  const [role, setRole] = useState('public')
  const [role, setRole] = useState('public')

  // useEffect(()=>{
  //   if(user && isSignedIn){
  //     if(user.organizationMemberships.length > 0){
  //       if(user.organizationMemberships[0].role === 'org:admin'){
  //         setRole('admin')
  //       }
  //     }else{
  //       setRole('client')
  //     }
  //   }else{
  //     setRole('public')
  //   }
  // },[user, isSignedIn])



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          {/* rutas publicas */}
          <Route element={<ProtectedRoutePublic role={role} />}>
          <Route element={<ProtectedRoutePublic role={role} />}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Login" element={<LogIn />} />
            <Route path="/SignUpClient" element={<SignUpClient />} />
          </Route>

          {/* rutas compartidas entre el publico y el cliente */}
          <Route element={<ProtectedRoute role={(role.includes('client') || role.includes('public'))} redirectTo={'/admin/Dashboard'} redirect={false}/>}>
          <Route element={<ProtectedRoute role={(role.includes('client') || role.includes('public'))} redirectTo={'/admin/Dashboard'} redirect={false}/>}>
            <Route path="/Products" element={<Products/>}/>
            {/* <Route path="/Products/:id" element={<ProductCardsModal/>}/> */}
            <Route path="/Organizer" element={<User/>}/>
            <Route path="/Organizer/:id" />
            <Route path="/Events" element={<Events/>}/>
          </Route>

          {/* ruta para cliente */}
          <Route element={<ProtectedRoute role={role.includes('client')} redirectTo={'/admin/Dashboard'}/>}>
            <Route path="/becomeAnOrganizer" element={<CreateOrganizer/>}/>
          </Route>

          {/*<Route path="/FormsEvent" element={<FormsEvent />} /> */}
        </Route>

        {/* ruta para admin */}
        <Route element={<ProtectedRoute role={role.includes('admin')} redirectTo={'/Organizer'} redirect={true}/>}>
        <Route element={<ProtectedRoute role={role.includes('admin')} redirectTo={'/Organizer'} redirect={true}/>}>
          <Route path="/admin" element={<SideBar/>}>
              <Route path="Dashboard" element={<Dashboard/>}/>
              <Route path="TableProducts"> 
                <Route index element={<TableProducts/>}/>
                <Route path="EditEvent/:id" element={<FormsEvent/>}/>
              </Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;