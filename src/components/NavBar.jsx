import React from 'react'

const NavBar = () => {
  return (
    <div className="z-20 mobile:px-10 lg:px-[10vw] lg:text-[20px] lg:h-[65px] mobile:h-[70px] w-[100vw] flex items-center justify-between font-normal shadow-md fixed nav-light txt-light">
      <div className="cursor-pointer mobile:w-10 lg:w-[2.5vmax] md:w-10 ">
        <img id="logo" src="./assets/icons8-mental-health-64 (1).png" alt="logos" />
      </div>
      <ul className="lg:justify-around w-[60%] md:justify-between items-center sm:flex hidden">
        <li className="list-none inline-block border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer p-1 transition-all ">Home</li>
        <li className="list-none inline-block border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer p-1 transition-all">Help</li>
        <li className="list-none inline-block border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer p-1 transition-all">About Us</li>
        <li className="list-none inline-block border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer p-1 transition-all">Contact Us</li>
        <li className="list-none mx-4 my-2 py-1 border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer transition-all">
          <button onClick={window['theme']} className="text-center justify-center flex">
            <img className="w-[35px]" src="./assets/icons8-sun-100.png" alt="sun" id="icon" />
          </button>
        </li>
      </ul>
      <div className="justify-end items-center sm:hidden w-8">
        <img id="menu" alt='hambuger menu' src="./assets/menu-light.png" />
      </div>
      
    </div>
  )
}

export default NavBar