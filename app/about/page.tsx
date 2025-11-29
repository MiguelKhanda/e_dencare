import Individual from '@/components/about/Individual'
import Hero from '@/components/about/Hero'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-dark'>
        <div className='w-[95%] mx-auto'>
            <h1 className='text-xl bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text text-center  py-8'>More on Us</h1>
            <p className='text-light text-base text-center'>For consultancy purposes, involve us. Meet the exciting team that turns your idea to real world ventures.</p>
        </div>
        <Hero/>
        <Individual/>
        <div className='flex items-center justify-center pb-10'>
          <Link href ='/' className='p-4 rounded-2xl bg-primary text-secondary'>Home</Link>
        </div>
    </div>
  )
}

export default page