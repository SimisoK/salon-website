import React from 'react';
     import { Link } from 'react-router-dom'; // Import Link

     function Header() {
       return (
         <header className="navbar bg-[#efd7cd]">
           <div className="flex-1">
             <a className="btn btn-ghost normal-case text-xl text-black">NONHLE</a>
           </div>
           <div className="flex-none">
             <ul className="menu menu-horizontal px-1">
               <li className="bg-[#c79a96] text-white hover:bg-[#a87672]"><Link to="/">About</Link></li> 
               <li className="bg-[#c79a96] text-white hover:bg-[#a87672]"><Link to="/beauty-therapy">Beauty Therapy</Link></li>
               <li className="bg-[#c79a96] text-white hover:bg-[#a87672]"><Link to="/blog">My Blog</Link></li>
               <li className="bg-[#c79a96] text-white hover:bg-[#a87672]"><a href="#contact">Contact</a></li>
             </ul>
           </div>
         </header>
       );
     }

     export default Header;