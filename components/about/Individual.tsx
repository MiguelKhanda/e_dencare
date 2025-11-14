import data from '../about.db.js'
import Image from 'next/image.js'


const Individual = () => {
  return (
    <div className='flex flex-col w-[95%] mx-auto'>
        <h1 className='text-primary text-center pb-10'>Meet the team</h1>
        {data.map((data)=>(
            <div className='flex mb-20' key={data.id}>
                <div className='w-1/2 text-secondary text-xs'>
                    <h1 className='text-center bg-linear-to-r from-primary to-dark'>{data.name}</h1>
                    <p>Age: {data.age}</p>
                    <p>Education: <br/>{data.education}</p>
                    <p>Insights: <br/>{data.insights}</p>
                </div>
                <div className='w-1/2'>
                    <Image
                        src = {data.imageUrl}
                        height={800}                       
                        width={800}
                        alt={data.name}
                        className='rounded 60 h-[95%] my-auto'
                    />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Individual