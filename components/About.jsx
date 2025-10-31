import Image from "next/image"


const About = () => {
  return (
    <div>
      <Image 
       src='images/about-bg.svg'
       width={40}
       height={40}
       className="w-full  mt-6 -z-10 absolute opacity-30 h-[80vh]"
      />
      <h1 className="text-primary text-2xl text-center mt-8">About Us</h1>
      <div className="text-accent w-[90%] mx-auto mt-8 tracking-wide mb-20">
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