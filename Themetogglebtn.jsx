import React, { useEffect } from 'react'
import assets from '../assets/assets' // Don't forget to import your assets!

const Themetogglebtn = ({ theme, setTheme }) => {
useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
},[theme])
    
    
    return (
    <button type="button" className="flex items-center justify-center">
      {theme === 'dark' ? (
        <img 
          onClick={() => setTheme('light')} 
          src={assets.sun_icon} 
          alt="sun" 
          className=' size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer' 
        />
      ) : (
        <img 
          onClick={() => setTheme('dark')} 
          className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer' 
          src={assets.moon_icon} 
          alt="moon" 
        />
      )}
    </button>
  )
}

export default Themetogglebtn