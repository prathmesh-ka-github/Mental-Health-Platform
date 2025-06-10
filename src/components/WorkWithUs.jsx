import React from 'react'

const WorkWithUs = () => {
    return (
        <div className='flex flex-col items-center my-40 z-10 relative'>
            <div className='lg:text-[50px] font-bold txt-light'>
                <span className='txt-main'>Work</span> with us
            </div>
            <div className="txt-ternary-light lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:w-[250px] md:w-auto text-center mobile:items-center justify-center">
                <div>If you are a therapist, we need you in our mission. Let's make a change!</div>
            </div>

            <button className="text-white back-main px-[30px] py-[10px] mt-4 rounded-md text-[20px] hover:bg-blue-400 active:bg-blue-500 transition-all" >
                Register
            </button>
        </div>
    )
}

export default WorkWithUs