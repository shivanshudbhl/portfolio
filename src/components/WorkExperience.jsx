import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/autoplay'

const slides = [
  {
    id: 0,
    jobTitle: 'Mern Stack Developer',
    companyName: 'Desing Innovation Center,UIET',
    datesWorked: ' 7-07-22   5-08-22',
    jobDescription:
      'I developed a fully functional e-commerce app using the MERN stack (MongoDB, Express, React, and Node.js). I was responsible for designing and implementing the frontend user interface using React, developing the backend API using Node.js and Express, implementing a secure checkout process using PayPal, and managing the MongoDB database. The app was built using best practices, and it was well-documented. The app was scalable and could handle a large number of users.',


  },

]

const WorkExperience = () => {
  const Card = ({ jobTitle, companyName, datesWorked, jobDescription }) => {
    return (
      <div className='border-2 w-[98%] glass-background rounded-lg  flex flex-col  glowing-shadow'>
        <div className='text-white flex flex-col justify-start items-center  mx-1 my-5'>
          <h2 className='text-lg text-center mb-5'>{jobTitle}</h2>
          <h3 className='text-lg text-center mb-5'>{companyName}</h3>
          <p className='text-center mb-5'>{datesWorked}</p>
          <p className='text-center mb-5 border-t-2 pt-5'>{jobDescription}</p>
        </div>
      </div>
    )
  }

  return (
    <section className='relative w-screen h-screen overflow-hidden '>
      <div className='w-full h-full flex flex-col justify-center items-center text-white z-10 my-5'>
        <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center mx-1'>
          Work
          <span className=' light-blue-text font-semibold '> Exp</span>
          erience
        </h1>
        <p className='mt-5'>Swipe or drag the items</p>
        <div className='w-[90%] lg:w-1/4 my-10'>
          <Swiper
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            effect={'cube'}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[EffectCube, Autoplay]}
            className='mySwiper'>
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card
                  jobTitle={slide.jobTitle}
                  companyName={slide.companyName}
                  datesWorked={slide.datesWorked}
                  jobDescription={slide.jobDescription}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
