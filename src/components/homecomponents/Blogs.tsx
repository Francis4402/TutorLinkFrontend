import React from 'react'

const blogcards = [
    {
        "image": "/images/1.jpg",
        "title": "How to book a session with a tutor",
        "date": "March 1, 2025",
        "description": "Meet our fresh batch of tutors ready to rock your learning world! Check them out and book a session today!"
    },
    {
        "image": "/images/1.jpg",
        "title": "How to book a session with a tutor",
        "date": "March 1, 2025",
        "description": "Meet our fresh batch of tutors ready to rock your learning world! Check them out and book a session today!"
    },
    {
        "image": "/images/1.jpg",
        "title": "How to book a session with a tutor",
        "date": "March 1, 2025",
        "description": "Meet our fresh batch of tutors ready to rock your learning world! Check them out and book a session today!"
    },
    {
        "image": "/images/1.jpg",
        "title": "How to book a session with a tutor",
        "date": "March 1, 2025",
        "description": "Meet our fresh batch of tutors ready to rock your learning world! Check them out and book a session today!"
    },
    
]

const Blogs = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='md:text-6xl text-2xl font-semibold'>Latest Updates</h1>
        
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10'>
            {
                blogcards.map((data,index) => {
                    return (
                        <div key={index} className='flex flex-col gap-5 rounded-4xl shadow-2xl'>
                            <div className="bg-amber-400 text-white px-10 py-4 rounded-t-2xl">
                                <h2 className='text-4xl font-bold'>{data.title}</h2>
                                <p className='text-xl font-semibold'>{data.date}</p>
                            </div>

                            <div className="px-8 py-8 w-full flex flex-col gap-10">
                                <p className='text-2xl'>{data.description}</p>
                                <button className="bg-amber-400 hover:bg-amber-500 duration-200 text-white py-4 text-2xl font-semibold rounded-full">
                                    Read More
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Blogs