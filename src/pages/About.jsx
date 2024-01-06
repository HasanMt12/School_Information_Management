import logo from '../assets/logo.svg'

const About = () => {
  return (
    <div className="min-h-screen py-2">
      <img src={logo} alt="logo" className=' mx-auto w-40'></img>
      <div className="lg:px-12 md:px-8 px-4">

       
<h2 className="md:text-2xl md:text-start text-center md:my-4 my-2 text-lg text-[#1EB2A6] font-bold">Welcome to [School Name]</h2>
<p className="lg:text-lg md:text-md text-sm text-gray-600 ">
At [School Name], we believe in fostering a nurturing environment where learning goes beyond the textbooks, and students are encouraged to explore, question, and grow. Established with a vision to provide holistic education, our institution stands as a beacon of excellence in the realm of academia and character development.
</p>
<h2 className="md:text-2xl md:text-start text-center md:my-4 my-2 text-lg text-[#1EB2A6] font-bold">Academic Excellence</h2>
<p className="lg:text-lg md:text-md text-sm text-gray-600 ">
We uphold a rigorous academic curriculum that not only meets but exceeds global standards. Our passionate and qualified teachers are committed to equipping students with the knowledge and skills needed to excel academically and thrive in their future pursuits.
</p>
<h2 className="md:text-2xl md:text-start text-center md:my-4 my-2 text-lg text-[#1EB2A6] font-bold">Character Development

</h2>
<p className="lg:text-lg md:text-md text-sm text-gray-600 ">
Education at [School Name] goes beyond the classroom. We place a strong emphasis on character development, instilling values such as respect, responsibility, and resilience. Our students not only achieve academic success but also develop into well-rounded individuals poised for success in any endeavor they pursue.


</p>

 </div>
      </div>
  )
}

export default About
