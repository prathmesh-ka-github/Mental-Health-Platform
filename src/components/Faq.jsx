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
      <div className='flex justify-center mt-10 h-[60%] w-[90vw]'>   
        <div className='lg:w-[70vw] mobile:w-[100vw]'>   
            <div className='mobile:px-4 lg:px-8 '>     
                <div id='blueborder'className='flex w-[100%] justify-between txt-light mobile:text-[25px] lg:text-[50px] mobile:p-2 lg:p-6 cursor-pointer'>  
                  <h1>Question 1</h1>
                  <span>-</span>
                </div>
                <div id='blueborder2' className='content show'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt nostrum facilis asperiores dignissimos nobis adipisci quasi quas, numquam, reiciendis quod aut. Repellendus esse tempora dolorem velit, obcaecati dicta deserunt?</div>
            </div>
          {data.map((item, i) => (
              <div className='mobile:px-4 lg:px-8 '>     
                <div id='blueborder' onClick={() => toggle(i)} className='flex w-[100%] justify-between txt-light mobile:text-[25px] lg:text-[50px] mobile:p-2 lg:p-6 cursor-pointer'>  
                  <h1>{item.question}</h1>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div id='blueborder2' className={selected === i ? 'content show' : 'content'}>{item.answer}</div>

              </div>
          ))}

        </div>
      </div>
    </div> 
  )
}

const data = [
  {
    question : 'Question 2',
    answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt nostrum facilis asperiores dignissimos nobis adipisci quasi quas, numquam, reiciendis quod aut. Repellendus esse tempora dolorem velit, obcaecati dicta deserunt?',
  },
  {
    question : 'Question 3',
    answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt nostrum facilis asperiores dignissimos nobis adipisci quasi quas, numquam, reiciendis quod aut. Repellendus esse tempora dolorem velit, obcaecati dicta deserunt? ',
  },
  {
    question : 'Question 4',
    answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt nostrum facilis asperiores dignissimos nobis adipisci quasi quas, numquam, reiciendis quod aut. Repellendus esse tempora dolorem velit, obcaecati dicta deserunt?'
  }
]



export default Faq