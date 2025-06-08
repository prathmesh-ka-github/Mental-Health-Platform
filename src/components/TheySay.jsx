import React from 'react'
import { useEffect, useState } from 'react';
function next(){
            
}
function prev(){
    const lol =1
}
const TheySay = () => {
    const [index , setIndex] = useState(0)
    useEffect(() => {
        const item1 = document.getElementById('1')
        const item2 = document.getElementById('2')
        const item3 = document.getElementById('3')
        const item4 = document.getElementById('4')
        const item5 = document.getElementById('5')

      }, []);
    return (
        <div className='flex flex-col items-center py-60'>
            <div className='lg:text-[50px] font-bold txt-light'>
                They <span className='txt-main'>Say.</span>
            </div>
            <div className="gallery">
                <div className="gallery-container">
                    <div id='1' className="gallery-item gallery-item-1" data-index="1"></div>
                    <div id='2' className="gallery-item gallery-item-2" data-index="2"></div>
                    <div id='3' className="gallery-item gallery-item-3" data-index="3"></div>
                    <div id='4' className="gallery-item gallery-item-4" data-index="4"></div>
                    <div id='5' className="gallery-item gallery-item-5" data-index="5"></div>
                </div>
                <div className="gallery-controls">
                    <button onClick={prev} className='lg:text-[30px] px-2 mx-1 text-gray-500 hover:text-black transition-all duration-500'> &lt; </button>
                    <button onClick={next} className='lg:text-[30px] px-2 mx-1 text-gray-500 hover:text-black transition-all duration-500'> &gt; </button>
                </div>
            </div>
        </div>
    )
}

export default TheySay