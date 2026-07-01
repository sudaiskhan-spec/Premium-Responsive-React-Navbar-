import React from 'react'
import assets from '../assets/assets'
import Themetogglebtn from './Themetogglebtn'

const Navbar = ({ theme, setTheme }) => {
  const [opensidebar, setOpenSidebar] = React.useState(false)

  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-0 py-4 sticky top-0 z-20 
    backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
      
      {/* Dynamic Logo based on theme state */}
      <img 
        className='w-32 sm:w-40' 
        alt='logo' 
        src={theme === 'dark' ? assets.logo_dark : assets.logo} 
      />
      
      {/* Navigation Links / Mobile Sidebar */}
      <div className={`
        text-gray-700 dark:text-white sm:text-sm flex gap-5 transition-all duration-300 items-center
        max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:h-screen max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 
        ${opensidebar ? 'max-sm:w-60 max-sm:pl-10 opacity-100' : 'max-sm:w-0 max-sm:p-0 opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto'}
      `}>
        <img 
          src={assets.close_icon} 
          className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer' 
          alt="close" 
          onClick={() => setOpenSidebar(false)} 
        />
        <a onClick={() => setOpenSidebar(false)} href='#' className='sm:hover:border-b'> Home </a>
        <a onClick={() => setOpenSidebar(false)} href='#services' className='sm:hover:border-b'> Services </a>
        <a onClick={() => setOpenSidebar(false)} href='#our-work' className='sm:hover:border-b'> Our Work </a>
        <a onClick={() => setOpenSidebar(false)} href='#contact-us' className='sm:hover:border-b'> Contact Us </a>
      </div> 

      {/* Right Side Actions (Theme Toggle placeholder, Menu Icon, and Connect Button) */}
      <div className='flex items-center gap-4'>
       
        {/* Mobile Menu Trigger Icon (Moved outside the hidden container so it stays visible) */}

         <Themetogglebtn theme={theme} setTheme={setTheme}/>
        <img 
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
          className='w-6 sm:hidden cursor-pointer' 
          alt="menu" 
          onClick={() => setOpenSidebar(true)} 
        />
       
        {/* Connect Button (Hidden on mobile, visible on desktop) */}
        <div className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'> 
          <a href='#contact-us' className='flex items-center gap-2 text-white no-underline'>
            Connect <img src={assets.arrow_icon} width={14} alt="arrow" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Navbar