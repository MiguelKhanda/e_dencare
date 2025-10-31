import Image from "next/image"


const About = () => {
  return (
    <div className="h-[60vh] flex flex-col  items-center mb-20">
      <Image 
      alt="background"
       src='images/about-bg.svg'
       width={40}
       height={40}
       className="w-full -z-10 absolute opacity-50 object-cover h-2/3 mt-20"
      />
      <h1 className="text-primary text-2xl text-center mt-8">About Us</h1>
      <div className="text-black w-[90%] mx-auto mt-8 tracking-wide">
        <p>
          EdenCare Consultants is a premier consulting firm that delivers comprehensive and innovative solutions
          across multiple sectors.
        </p>
        <p>
          Our team comprises seasoned experts with extensive experience in research,
          policy analysis, community engagement, environmental assessments, soil and water conservation and
          sustainable development.
        </p>
        <p>
          We strive to empower communities, influence policy, and promote sustainable
          practices through our tailored services.
        </p>
      </div>
    </div>
  )
}

export default About