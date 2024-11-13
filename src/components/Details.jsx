import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DATA } from '../assets/data/data'

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  console.log("Details page for id:", id)
  const info = DATA.find((element) => element.id === parseInt(id))

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
    <section className="min-h-screen bg-gray-100 py-8 ">
        <div className="relative mb-8 lg:mb-14">
          <div className="h-48 w-full">
            <img src={info.Img} alt="Project Image" className="h-full w-full object-cover rounded-md" />
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
      <div className="max-w-5xl mx-auto p-8">
        
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-40">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{info.title}</h1>
            <p className="text-lg mb-6">
             {info.desc}
            </p>
          </div>

          {/* Right Column */}
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
        </div>
        <div className='py-5'>
          <video src={info.Vid} autoPlay loop muted className="w-full rounded-md"></video>
        </div>
      </div>
    </section>
  )
}