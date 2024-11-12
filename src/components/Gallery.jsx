import React, { useState } from "react";

export default function Gallery() {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full mb-[60px] text-center">
              <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Frames of Expression
              </h2>
              <p className="text-body-color text-base dark:text-dark-6">
                A collection of bold, visually-driven stories that evoke emotion, challenge norms, and transform cinema into art.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-2">
            <div className="w-full">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <PortfolioCard
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="Branding"
            
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="marketing"
            
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="marketing"
             
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="Development"
             
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="Design"
           
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="Marketing"
           
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
}

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
}) => {
  return (
    <div
      className={` px-2 mb-20  md:w-1/2 lg:w-1/3 ${showCard === "all" || showCard === category.toLowerCase() ? "block" : "hidden"} flex justify-center`}
    >
      <div className="overflow-hidden rounded-[10px]">
        <img src={ImageHref} alt="portfolio" className="w-full h-auto max-w-[600px] mx-auto" />
      </div>
    </div>
  );
};
