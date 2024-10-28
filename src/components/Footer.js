import React from 'react'; 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
const Footer = () => { 
    return ( 
    <footer className="w-full bg-gray-800 text-white py-6 mt-10"> 
    <div className="container mx-auto flex flex-col items-center"> 
        <div className="flex space-x-4 mb-4"> 
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"> 
                <FaFacebook size={24} /> </a> <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"> 
                    <FaTwitter size={24} /> </a> <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"> 
                        <FaInstagram size={24} /> </a> <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"> 
                            <FaLinkedin size={24} /> 
            </a>
        </div> 
        <p className="text-gray-400 mb-2 text-center"> ©️ {new Date().getFullYear()} EventSpot Lite. All rights reserved. </p> 
        <p className="text-gray-500 text-sm text-center"> 
            Discover and explore exclusive events with EventSpot Lite. 
            <br/>Stay connected and inspired. 
        </p> 
    </div> 
    </footer> 
    ); 
}; 

export default Footer;