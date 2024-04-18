import { useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute, ProtectedRoutePublic } from "./components/ProtectedRoute";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/public/HomePage";
import { Contact } from "./pages/public/Contact";
import { AboutUs } from "./pages/public/AboutUs";
import { Products } from "./pages/products/Products";
import { ProductCardsView } from "./pages/products/ProductCardsView";
import { FormsEvent } from "./pages/FormsEvent"
// import { ProductCardsModal } from "./pages/products/ProductCardsModal";
import { User } from "./pages/ClientPages/user";
import { OrganizerCardsView } from "./pages/ClientPages/components/OrganizerCardsView";
import { Requests } from "./pages/ClientPages/Requests"
import { LogIn } from "./pages/public/LogIn";
import { SignUpClient } from "./pages/public/SignUpClient";
import { CreateOrganizer } from "./pages/CreateOrganizer";

// importaciones del role de admin
import { SideBar } from "./pages/organizer/SideBarOrganizer";
import { Dashboard } from "./pages/organizer/Dashboard";
import { TableRequestIP } from "./pages/organizer/request/pending";
import { TableRequestF } from "./pages/organizer/request/finished";
import { TableRequestA } from "./pages/organizer/request/approved";
import { TableRequestD } from "./pages/organizer/request/denied";
import { TableProducts } from "./pages/organizer/TableProducts/components/TableProducts";
import { CustomizableRequestForm } from "./pages/ClientPages/CustomizableRequestForm";
import { NotFound } from "./components/NotFound";

function App() {
  const { user, isSignedIn } = useUser()
  const [role, setRole] = useState('public')

  useEffect(()=>{
    if(user && isSignedIn){
      if(user.organizationMemberships.length > 0){
        if(user.organizationMemberships[0].role === 'org:admin'){
          setRole('admin')
        }
      }else{
        setRole('client')
      }
    }else{
      setRole('public')
    }
  },[user, isSignedIn])


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          {/* rutas publicas */}
          <Route element={<ProtectedRoutePublic role={role} />}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Login" element={<LogIn />} />
            <Route path="/SignUpClient" element={<SignUpClient />} />
          </Route>

          {/* rutas compartidas entre el publico y el cliente */}
          <Route element={<ProtectedRoute role={(role.includes('client') || role.includes('public'))} redirectTo={'/admin/Dashboard'} redirecto={false}/>}>
            <Route path="/Products" >
              <Route index element={<Products/>}/>
              <Route path="details/:id" element={<ProductCardsView/>}/>
            </Route>

            <Route path="/Organizers">
              <Route index element={<User/>}/>
              <Route path="details/:id" element={<OrganizerCardsView/>}/>
            </Route>
          </Route>

          {/* ruta para cliente */}
          <Route element={<ProtectedRoute role={role.includes('client')} redirectTo={'/admin/Dashboard'}/>}>
            <Route path="/becomeAnOrganizer" element={<CreateOrganizer/>}/>
            <Route path="/Requests" element={<Requests/>}/>
          </Route>

          {/*<Route path="/FormsEvent" element={<FormsEvent />} /> */}
        </Route>

        {/* ruta para admin */}
        <Route element={<ProtectedRoute role={role.includes('admin')} redirectTo={'/Organizers'} redirecto={true}/>}>
          <Route path="/admin" element={<SideBar/>}>
              <Route path="Dashboard" element={<Dashboard/>}/>
              <Route path="TableProducts">
                <Route index element={<TableProducts/>}/>
                <Route path="EditEvent/:id" element={<FormsEvent/>}/>
              </Route>
              <Route path="Pending" element={<TableRequestIP/>}/>
              <Route path="Finished" element={<TableRequestF/>}/> 
              <Route path="Approved" element={<TableRequestA/>}/> 
              <Route path="Denied" element={<TableRequestD/>}/>

          </Route>
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;