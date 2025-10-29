import Image from 'next/image'
import { useState } from 'react'
import {IoMenu} from 'react-icons/io5'

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick=()=>{
    setIsClicked(!isClicked)
  }
  return (
    <nav className='fixed flex w-full bg-primary items-center justify-between  px-4 py-4 backdrop-blur-md opacity-70 top-0 left-0 border-b-2 border-accent'>
        <Image
            src='/images/logo_cut.jpg'
            alt='EdenCare logo'
            width={60}
            height={70}
            priority
            className='opacity-100 w-20'
        />
        <div className="menu p-2 bg-accent">
            <IoMenu
                className='text-3xl text-light opacity-65' onClick={()=>handleClick()}
            />
        </div>

    </nav>
  )
}

export default Navbar