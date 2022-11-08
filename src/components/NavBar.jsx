import React from 'react'

const NavBar = () => {
  return (
    <div className="z-20 mobile:px-10 lg:px-60 lg:text-[26px] lg:h-[80px] mobile:h-[70px] w-[100vw] flex text-5xl items-center justify-between font-normal shadow-md fixed nav-light txt-light">
      <div className="cursor-pointer mobile:w-10 lg:w-20 ">
        <img id="logo" src="./assets/icons8-mental-health-64 (1).png" alt="logos" />
      </div>
      <ul className="justify-around items-center sm:flex hidden">
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">Home</li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">Help</li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">About Us</li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">Contact Us</li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer p-2 transition-all">
          <button onClick={window['theme']} className="text-center justify-center flex">
            <img className="w-[50px]" src="./assets/icons8-sun-100.png" alt="sun" id="icon" />
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