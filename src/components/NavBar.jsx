import React from 'react'

const NavBar = () => {
    return (
        <div className="z-50 mobile:px-10 lg:px-[10vw] lg:text-[18px] lg:h-[65px] mobile:h-[70px] w-[100vw] flex items-center justify-between font-normal shadow-md fixed nav-light txt-light">
            <div className="cursor-pointer mobile:w-10 lg:w-[2.5vmax] md:w-10 ">
                <img id="logo" src="./assets/icons8-mental-health-64 (1).png" alt="logos" />
            </div>
            <ul className="lg:justify-around h-[100%] w-[40%] md:justify-between items-center sm:flex hidden">
                <li className="list-none h-[100%] content-center inline-block border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer p-2 transition-all">Help</li>
                <li className="list-none h-[100%] content-center inline-block border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer p-2 transition-all">About</li>
                <li className="list-none h-[100%] content-center inline-block border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer p-2 transition-all">Contact</li>
                <li className="list-none h-[100%] content-center inline-block border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer p-2 transition-all">
                    <svg className='usersvg' width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
            </ul>
            <div onClick={window['theme']} className="absolute sm:flex hidden lg:block right-6 h-[100%] content-center p-2 border-b-4 border-opacity-0 hover:border-opacity-100 border-blue-600 cursor-pointer transition-all">
                <button className="text-center justify-center flex">
                    <img className="w-[30px]" src="./assets/icons8-sun-100.png" alt="sun" id="icon" />
                </button>
            </div>
            <div className="h-[100%] content-center justify-end items-center sm:hidden w-8">
                <img id="menu" alt='hambuger menu' src="./assets/menu-light.png" />
            </div>

        </div>
    )
}

export default NavBar