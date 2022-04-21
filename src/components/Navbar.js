import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
   // Hooks - useState
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   // Hooks - useEffect -> Runs on page load to set the button to false if need be.
   useEffect(() => {
      showButton();
   }, []);

   // Hooks - useEffect -> Runs anytime the state of click changes to change the overflow-y.
   useEffect(() => {
      click ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll';
   }, [click]);

   // Sets setClick hook to the oposite of click.  Can be shorthanded to just () => setClick(!click) in the onlick function.
   const handleClick = () => setClick(!click);

   // Sets setClick to false when the nav-links are clicked.
   const handleCloseMenu = () => setClick(false);

   // Shows the button if the screen size is 960 and less.  Doesn't show the button if the screen size is more than 960.
   // If the window gets bigger than 960, the setClick is set to false.
   const showButton = () => {
      window.innerWidth <= 960 ? setButton(false) : setButton(true);
      if(window.innerWidth > 960) {
         setClick(false);
      };
   }

   // Event listener to see if the screen has been resized.  If so, then it will run the showButton function.
   window.addEventListener('resize', showButton);

   return (
      <>
         <nav className='navbar'>
            <div className='navbar-container'>
               <Link to='/' className='navbar-logo'>
                  Travel<i className='fab fa-typo3'></i>
               </Link>
               <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={handleCloseMenu}>Home</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to='/services' className='nav-links' onClick={handleCloseMenu}>Services</Link>
                  </li>
                  <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={handleCloseMenu}>Products</Link>
                  </li>
                  <li>
                     <Link to='/signup' className='nav-links-mobile' onClick={handleCloseMenu}>Sign Up</Link>
                  </li>
               </ul>
               {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
         </nav>
      </>
   );
};

export default Navbar;