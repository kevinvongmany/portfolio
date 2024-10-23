import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.navbar') && !event.target.closest('button[data-collapse-toggle="navbar-sticky"]')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="flex md:hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button 
                    data-collapse-toggle="navbar-sticky" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-sticky" 
                    aria-expanded={isMenuOpen} 
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <nav className={`navbar items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                <ul className="links flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-black dark:text-gray-300">
                    <li>
                        <NavLink 
                            onClick={(e) => !e.currentTarget.classList.contains('active') && toggleMenu()}
                            to="/about" 
                            className={({ isActive }) => 
                                `block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:border-gray-700 ${isActive ? 'active text-blue-700 dark:text-blue-500' : 'text-gray-300'}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            onClick={(e) => !e.currentTarget.classList.contains('active') && toggleMenu()}
                            to="/projects" 
                            className={({ isActive }) => 
                                `block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:border-gray-700 ${isActive ? 'active text-blue-700 dark:text-blue-500' : 'text-gray-300'}`
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            onClick={(e) => !e.currentTarget.classList.contains('active') && toggleMenu()}
                            to="/resume" 
                            className={({ isActive }) => 
                                `block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:border-gray-700 ${isActive ? 'active text-blue-700 dark:text-blue-500' : 'text-gray-300'}`
                            }
                        >
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            onClick={(e) => !e.currentTarget.classList.contains('active') && toggleMenu()}
                            to="/contact" 
                            className={({ isActive }) => 
                                `block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:border-gray-700 ${isActive ? 'active text-blue-700 dark:text-blue-500' : 'text-gray-300'}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;