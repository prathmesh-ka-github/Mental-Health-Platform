import React from 'react'

const Home = () => {
    return (
        <div className="flex text-center justify-center items-center flex-col pt-[65px] ">

            <div className='z-10 mb-60 lg:mt-60 mobile:mt-40'>
                <div className="font-bold txt-light mobile:text-[40px] lg:text-[64px]">
                    Speak out your<span className="txt-main">&nbsp;Feelings.</span>
                </div>
                <div className="txt-ternary-light lg:text-[20px] mt-2 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
                    <div>Connect to a therapist to get your&nbsp;</div><div className="type mobile:w-[179px] w-auto">problems solved...</div>
                </div>
                <button className="text-white back-main px-[30px] py-[10px] mt-4 rounded-md text-[20px] hover:bg-blue-400 active:bg-blue-500 transition-all" >
                    Get Help
                </button>
            </div>
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

export default Home