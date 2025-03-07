import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, ChartBar, Lock, Pen, Settings, User, Users } from 'lucide-react'
import Image from 'next/image'


const scoretour = [
  {
    mark: "98.5",
    text: "NPS Score"
  },
  {
    mark: "2,500+",
    text: "Satisfied alumni"
  },
  {
    mark: "400",
    text: "Hours of Recorded Courses"
  },
  {
    mark: "70+",
    text: "Newjoiners weekly"
  }
];


const coursesInfo = [
  {
    icon: <Pen/>,
    title: "Passion",
    description: "Passion fuels our commitment to inspire, teach, and empower you to achieve your dreams.",
  },
  {
    icon: <Users/>,
    title: "Community",
    description: "Join a supportive community where learning thrives, connections grow, and success is shared.",
  },
  {
    icon: <Settings/>,
    title: "Commitment",
    description: "Commitment is our promise to provide unwavering support, quality education, and a path to your success.",
  },
  {
    icon: <ChartBar/>,
    title: "Growth",
    description: "Growth is at the heart of our mission, helping you evolve, learn, and achieve your fullest potential.",
  },
  {
    icon: <Lock/>,
    title: "Honesty",
    description: "Honesty is the foundation of trust, ensuring transparency, integrity, and genuine support in every step of your journey.",
  },
  {
    icon: <User/>,
    title: "Team Work",
    description: "Teamwork brings us together, combining strengths, ideas, and efforts to achieve shared success and excellence.",
  }
];

const About = () => {
  return (
    <div>
      <div className="relative text-white flex flex-col justify-center items-center bg-[url('/images/5.jpg')] bg-center bg-cover w-full h-full">
          <div className="absolute inset-0 bg-blue-950/60"></div>
          <div className='py-32 space-y-4 relative z-10'>
            <h1 className='text-5xl font-semibold font-serif'>About Us</h1>
            <div className='flex gap-2 justify-center items-center'>
              <p className=''>Home</p>
              <p><ArrowRight/></p>
              <p>About</p>
            </div>
          </div>
      </div>

      <div className='container max-w-7xl mx-auto lg:px-0 px-5'>
        <div className='flex md:flex-row flex-col lg:gap-0 gap-10 justify-between items-center py-20'>
          <div className='max-w-xl space-y-5'>
            <p className='font-semibold text-blue-900'>About Us</p>
            
            <h1 className='text-4xl font-serif'>We Offer You a Brighter Future</h1>

            <p>TutorLink helps you achieve your goals faster with personalized learning. Here’s how:

            Expert Tutors: Connect with skilled tutors tailored to your needs.

            Personalized Learning: Get one-on-one guidance for faster progress.

            Flexible Scheduling: Learn at your pace, anytime, anywhere.

            Boost Confidence: Master skills with focused support and feedback.

            Achieve Goals: Whether it’s academics, languages, or career skills, TutorLink helps you succeed.

            Start your journey to a brighter future today with TutorLink!</p>

            <button className='bg-blue-900 hover:bg-blue-800 cursor-pointer duration-200 text-white px-6 py-3 text-sm rounded-full'>Get Started</button>
          </div>

          <div className="md:h-[600px] md:w-[500px] w-full h-full overflow-hidden rounded-2xl">
            <Image 
              src="/images/5.jpg" 
              alt="Description of image" 
              width={800} 
              height={800} 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>

      <div className='container max-w-7xl mx-auto lg:px-0 px-5'>
        <div className='flex md:flex-row flex-col lg:gap-0 gap-10 justify-between items-center py-20'>
          
          <div className="md:h-[600px] md:w-[500px] w-full h-full overflow-hidden rounded-2xl">
            <Image 
              src="/images/5.jpg" 
              alt="Description of image" 
              width={800} 
              height={800} 
              className="object-cover w-full h-full" 
            />
          </div>

          <div className='max-w-xl space-y-5'>
            <p className='font-semibold text-blue-900'>Our Vision</p>
            
            <h1 className='text-4xl font-serif'>Our Amazing Teachers Will Guide You Every Step of the Way</h1>

            <p>Our amazing teachers are dedicated to guiding you every step of the way. With their expertise, patience, and personalized approach, they provide tailored lessons, clear explanations, and constant encouragement to help you overcome challenges and reach your full potential. Whether you&apos;re learning a new skill, improving academically, or pursuing a passion, our teachers are committed to making your journey rewarding and successful. Start learning with confidence today!</p>

            <button className='bg-blue-900 hover:bg-blue-800 cursor-pointer duration-200 text-white px-6 py-3 text-sm rounded-full'>Meet Our Teachers</button>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-3'>
          {
            scoretour.map((data, index) => (
              <div key={index} className='flex flex-col justify-center items-center gap-5 border-r p-10'>
                <h1 className='text-4xl font-semibold'>{data.mark}</h1>
                <p className='text-blue-900'>{data.text}</p>
              </div>
            ))
          }
        </div>

        <div className='max-w-xl space-y-5'>
            <p className='font-semibold text-blue-900'>Our Values</p>
            
            <h1 className='text-4xl font-serif'>Our Amazing Teachers Will Guide You Every Step of the Way</h1>

        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10'>
              {
                coursesInfo.map((course, index) => (
                  <Card key={index}>
                      <CardHeader>
                        <p className='bg-blue-900 text-white p-4 rounded-full w-fit'>{course.icon}</p>
                      </CardHeader>

                      <CardContent>
                        <h1 className='text-2xl font-serif'>{course.title}</h1>
                        <p>{course.description}</p>
                      </CardContent>
                  </Card>
                ))
              }
        </div>
      </div>

    </div>
  )
}

export default About