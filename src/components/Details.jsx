import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DATA } from "../assets/data/data";

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const info = DATA.find((element) => element.id === parseInt(id, 10));

  if (!info) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center">
        <div className="text-center text-copy">
          <h1 className="text-2xl mb-4 font-jersey">Page Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-accent text-copy px-6 py-3 rounded hover:bg-accent/80 transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen -mt-8 bg-bg-main py-8 text-copy">
      <div className="relative mb-8 lg:mb-14">
        <div className="h-48 md:h-64 lg:h-80 w-full">
          <img
            src={info.Img}
            alt="Project Image"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay opacity-50"></div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-1/2 left-8 transform -translate-y-1/2 flex items-center text-copy bg-bg-modal hover:bg-subtle px-6 py-3 rounded-lg transition-colors duration-200"
          aria-label="Go back to previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Get Back
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-40">
          <FadeInWhenVisible>
            <div>
              <h1 className="text-4xl font-jersey mb-6">{info.title}</h1>
              <p className="text-copy-dim text-lg leading-relaxed mb-6">
                {info.desc}
              </p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-jersey mb-2">Production:</h2>
                <p className="text-copy-dim">{info.production}</p>
              </div>
              <div>
                <h2 className="text-lg font-jersey mb-2">Directed by:</h2>
                <p className="text-copy-dim">{info.director}</p>
              </div>
              <div>
                <h2 className="text-lg font-jersey mb-2">Cinematographer:</h2>
                <p className="text-copy-dim">{info.cinematographer}</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <div className="py-10">
            <video
              src={info.Vid}
              controls
              loop
              className="w-full rounded-lg border border-subtle/20"
            ></video>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
