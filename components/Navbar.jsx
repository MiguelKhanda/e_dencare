
import Image from 'next/image'
import {IoMenu} from 'react-icons/io5'
const Navbar = () => {
  return (
    <nav className='fixed flex w-full bg-primary items-center justify-between  px-4 py-4 backdrop-blur-md opacity-70 top-0 left-0 border-b-2 border-light'>
        <Image
            src='/images/logo_cut.jpg'
            alt='EdenCare logo'
            width={60}
            height={70}
            priority
            className='opacity-100 w-20'
        />
        <div className="menu px-1 bg-accent">
            <IoMenu
                className='text-2xl text-light opacity-65' 
            />
        </div>

    </nav>
  )
}

export default Navbar