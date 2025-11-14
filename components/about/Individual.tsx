import data from '../about.db.js'
import Image from 'next/image.js'


const Individual = () => {
  return (
    <div className='flex flex-col w-[95%] mx-auto'>
        <h1 className='text-primary text-center mb-8'>Meet the team</h1>
        {data.map((data)=>(
            <div className='flex mb-20' key={data.id}>
                <div className='w-1/2 text-light text-xs'>
                    <h1 className='text-center bg-linear-to-r from-primary to-dark'>{data.name}</h1>
                    <p>{data.age}</p>
                    <p>{data.education}</p>
                    <p>{data.insights}</p>
                </div>
                <div className='w-1/2'>
                    <Image
                        src = {data.imageUrl}
                        height={800}                       
                        width={800}
                        alt={data.name}
                        className='rounded 60 h-full'
                    />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Individual