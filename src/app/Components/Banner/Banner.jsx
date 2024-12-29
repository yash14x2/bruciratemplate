import React from 'react'
import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'


const OpenSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '600'
})
const myFont = localFont({
  src: '../../../../public/Fonts/TWKEverett-Medium.otf',
  display: 'swap',
})
export const Banner = () => {
  return (
    <div className={`container ${myFont.className} pt-[36px] relative`}>
      <div className='w-[1046px] h-[368px] text-[104px]'>
        <div className='leading-[112px]'>WE ARE A </div>
        <div className='flex gap-[28px] leading-[112px]'>
          GLOBAL  <span className='text-[#EF001C] leading-[112px]'>PRODUCTION</span>
        </div>

        <div>AGENCY</div>

      </div>
      <div className='h-[164px] mt-[48px]'>
        <div className={`${OpenSans.className} `}>
          <p className='leading-[32px] w-[725px] h-[64px] text-[24px] tracking-[-1px] '>Designed with the specific needs of large B2B enterprises in mind, our platform offers a comprehensive solution to simplify.</p>
        </div>
        <div className='mt-[60px] flex'>
          <button className="bg-[#EF001C] rounded-[34px] h-[60px] w-[377px] py-[20px] px-[32px] text-[#FFFFFF] flex gap-[10px] items-center leading-[20px] text-[16px] justify-center">Get professional video services   <Image
            src="/images/Logo/sidearrow.svg"
            width={19}
            height={19}
            quality={80}
            loading={"eager"}

            alt="Picture of the author"
          /></button>

          <div className='flex items-center pl-[20px] gap-[10px]'>
            <Image
              src="/images/Logo/aunty.png"
              width={84}
              height={44}
              quality={80}
              loading={"eager"}

              alt="Picture of the author"
            />
            <div className=' flex flex-col'>
              <span>Marin / Ayesha</span>

              <span className='text-[#11101099]'>Global Services</span>
            </div>




          </div>

       





        </div>

      </div>
      <div className='absolute left-[70%] bottom-[0]'>
      <Image
            src="/images/Logo/bannerreel.png"
            width={256}
            height={138}
            
            quality={80}
            loading={"eager"}

            alt="Picture of the author"
          />
        </div>

    </div>
  )
}
