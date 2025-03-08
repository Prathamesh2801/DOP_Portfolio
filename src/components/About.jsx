import React from "react";
import Typewriter from "./Typewriter";

import Carousel from "./Carousel";

export default function About() {
  
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <Typewriter />
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-2xl dark:text-gray-400">
              Every frame tells a story, and my lens captures the soul of each
              narrative. With a focus on the interplay of light, shadow, and
              movement, I aim to evoke emotion, shape atmospheres, and bring
              every vision to life.
            </p>
          </div>
          <div className="mt-4 lg:mt-0 lg:col-span-5 overflow-hidden rounded-xl">
            <Carousel />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto lg:gap-6 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="text-2xl font-semibold text-gray-200 lg:mb-2 md:text-lg lg:text-2xl dark:text-gray-300 ">
              About Me :
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Vivek Dubey is an cinematographer whose work spans commercials,
              music videos, web series, and feature films. Over the years, he
              has collaborated with a diverse range of directors and production
              houses, bringing a distinctive visual flair to each project.
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Vivek’s approach to cinematography balances creative
              experimentation with narrative clarity. Whether he is shooting
              large-scale commercials or intimate, character-driven stories, he
              focuses on using camera movement and lighting to enhance mood and
              emotion.
            </p>
          </div>
          <div className="mt-4 lg:mt-0 lg:col-span-5 overflow-hidden rounded-xl">
            <h3 className="text-xl font-semibold text-gray-300  mb-2">
              Key Projects :
            </h3>
            <ul className="list-disc list-inside max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              <li>Commercials: Lodha Crown, VoltasBeko</li>
              <li>Music Videos: “Kalank,” “Payroll,”</li>
              <li>Short Films: Jansankhya, Mutton Paya</li>
              <li>Feature Films: EAGLE (Telugu), Zolzaal (Marathi)</li>
              <li>Web Series: The Gone Game 2, Pin Drop Silence</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-200 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-300 ">
              Cinematography Approach :
            </h3>
            <p className=" max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Vivek focuses on using camera movement and lighting to enhance
              mood and emotion, ensuring every frame reflects the creative
              vision and practical demands of the project.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
