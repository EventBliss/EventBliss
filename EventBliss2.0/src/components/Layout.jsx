import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import '../assets/css/Layout.css';

export function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header>
                <nav className={`fixed z-50 w-full ${isOpen ? 'bg-black backdrop-blur-lg bg-opacity-60' : 'bg-black backdrop-filter backdrop-blur-lg bg-opacity-15 '}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <Link to="/" id='btn-layout' className="text-white text-xl font-bold">Logo</Link>
                            </div>
                            <div className="hidden md:flex items-center justify-center flex-1">
                                <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                    <Link to="/" id='btn-layout'>Home</Link>
                                </div>
                                <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                    <Link to="/" id='btn-layout'>Event</Link>
                                </div>
                                <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                    <Link to="/" id='btn-layout' >Products</Link>
                                </div>
                                <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                    <Link to="/" id='btn-layout'>About us</Link>
                                </div>
                                <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                    <Link to="/" id='btn-layout'>Contact</Link>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button onClick={toggleNavbar} className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 md:hidden">
                                    <svg className={`h-6 w-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {isOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        )}
                                    </svg>
                                </button>
                                <div className="text-white hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                                    <Link to="/" id='btn-layout' className={`rounded-md text-sm font-medium hidden md:block ${isOpen ? 'hidden' : ''}`}>
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`md:hidden overflow-hidden ${isOpen ? 'max-h-screen transition-all duration-[1.2s] ease-in-out' : 'max-h-0 transition-all duration-[1s] ease-out'}`}>
                        <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
                            <div className="text-white hover:text-white rounded-md text-sm font-medium px-3 ">
                            <Link to="/" id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base">Home</Link>
                            </div>
                            <div className="text-white hover:text-white rounded-md text-sm font-medium px-3 pt-4">
                            <Link to="/" id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base mb-[20px]">Event</Link>
                            </div>
                            <div className="text-white hover:text-white rounded-md text-sm font-medium px-3 pt-4">
                            <Link to="/" id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base">Products</Link>
                            </div>
                            <div className="text-white hover:text-white rounded-md text-sm font-medium px-3 pt-4">
                            <Link to="/" id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base">About us</Link>
                            </div>
                            <div className="text-white hover:text-white rounded-md text-sm font-medium px-3 pt-4">
                            <Link to="/" id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base">Contact</Link>
                            </div>
                            <div className="text-white hover:text-white rounded-md text-sm font-medium px-3 pt-4">
                            <Link to="/" id='btn-layout' className="text-white hover:text-white py-2 rounded-md text-base">Sign In</Link>
                            </div>
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
