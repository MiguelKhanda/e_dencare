import data from '../about.db.js'
import Image from 'next/image.js'


const Individual = () => {
  return (
    <div className='flex flex-col w-[95%] mx-auto'>
        <h1 className='text-primary text-center pb-8 md:text-4xl text-xl'>Meet the team</h1>
        {data.map((data)=>(
            <div className='flex-col mb-20 md:flex-row' key={data.id}>
                <div className='w-1/2 items-center flex mx-auto'>
                    <Image
                        src = {data.imageUrl}
                        height={1200}                       
                        width={1200}
                        alt={data.name}
                        className='rounded-full md:rounded-full 60 h-50 w-50'
                    />
                </div>
                <div className='w-4/5 bg-linear-to-r  from-secondary to-primary text-transparent bg-clip-text text-xs mx-auto'>
                    <h1 className='bg-linear-to-r from-primary to-dark text-transparent bg-clip-text md:text-3xl text-xl text-center mt-4'>{data.name}</h1>
                    <p className='text-center md:text-2xl text-lg'>Education:<br/> <span className='md:text-xl tracking-light text-sm'>{data.education}</span></p>
                    <p className='md:text-xl text-lg text-center'>Insights: <br/><span className=',d:text-xl text-sm tracking-light'>{data.insights}</span></p>
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default Individual