import React from 'react'
import {useState} from 'react'

const Faq = () => {

  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return(setSelected(null))
    }
    setSelected(i)
  }

  return (
    <div className='flex justify-center flex-col items-center'>      
      <div className="z-10 font-bold txt-main mt-[10rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col mobile:items-center lg:flex-row">
          Frequently Asked
          <span className="txt-light">&nbsp;Questions</span>
      </div>
      <div className='flex justify-center mt-20 h-[60%] w-[90vw]'>   
        <div className='lg:w-[70vw] mobile:w-[100vw]'>   

            <div className='mobile:px-4 lg:px-8 '>     
              <div id='blueborder'
                className='flex w-[100%] justify-between txt-light mobile:text-[20px] lg:text-[30px] mobile:p-2 lg:p-6 cursor-pointer'>  
                <h1>Q. What about my confidentiality?</h1>
                <span>-</span>
              </div>
              <div id='blueborder2' className='content show'>
                Client confidentiality is the requirement that therapists, psychiatrists, psychologists, and most other mental health professionals protect their client’s privacy by not revealing the contents of therapy.
                <br /><br />
                》WHAT IS CLIENT CONFIDENTIALITY?<br /><br />
                Confidentiality includes not just the contents of therapy, but often the fact that a client is in therapy. For example, it is common that therapists will not acknowledge their clients if they run into them outside of therapy in an effort to protect client confidentiality. Other ways confidentiality is protected include:

                Not leaving revealing information on voicemail or text.
                Not acknowledging to outside parties that a client has an appointment.
                Not discussing the contents of therapy with a third party without the explicit permission of the client.
              </div>
            </div>

            {//!Accordian here -------------------------------
            }
          {data.map((item, i) => (
                <div className='mobile:px-4 lg:px-8 '>     
                  <div id='blueborder' onClick={() => toggle(i)} 
                  className='flex w-[100%] justify-between txt-light mobile:text-[20px] lg:text-[30px] mobile:p-2 lg:p-6 cursor-pointer'>  
                    <h1 className='z-10'>{item.question}</h1>
                    <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <div id='blueborder2' className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                </div>
              )
            )
          }

        </div>
      </div>
    </div> 
  )
}

const data = [
  {
    question : 'Q. What causes mental health problems?',
    answer : 'Scientists are still studying how people become mentally ill, so we do not know as much as we would like about how a person develops a mental disorder. There may be genetic causes or inherited vulnerabilities, prenatal care injuries or difficulties, exposure to toxins, or other unknown sources. Poverty, homelessness, overcrowding, stressful living conditions, frequent exposure to violence, abusive parents or severe marital or relationship problems can contribute to the development of a mental illness. There are various types of mental disorders and each one has its causes. click here to know more',
  },
  {
    question : 'Q. Are there cures for mental health problems?',
    answer : 'It is often more realistic and helpful to find out what helps with the issues you face. Talking, counselling, medication, friendships, exercise, good sleep and nutrition, and meaningful occupation can all help. ',
  },
  {
    question : "Q. How do I know if I'm unwell?",
    answer : 'If your beliefs , thoughts , feelings or behaviours have a significant impact on your ability to function in what might be considered a normal or ordinary way, it would be important to seek help. You can take our free mental health test survey and find out. click here!'
  }
]

export default Faq