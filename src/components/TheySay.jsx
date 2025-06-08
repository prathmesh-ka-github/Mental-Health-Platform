import React from 'react'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const names = ['Abhishek', 'Prathmesh', 'Atharva', 'Sai Satwik', 'Rishikesh'];
const data = [
    {
        heading: 'Life Changing',
        desc: 'The session provided a safe and supportive space to explore deep-rooted trauma. I felt truly heard and guided with compassion. The therapist helped me gain clarity and offered practical tools that I can use moving forward. It was a powerful step in my healing journey.',
        name: 'Emma Johnson',
        age: 36,
        job: 'Marketing Coordinator'
    },
    {
        heading: 'It made me come out of it',
        desc: 'The session was gentle yet powerful. It helped me begin to untangle the overwhelming feelings tied to my PTSD. The therapist created a safe space where I felt seen and supported. I left feeling more in control and hopeful about my healing process.',
        name: 'George Bennett',
        age: 43,
        job: 'Research Associate'
    },
    {
        heading: 'Calm Clarity',
        desc: "The session helped me understand my anxiety in a new light. The therapist created a calm, non-judgmental space where I felt comfortable opening up. I left with practical tools to manage my anxious thoughts and a sense of reassurance that I'm not alone in this.",
        name: 'Sophia Turner',
        age: 28,
        job: 'Graphic Designer'
    },
    {
        heading: 'Lifting Shadows',
        desc: 'The session gave me a sense of relief and hope. Talking openly about my depression felt easier with a therapist who truly listened and understood. I walked away with small, manageable steps to cope and a reminder that healing is possible, even on the hard days.',
        name: 'Olivia Carter',
        age: 24,
        job: 'Financial Analyst'
    },
    {
        heading: 'Healing Mirror',
        desc: 'The session helped me see my struggles with body image from a more compassionate perspective. The therapist was kind and understanding, helping me challenge negative thoughts and begin rebuilding a healthier relationship with my body. I felt heard, supported, and a little more at peace.',
        name: 'Harry Morgan',
        age: 53,
        job: 'Product Manager'
    }
]


const TheySay = () => {
    const [positions, setPositions] = useState([1, 2, 3, 4, 5]);

    const rotateLeft = () => {
        setPositions((prev) => {
            const newPos = [...prev];
            const first = newPos.shift();
            newPos.push(first);
            return newPos;
        });
    };

    const rotateRight = () => {
        setPositions((prev) => {
            const newPos = [...prev];
            const last = newPos.pop();
            newPos.unshift(last);
            return newPos;
        });
    };

    useEffect(() => {
        const interval = setInterval(rotateRight, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();
            if (event.deltaY > 0) rotateLeft();
            else rotateRight();
        };
        const container = document.getElementById('gallery');
        container.addEventListener('wheel', handleWheel);
        return () => container.removeEventListener('wheel', handleWheel);
    }, []);
    return (
        <div className='flex flex-col items-center py-60'>
            <div className='lg:text-[50px] font-bold txt-light'>
                They <span className='txt-main'>Say.</span>
            </div>
            <div className="txt-ternary-light lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:w-[250px] md:w-auto text-center mobile:items-center justify-center">
                <div>Some of our client testimonials</div>
            </div>
            <div className="gallery">
                <div className="gallery-container mt-8" id="gallery">
                    {positions.map((pos, idx) => (
                        <div key={idx} className={`gallery-card item${pos}`}>
                            {/* <h1>{names[idx]}</h1> */}
                            <div className="main-title font-medium lg:text-[30px] my-2">"{data[idx].heading}"</div>
                            <div className="desc my-2 lg:text-[15px]">{data[idx].desc}</div>
                            <div className="person flex flex-row m-2 items-start w-[100%]">
                                <div className="pfp bg-red-500 w-14 h-14 rounded-full"></div>
                                <div className="personinfo mx-3">
                                    <div className="personname lg:text-[15px] font-medium">{data[idx].name}</div>
                                    <div className="persondesc lg:text-[12px] text-gray-500 flex items-center">
                                        <div className="personage">{data[idx].age} year old</div>
                                        <span className='w-1 h-1 bg-gray-400 mx-2 rounded-full'></span>
                                        <div className="personjob">{data[idx].job}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="controls">
                    <button onClick={rotateLeft}>&lt;</button>
                    <button onClick={rotateRight}>&gt;</button>
                </div>
            </div>
        </div>
    )
}

export default TheySay