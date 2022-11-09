import React from "react";
import { useEffect, useState } from 'react';

function Top()  {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    })
  }

  return (
    <div>
        <button onClick={scrollUp} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="z-40 inline-block p-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#3a57ff] hover:shadow-lg back-main focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3e58ff] active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5" id="btn-back-to-top">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
        </button>

    </div>
  )
}

export default Top;