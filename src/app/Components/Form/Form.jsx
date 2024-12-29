import React from 'react';
import Image from 'next/image'

const Form = () => {
    return (
        <div className="container mt-[120px] bg-[#F1F2F6]">
              <div className='boxContainer flex gap-[21%] items-cente '>
            <div className='max-w-[580px] mt-[80px]'>
                <p className='text-[64px] text-[#111010] font-medium leading-[68px]'>LETS START SOMETHING <span className='text-[#EF001C] block'>NEW</span> TOGETHER</p>
                <div className='flex mt-16'>
                    <div className='border-l-[1px] border-[#21272A26] px-6 py-2'>
                        <img src="/images/Logo/form1.png" alt="img" className='w-[70px] h-[70px] rounded-full mb-6' />
                        <p className='text-[13px] text-[#1E1F1FB2] leading-5 mb-6'>All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.</p>
                        <p className='text-[#1E1F1F] leading-5 text-sm font-medium'>Milly Cyrus, Global Lead</p>
                    </div>
                    <div className='border-l-[1px] border-[#21272A26] px-6 py-2'>
                        <img src="/images/Logo/form2.png" alt="img" className='w-[70px] h-[70px] rounded-full mb-6' />
                        <p className='text-[13px] text-[#1E1F1FB2] leading-5 mb-6'>All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.</p>
                        <p className='text-[#1E1F1F] leading-5 text-sm font-medium'>Vinita Singh, Asst. Global Lead</p>
                    </div>
                </div>
            </div>
            <div className='max-w-[468px] mt-[130px]'>
                <p className='text-[#111010] font-semibold text-2xl leading-[26px] mb-7'>Give us few details and we’ll get in touch</p>
                <input type="text" placeholder='Name*' className='outline-none border-b-2 pb-3 w-full mb-8 bg-[#F1F2F6]' />
                <input type="text" placeholder='Company name' className='outline-none border-b-2 pb-3 w-full mb-8 bg-[#F1F2F6]' />
                <input type="text" placeholder='Email*' className='outline-none border-b-2 pb-3 w-full mb-8 bg-[#F1F2F6]' />
                <input type="text" placeholder='Phone no*' className='outline-none border-b-2 pb-3 w-full mb-8 bg-[#F1F2F6]' />
                <input type="text" placeholder='Message*' className='outline-none border-b-2 pb-3 w-full mb-8 bg-[#F1F2F6]' />
                {/* <button className='bg-[#EF001C] text-white font-bold leading-5 w-full py-5 rounded-[34px]'>CONTACT US</button> */}
                <button className="bg-[#EF001C] rounded-[34px] h-[60px] w-[488px] py-[20px] px-[32px] text-[#FFFFFF] flex gap-[10px] items-center leading-[20px] text-[16px] justify-center">CONTACT US  <Image
                        src="/images/Logo/sidearrow.svg"
                        width={19}
                        height={19}
                        quality={80}
                        loading={"eager"}

                        alt="Picture of the author"
                    /></button>
            </div>
        </div>
            </div>
      
    )
}

export default Form