import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-600">
                           <span className='text-red-500'>NEWS</span>LYTIC
                        </Link>
                    </div>  

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4 items-center">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white shadow-sm">
                    <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
                    <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
