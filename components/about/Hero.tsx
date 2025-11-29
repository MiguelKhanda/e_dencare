import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-screen">
        <Image
            src = '/images/about-all.jpg'
            width={1200}
            height={800}
            alt="The team"
            loading="eager"
            className="w-full mx-auto inset-0 h-screen absolute top-0 z-10 object-cover opacity-30 md:object-cover"
        />
    </div>
  )
}

export default Hero