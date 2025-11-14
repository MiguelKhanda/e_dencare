import Individual from '@/components/about/Individual'
import Hero from '@/components/about/Hero'

const page = () => {
  return (
    <div className='bg-dark'>
        <div className='w-[95%] mx-auto'>
            <h1 className='text-xl bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text text-center pt-4'>More on Us</h1>
            <p className='text-light'>For consultancy purposes, involve us. Meet the exciting team that turns your idea to real world vetures.</p>
        </div>
        <Hero/>
        <Individual/>
    </div>
  )
}

export default page