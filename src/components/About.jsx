import React from "react";
import Typewriter from "./Typewriter";

import Carousel from "./Carousel";
import imdb from '../assets/img/about/imdb.png'
import {  Mail,Phone} from "lucide-react";
export default function About() {

  return (
    <>
      <section className="bg-base-200">
        <div className="grid lg:gap-8 lg:grid-cols-12 lg:py-10 max-w-screen-xl mx-auto px-4 py-8 xl:gap-0">
          <div className="lg:col-span-7 mr-auto place-self-center">
            <Typewriter />
            <p className="text-gray-500 dark:text-gray-400 font-light lg:mb-8 lg:text-2xl max-w-2xl mb-6 md:text-xl">
              Every frame tells a story, and my lens captures the soul of each
              narrative. With a focus on the interplay of light, shadow, and
              movement, I aim to evoke emotion, shape atmospheres, and bring
              every vision to life.
            </p>
            <p>Find Me On : </p>
            <div className="flex p-4 space-x-14">
            <div className="pt-5 space-y-6">
              <div className="flex gap-4 items-center">
                <div className="flex bg-blue-600/30 h-10 justify-center rounded-lg w-10 items-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-normal">+91 9004064315</span>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex bg-blue-600/30 h-10 justify-center rounded-lg w-10 items-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-normal">vickky20j@gmail.com</span>
              </div>
            </div>
            <div>
              <a href="https://www.imdb.com/name/nm12972853/?ref_=ext_shr" target="_blank"><img src={imdb} className="hover:scale-110" alt="" height={120} width={120}/></a>
            </div>
            </div>

          </div>
          <div className="rounded-xl lg:col-span-5 lg:mt-0 mt-4 overflow-hidden">
            <Carousel />
          </div>
        </div>
      </section>
      <section className="bg-base-200">
        <div className="grid lg:gap-6 lg:grid-cols-12 lg:py-16 max-w-screen-xl mx-auto px-4 py-5 xl:gap-0">
          <div className="lg:col-span-7 mr-auto place-self-center">
            <h2 className="text-2xl text-gray-200 dark:text-gray-300 font-semibold lg:mb-2 lg:text-2xl md:text-lg">
              About Me :
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light lg:mb-8 lg:text-xl max-w-2xl mb-6 md:text-lg">
              Vivek Dubey is an cinematographer whose work spans commercials,
              music videos, web series, and feature films. Over the years, he
              has collaborated with a diverse range of directors and production
              houses, bringing a distinctive visual flair to each project.
            </p>
            <p className="text-gray-500 dark:text-gray-400 font-light lg:mb-8 lg:text-xl max-w-2xl mb-6 md:text-lg">
              Vivek’s approach to cinematography balances creative
              experimentation with narrative clarity. Whether he is shooting
              large-scale commercials or intimate, character-driven stories, he
              focuses on using camera movement and lighting to enhance mood and
              emotion.
            </p>
          </div>
          <div className="rounded-xl lg:col-span-5 lg:mt-0 mt-4 overflow-hidden">
            <h3 className="text-gray-300 text-xl font-semibold mb-2">
              Key Projects :
            </h3>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 font-light lg:mb-8 lg:text-xl max-w-2xl mb-6 md:text-lg">
              <li>Commercials: Lodha Crown, VoltasBeko</li>
              <li>Music Videos: “Kalank,” “Payroll,”</li>
              <li>Short Films: Jansankhya, Mutton Paya</li>
              <li>Feature Films: EAGLE (Telugu), Zolzaal (Marathi)</li>
              <li>Web Series: The Gone Game 2, Pin Drop Silence</li>
            </ul>
            <h3 className="text-gray-200 text-xl dark:text-gray-300 font-semibold lg:mb-2 lg:text-xl md:text-lg">
              Cinematography Approach :
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-light lg:mb-8 lg:text-xl max-w-2xl mb-6 md:text-lg">
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
