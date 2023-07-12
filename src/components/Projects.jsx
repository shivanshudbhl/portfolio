import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'

import ecom_thumbnail from '../assets/ecom_thumbnail.png'
import notehub_thumbnail from '../assets/notehub_thumbnail.png'
import secrets_thumbnail from '../assets/secrets_thumbnail.png'

const slides = [
  {
    id: 0,
    imageSrc: ecom_thumbnail,
    projectName: 'Best Online Shop',
    projectLink: 'https://frontend-vffp.onrender.com/',
    projectDescription:
      'A Fully Funtional E-commerce webstie created from scratch. The user can search through various products in various categories and make payment through Paypal.The admin can control orders, see real time chart analytics.',
    githubLink: 'https://github.com/shivanshudbhl/ecomm',
  },
  {
    id: 1,
    imageSrc: notehub_thumbnail,
    projectName: 'NoteHub',
    projectLink: 'https://8qcwx.csb.app/',
    projectDescription:
      'A Very sophisticated note keeping app ready to make our daily life easier',
    githubLink: 'https://github.com/shivanshudbhl/notehub',
  },
  {
    id: 2,
    imageSrc: secrets_thumbnail,
    projectName: 'Secrets',
    projectLink: '#',
    projectDescription:
      'A kind of social media app where users can post their thoughts without revealing their identity to all others',
    githubLink: 'https://github.com/shivanshudbhl/Secrets',
  },
  
]

const Projects = () => {
  const Card = ({
    imageSrc,
    projectName,
    projectLink,
    projectDescription,
    githubLink,
  }) => {
    return (
      <div className='border-4 w-full glass-background rounded-lg overflow-hidden flex flex-col'>
        <div className='w-full'>
          <a target="_blank" rel="noopener" href={projectLink} className='block w-full h-full'>
            <img
              src={imageSrc}
              alt={projectName}
              className='w-full object-cover cursor-pointer flex-shrink'
            />
          </a>
        </div>
        <div className='text-white flex flex-col justify-start items-center h-[40%] mx-1 my-1'>
          <h2 className='text-center font-bold my-3'> {projectName}</h2>
          <p className='text-center mb-5'>{projectDescription}</p>
          <div className='flex justify-center mb-1'>
            <a target="_blank" rel="noopener" href={githubLink}>
              <img
                src='https://img.icons8.com/material-outlined/24/61dbfb/github.png'
                alt='github link'
                className='w-10 h-10 hover-glowing-shadow-and-scale rounded-full'
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <section className=' relative w-screen h-full '>
      <div className='w-full h-screen flex flex-col justify-center items-center text-white z-10'>
        <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center'>
          Portfolio
          <span className=' light-blue-text font-semibold '> Pro</span>
          jects
        </h1>
        <p className='mt-5'>Swipe or drag the items</p>
        <div className='w-full h-screen sm:w-3/4 lg:w-1/2 xl:w-1/3 my-10 '>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            // Responsive breakpoints
            breakpoints={{
              // when window width is >=
              1: {
                slidesPerView: 1.3,
                spaceBetween: 120,
              },
              400: {
                slidesPerView: 1.3,
                spaceBetween: 200,
              },
              1024: {
                slidesPerView: 1.3,
                spaceBetween: 175,
              },
              1280: {
                slidesPerView: 1.5,
                spaceBetween: 150,
              },
              1580: {
                slidesPerView: 1.5,
                spaceBetween: 175,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 3,
              slideShadows: true,
            }}
            autoHeight={true}
            resizeObserver={true}
            modules={[EffectCoverflow, Autoplay]}>
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card
                  imageSrc={slide.imageSrc}
                  projectName={slide.projectName}
                  projectLink={slide.projectLink}
                  projectDescription={slide.projectDescription}
                  githubLink={slide.githubLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Projects
