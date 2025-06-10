import React from 'react'

const Solutions = () => {
    return (
        <div className='flex flex-col items-center py-60'>
            <div className='flex justify-center lg:mb-[60px] mobile:mb-[40px] flex-col'>
                <div className='flex flex-col'>
                    <div className="justify-center z-10 font-bold txt-main mobile:text-[40px] lg:text-[50px] flex mobile:flex-col mobile:items-center lg:flex-row">
                        Solution
                        <div className="txt-light flex">&nbsp;to all of your</div>
                        <div className="txt-light flex">&nbsp; problems.</div>
                    </div>
                    <div className="txt-ternary-light lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:w-[250px] md:w-auto text-center mobile:items-center justify-center">
                        <div>We’ll help you tackle through problems related with</div>
                    </div>

                </div>
            </div>
            <div className='flex w-[80%] flex-wrap justify-center lg:text-[20px]'>
                <div className='sol-hover txt-light'>
                    Depression
                </div>
                <div className='sol-hover txt-light '>
                    Anxiety
                </div>
                <div className='sol-hover txt-light '>
                    Insomnia
                </div>
                <div className='sol-hover txt-light '>
                    PTSD
                </div>
                <div className='sol-hover txt-light '>
                    ADHD
                </div>
                <div className='sol-hover txt-light '>
                    Bipolar Disorder
                </div>
                <div className='sol-hover txt-light '>
                    Relationships
                </div>
                <div className='sol-hover txt-light '>
                    Parasomnias
                </div>
                <div className='sol-hover txt-light '>
                    Bipolar
                </div>
                <div className='sol-hover txt-light '>
                    ASD
                </div>
                <div className='sol-hover txt-light '>
                    Dementia
                </div>
                <div className='sol-hover txt-light '>
                    And more...
                </div>
            </div>
        </div>
    )
}

export default Solutions