import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../assets/data/data'

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const info = DATA.find((element) => element.id === parseInt(id, 10))

  if (!info) {
    return (
      <div className="min-h-screen bg-slate-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl mb-4">Page Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen -mt-8 bg-gray-100 py-8">
      <div className="relative mb-8 lg:mb-14">
        <div className="h-48 w-full">
          <img src={info.Img} alt="Project Image" className="h-full w-full object-cover rounded-b-2xl" />
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center text-white bg-black bg-opacity-50 hover:bg-opacity-75 px-4 py-2 rounded-full transition-colors"
          aria-label="Go back to previous page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Get Back 
        </button>
      </div>
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-40">
          <FadeInWhenVisible>
            <div>
              <h1 className="text-4xl font-bold mb-4">{info.title}</h1>
              <p className="text-lg mb-6">{info.desc}</p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="space-y-4">
              <div>
                <h2 className="font-bold">Production:</h2>
                <p>{info.production}</p>
              </div>
              <div>
                <h2 className="font-bold">Directed by:</h2>
                <p>{info.director}</p>
              </div>
              <div>
                <h2 className="font-bold">Cinematographer:</h2>
                <p>{info.cinematographer}</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <div className='py-5'>
            <video src={info.Vid} controls loop muted className="w-full rounded-md"></video>
          </div>
        </FadeInWhenVisible>
     
      </div>
    </section>
  )
}