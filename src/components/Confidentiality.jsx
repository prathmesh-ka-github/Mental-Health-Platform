import React from 'react'

const Confidentiality = () => {
    return (
        <div className="flex text-center justify-center items-center flex-col pt-[65px] ">
            <div className='my-60'>
                <div className="inline z-10 font-bold txt-main mt-[10rem] mobile:text-[40px] lg:text-[50px] mobile:flex-col lg:flex-row">
                    Your confidentiality <span className="txt-light ">&nbsp;is our priority.</span>
                </div>
                <br />
                <button className="text-white back-main px-[30px] py-[10px] mt-10 rounded-md text-[20px]  hover:bg-blue-400 active:bg-blue-500 transition-all" >View more</button>
            </div>
        </div>
    )
}

export default Confidentiality