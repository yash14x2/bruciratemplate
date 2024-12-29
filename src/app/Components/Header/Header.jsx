import React from 'react';
import Image from 'next/image'
import "./Header.scss"
import Link from 'next/link';
import { Open_Sans } from 'next/font/google'

const OpenSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight:'600'
  })

export const Header = () => {
    return (
        <div className="border-b border-[#0000001A] ">
        <div className='container'>
            <div className='navparent flex justify-between mt-[22px] mb-[26px] '>
                <div className='logo'>
                    <Image
                        src="/images/Logo/Logo.png"
                        width={209}
                        height={38}
                        quality={80}
                        loading={"eager"}

                        alt="Picture of the author"
                    />
                </div>
                <div className='options'>
                    <ul className={`flex gap-x-10 items-center ${OpenSans.className}`}>
                        <li className='flex items-center gap-[10px] text-[#111010] opacity-60'>
                        <Link href="/">SERVICES</Link>
                        <Image
                        src="/images/Logo/up.svg"
                        width={7}
                        height={7}
                        quality={80}
                        loading={"eager"}

                        alt="Picture of the author"
                    />

                          
                        </li>
                        <li className='flex items-center gap-[10px] text-[#111010] opacity-40'>
                        <Link href="/">WORK</Link>
                        <Image
                        src="/images/Logo/up.svg"
                        width={7}
                        height={7}
                        quality={80}
                        loading={"eager"}

                        alt="Picture of the author"
                    />
                           
                        </li>
                        <li className={`flex items-center gap-[10px] text-[#111010]`} >
                        <Link href="/">ABOUT</Link>
                        <Image
                        src="/images/Logo/down.svg"
                        width={7}
                        height={7}
                        quality={80}
                        loading={"eager"}

                        alt="Picture of the author"
                    />
                            
                        </li>
                        <button className='bg-[#EF001C] rounded-[32px] text-[14px] text-[white] px-[16px] py-[10px]'>GET STARTED</button>
                       
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}
