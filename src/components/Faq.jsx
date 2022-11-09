import React from 'react'

const Faq = () => {
  return (
    <div className='flex justify-center flex-col items-center'>      
      <div className="z-10 font-bold txt-main mt-[10rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col mobile:items-center lg:flex-row">
          Frequently Asked
          <span className="txt-light">&nbsp;Questions</span>
      </div>
      <div>
        <div className="accordion w-[80vw] my-20" id="accordionExample">
          <div className="accordion-item border bg-transparent border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button className="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base bg-transparent txt-light text-left
                border-0
                rounded-none
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4 px-5 txt-light ">
                <strong>This is the first item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item border bg-transparent txt-light border-gray-200">
            <h2 className="accordion-header mb-0" id="headingTwo">
              <button className="
                accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base txt-light text-left bg-transparent
                border-0
                rounded-none
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4 px-5">
                <strong>This is the second item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item border txt-light bg-transparent border-gray-200">
            <h2 className="accordion-header mb-0" id="headingThree">
              <button className="
                accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base txt-light text-left
                bg-transparent
                border-0
                rounded-none
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body py-4 px-5">
                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                our default variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Faq