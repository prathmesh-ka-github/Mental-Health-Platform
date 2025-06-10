import React from 'react'

const Pricing = () => {
    return (
        <div className='flex flex-col items-center py-40 z-10 relative'>
            <div className='lg:text-[50px] font-bold txt-light'>
                Our <span className='txt-main'>Pricing.</span>
            </div>
            <div className="txt-ternary-light lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:w-[250px] md:w-auto text-center mobile:items-center justify-center">
                <div>Flexible plans. Affordable care and Stress-free pricing.</div>
            </div>
            <div className="pricing-cards w-[80%] flex flex-row justify-around mt-20">
                <div className='w-[30%] h-[50rem] rounded-3xl flex justify-center items-center flex-col border-blue-500 border-solid border-4 mt-[5rem]'>
                    <div className='z-20 lg:text-[15px] txt-main'>Basic</div>
                    <div className='z-20 lg:text-[70px] font-semibold txt-light'>$80</div>
                    <div className='z-20 lg:text-[15px] txt-light'>per session</div>
                    <ul className='z-20 h-[45%] txt-ternary-light mt-14 w-[70%]'>
                        <li className='list-disc p-1'>Bi-weekly 1:1 sessions with a licensed therapist</li>
                        <li className='list-disc p-1'>Access to limited self-help resources</li>
                        <li className='list-disc p-1'>Pause or Cancel anytime. No commitments.</li>
                        <li className='list-disc p-1'>Email support</li>
                        <li className='list-disc p-1'>Community forum support</li>
                    </ul>
                    <button className="text-white back-main px-[30px] py-[10px] mt-4 rounded-md text-[20px] hover:bg-blue-400 active:bg-blue-500 transition-all" >
                        Select Plan
                    </button>
                </div>
                <div className='w-[30%] h-[50rem] rounded-3xl flex justify-center items-center flex-col border-blue-500 border-solid border-4 relative overflow-hidden'>
                    <div className='z-20 text-white lg:text-[15px] ani-bounce'>Popular pick!</div>
                    <div className='z-20 lg:text-[70px] font-semibold text-black'>$120</div>
                    <div className='z-20 text-black lg:text-[15px]'>per session</div>
                    <ul className='z-20 h-[45%] txt-ternary-light mt-28 w-[70%]'>
                        <li className='list-disc py-1'>Weekly 1:1 sessions with a licensed therapist</li>
                        <li className='list-disc py-1'>Access to most self-help resources</li>
                        <li className='list-disc py-1'>Mental health progress reports</li>
                        <li className='list-disc py-1'>Chat support with therapists (business hours)</li>
                        <li className='list-disc py-1'>Email support</li>
                        <li className='list-disc py-1'>Community forum support</li>
                    </ul>
                    <button className="text-white back-main px-[30px] py-[10px] mt-4 rounded-md text-[20px] hover:bg-blue-400 active:bg-blue-500 transition-all" >
                        Select Plan
                    </button>
                    <div className='z-10 absolute w-[40rem] h-[40rem] bg-blue-400 top-[-23rem] rounded-full '></div>
                </div>
                <div className='w-[30%] h-[50rem] rounded-3xl flex justify-center items-center flex-col border-blue-500 border-solid border-4 mt-[5rem]'>
                    <div className='z-20 lg:text-[15px] txt-main'>Premium</div>
                    <div className='z-20 lg:text-[70px] font-semibold txt-light'>$200</div>
                    <div className='z-20 lg:text-[15px] txt-light'>per session</div>
                    <ul className='z-20 h-[45%] txt-ternary-light mt-14 w-[70%]'>
                        <li className='list-disc p-1'>Weekly 1:1 sessions with a licensed therapist</li>
                        <li className='list-disc p-1'>Emergency emotional support sessions</li>
                        <li className='list-disc p-1'>Access to exclusive webinars, workshops and all self-help resources</li>
                        <li className='list-disc p-1'>Priority booking and scheduling flexibility</li>
                        <li className='list-disc p-1'>24/7 chat support with therapist</li>
                        <li className='list-disc p-1'>Community forum support</li>
                    </ul>
                    <button className="text-white back-main px-[30px] py-[10px] mt-4 rounded-md text-[20px] hover:bg-blue-400 active:bg-blue-500 transition-all" >
                        Select Plan
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pricing