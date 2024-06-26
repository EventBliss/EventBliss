import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import '../assets/css/Layout.css';
import favicon from "/favicon-wh.png"
import { SignedIn, SignedOut, UserButton, SignOutButton, useUser } from "@clerk/clerk-react";

export function Layout() {
    const [isOpen, setIsOpen] = useState(false);
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

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const navBarRoutes = [
        {
            title: "Home",
            path: "/",
            role: ["public"]
        },
        {
            title: "Organizers",
            path: "/Organizers",
            role: ["public", "client"]
        },
        {
            title: "Products",
            path: "/Products",
            role: ["public", "client"]
        },
        
        {
            title: "About us",
            path: "/AboutUs",
            role: ["public"]
        },
        {
            title: "Contact",
            path: "/Contact",
            role: ["public"]
        }, 
        {
            title: "Requests",
            path: "/Requests",
            role: ["client"]
        },

    ]

    return (
        <div>
            <header>
                <nav className={`fixed z-50 w-full ${isOpen ? 'bg-black backdrop-blur-lg bg-opacity-60' : 'bg-black backdrop-filter backdrop-blur-lg bg-opacity-15 '}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <img src={favicon} id='btn-layout' className='w-10' alt="" />
                            </div>
                            <div className="hidden md:flex items-center justify-center flex-1">
                                {navBarRoutes.map((items, index)=>(
                                    items.path && items.role.includes(role) && (
                                        <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium" key={index}>                                    
                                            <Link to={items.path} id='btn-layout' onClick={scrollTop}>{items.title}</Link>  
                                        </div>
                                    )
                                ))}
                            </div>
                            <div className="flex items-center">
                                <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 md:hidden">
                                    <svg className={`h-6 w-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {isOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        )}
                                    </svg>
                                </button>
                                <SignedOut>
                                    <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                        <Link to="/SignUpClient" id='btn-layout' className={`rounded-md text-sm font-medium hidden md:block ${isOpen ? 'hidden' : ''}`}>
                                            Sign Up
                                        </Link>
                                    </div>

                                    <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                        <Link to="/LogIn" id='btn-layout' className={`rounded-md text-sm font-medium hidden md:block ${isOpen ? 'hidden' : ''}`}>
                                            Log In
                                        </Link>
                                    </div>
                                </SignedOut>

                                <SignedIn>
                                    
                                        <UserButton className={`rounded-md text-sm font-medium hidden md:block ${isOpen ? 'hidden' : ''}`}></UserButton>
                                    <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                        <SignOutButton className={`rounded-md text-sm font-medium hidden md:block ${isOpen ? 'hidden' : ''}`}></SignOutButton>
                                    </div>
                                    
                                </SignedIn>
                                
                            </div>
                        </div>
                    </div>
                    <div className={`md:hidden overflow-hidden ${isOpen ? 'max-h-screen transition-all duration-[1.2s] ease-in-out' : 'max-h-0 transition-all duration-[1s] ease-out'}`}>
                        <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
                            {navBarRoutes.map((items, index)=>(
                                    <div className="text-white hover:text-white rounded-md text-sm font-medium px-3 pt-4" key={index}>
                                        {items.path && items.role.includes(role) ? 
                                        (<Link to={items.path} id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base" onClick={scrollTop}>{items.title}</Link>) 
                                        : 
                                        null}
                                    </div>     
                            ))}
                            <SignedOut>
                                <div className="text-white hover:text-white rounded-md text-sm font-medium px-3 pt-4">
                                    <Link to="/SignUpClient" id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base" onClick={scrollTop}>
                                        Sign Up
                                    </Link>
                                </div>

                                <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                    <Link to="/LogIn" id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base" onClick={scrollTop}>
                                        Log In
                                    </Link>
                                </div>
                            </SignedOut>

                            <SignedIn>
                                <div className="text-white hover:text-white rounded-md text-sm font-medium px-3 pt-4">
                                <SignOutButton><Link to="/" id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base" onClick={scrollTop}>Sign Out</Link></SignOutButton>
                                </div>

                                <UserButton afterSignOutUrl='/' className={`rounded-md text-sm font-medium hidden md:block ${isOpen ? 'hidden' : ''}`}></UserButton>

                            </SignedIn>
                            
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
