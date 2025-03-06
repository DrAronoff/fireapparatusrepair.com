import React, { useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  useEffect(() => {
    document.title = 'Fire Apparatus Repair';
  }, []);

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const handleChildClick = (e) => {
      e.stopPropagation(); // Prevents the click from bubbling up to the parent
      console.log('Child clicked');
    };
    
    const closeMenu = () => {
        setIsOpen(false);
    }
  
    return (
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
               {/* <strong className="right50 stencil">FIRE APPARATUS REPAIR</strong> */}
               <img width="200px" className="logo" src="https://fireapparatusrepair.com/assets/images/Far_logo_transparent.png"></img>
                <Link to="/" className="text-white text-lg font-semibold">
                
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 right50">
                  <NavLink to="/" className={({ isActive }) => 
                    isActive ? "whiteText" : 
                    "whiteText"
                  }>
                    Home
                  </NavLink>
                  <NavLink to="/repair" className={({ isActive }) => 
                    isActive ? "whiteText" : 
                    "whiteText"
                  }>
                    Repair Services
                  </NavLink>
                  <NavLink to="/comand-vehicles" className={({ isActive }) => 
                    isActive ? "whiteText" : 
                    "whiteText"
                  }>
                    Custom Vehicle Fabrication
                  </NavLink>
                  
                  
                  <NavLink to="/contact" className={({ isActive }) => 
                    isActive ? "whiteText" : 
                    "whiteText"
                  }>
                    Contact
                  </NavLink>

                
                </div>
              </div>
            </div>
            
                  
              
            <div className="block">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=""
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          
          <div className="custom5" onClick={closeMenu}>
            <center>

            <strong className='stencil'>FIRE APPARATUS REPAIR</strong>
            <br></br>
                  <NavLink to="/" className={({ isActive }) => 
                    isActive ? "whiteText" : 
                    "whiteText"
                  }>
                    Home
                  </NavLink>
                  <br></br>
                  <NavLink to="/services" className={({ isActive }) => 
                    isActive ? "whiteText" : 
                    "whiteText"
                  }>
                    Repair Services
                  </NavLink>
                  <br></br>
                  <NavLink to="/command-vehicles" className={({ isActive }) => 
                    isActive ? "whiteText" : 
                    "whiteText"
                  }>
                    Custom Vehicle Fabrication
                  </NavLink>
                  
                  <br></br>

                  <NavLink to="/contact" className={({ isActive }) => 
                    isActive ? "whiteText" : 
                    "whiteText"
                  }>
                    Contact
                  </NavLink>
            </center>
          </div>
        )}
        </nav>
      
    )
  }