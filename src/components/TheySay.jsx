import React from 'react'

const TheySay = () => {
    return (
        <div className='flex flex-col items-center py-60'>
            <div className='lg:text-[50px] font-bold txt-light'>
                They <span className='txt-main'>Say.</span>
            </div>
            <div className="gallery">
                <div className="gallery-container">
                    <div className="gallery-item gallery-item-1" data-index="1"></div>
                    <div className="gallery-item gallery-item-2" data-index="2"></div>
                    <div className="gallery-item gallery-item-3" data-index="3"></div>
                    <div className="gallery-item gallery-item-4" data-index="4"></div>
                    <div className="gallery-item gallery-item-5" data-index="5"></div>
                </div>
                <div className="gallery-controls"></div>
            </div>
        </div>
    )
}

export default TheySay