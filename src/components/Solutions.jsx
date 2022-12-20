import React from 'react'

const Solutions = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-center mb-[80px] flex-col'>
                <div className='flex flex-col'>
                    <div className="justify-center z-10 font-bold txt-main mt-[10rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col mobile:items-center lg:flex-row">
                        Solution
                        <div className="txt-light flex">&nbsp;to all your</div>
                        <div className="txt-light flex">&nbsp; problems</div>
                    </div>
                    <div className="txt-ternary-light lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:w-[250px] w-auto text-center mobile:items-center justify-center">
                        <div>We’ll help you tackle through problems related with</div>
                    </div>

                </div>
            </div>
            <div className='flex w-[70%] flex-wrap justify-center'>
                <div className='sol-hover txt-light rounded-2xl m-4 p-4 border-2 border-[#C2C2C2] text-[28px] font-[500]'>
                        Depression
                </div>
                <div className='sol-hover txt-light rounded-2xl m-4 p-4 border-2 border-[#C2C2C2] text-[28px] font-[500]'>
                        Anxiety
                </div>
                <div className='sol-hover txt-light rounded-2xl m-4 p-4 border-2 border-[#C2C2C2] text-[28px] font-[500]'>
                        Insomnia
                </div>
                <div className='sol-hover txt-light rounded-2xl m-4 p-4 border-2 border-[#C2C2C2] text-[28px] font-[500]'>
                        PTSD
                </div>
                <div className='sol-hover txt-light rounded-2xl m-4 p-4 border-2 border-[#C2C2C2] text-[28px] font-[500]'>
                        Bipolar Disorder
                </div>
                <div className='sol-hover txt-light rounded-2xl m-4 p-4 border-2 border-[#C2C2C2] text-[28px] font-[500]'>
                        Relationships
                </div>
                <div className='sol-hover txt-light rounded-2xl m-4 p-4 border-2 border-[#C2C2C2] text-[28px] font-[500]'>
                        Parasomnias
                </div>
                <div className='sol-hover txt-light rounded-2xl m-4 p-4 border-2 border-[#C2C2C2] text-[28px] font-[500]'>
                        Dementia
                </div>
            </div>
        </div>
    )
}

export default Solutions