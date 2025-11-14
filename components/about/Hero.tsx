import Image from "next/image"

const Hero = () => {
  return (
    <div>
        <Image
            src = '/images/about-all.jpg'
            width={1200}
            height={800}
            alt="The team"
            className="w-[98%] mx-auto mb-20"
        />
    </div>
  )
}

export default Hero