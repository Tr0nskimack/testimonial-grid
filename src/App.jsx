import React from "react";

const App = () => {
  return (
    <div className="bg-light_grayish_blue container mx-auto w-[1440px] h-screen flex space-x-10 justify-center items-center">
      <div className="flex flex-col">
        {/* containers 1*/}
        <div className=" flex space-x-10">
          {" "}
          {/* 1ra fila mnorado gris */}
          {/* card morado */}
          <div className="">
            <div className="w-[540px] h-[280px] bg-moderate_violet rounded-md px-7 pt-5 shadow-xl">
              <div className="flex items-center px-3 gap-4 leading-4">
                <header>
                  <img
                    src="image-daniel.jpg"
                    className="rounded-full w-[30px] border-[2px] border-purple-500"
                    alt=""
                  />
                </header>
                <div>
                  <h1 className="text-white text-[13px]">Daniel Cliford</h1>
                  <p className="text-[12px]  text-light_gray">
                    Virified Graduate
                  </p>
                </div>
              </div>
              {/* content */}
              <div>
                <p className="text-white mt-2 px-3 font-semibold text-[19px]">
                  I received a job offer mid-course, and the subjects I learned
                  were current, if not more so, in the company I joined. I
                  honestly feel I got every penny's worth.
                </p>
                <p className="text-light_gray mt-3 px-3 text-[13px]">
                  "I was an EMT for many years before I joined the bootcamp.
                  I've been looking to make a transition and have heard some
                  people who had an amazing experience here. I signed up for the
                  free into course and found itincredibly fun! I enrrolled
                  shortly thereafter. The next 12 weeks was the best - and most
                  grueling - time of my life. Since completing the course. I've
                  successfully switched careers, working as a Software Engineer
                  at a VR startup."
                </p>
              </div>
            </div>
          </div>
          {/* card gris */}
          <div className="">
            <div className="w-[250px] h-[280px] bg-very_dark_gray rounded-md px-5 pt-5 shadow-xl">
              <div>
                <div className="flex items-center px-3 gap-4 leading-4">
                  <header>
                    <img
                      src="image-jonathan.jpg"
                      className="rounded-full w-[30px]"
                      alt=""
                    />
                  </header>
                  <div>
                    <h1 className="text-white text-[13px]">Jonathan Walters</h1>
                    <p className="text-[12px]  text-light_gray">
                      Virified Graduate
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-white mt-2 px-3 font-semibold text-[19px]">
                    The team was very supportive and kept me motivated
                  </p>
                  <p className="text-light_gray mt-3 px-3 text-[13px]">
                    "I started as a total nwebie with virtually no coding
                    skills. I now work as a mobile engineer for a big company.
                    This was one of the best investments I've mande in myself"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* containers 2*/}
        <div className=" flex mt-10 space-x-10  ">
          {/* card blanca */}
          <div className="">
            <div className="w-[250px] h-[280px] bg-white rounded-md p-7 shadow-xl">
              <div>
                <div className="flex items-center px-3 gap-4 leading-4">
                  <header>
                    <img
                      src="image-jeanette.jpg"
                      className="rounded-full w-[30px]"
                      alt=""
                    />
                  </header>
                  <div>
                    <h1 className="text-very_dark_gray text-[13px]">
                      Jeanette Harmon
                    </h1>
                    <p className="text-[12px]  text-light_gray">
                      Virified Graduate
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-very_dark_black mt-2 px-3 font-semibold text-[19px] leading-6">
                    An overall winderful and rewarding experience
                  </p>
                  <p className="text-text-very_dark_gray mt-3 px-2 text-[13px]">
                    "Thank you for the wonderful experience! I how have a job I
                    really enjoy, and make a good livind while doing something I
                    love"
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card morada */}
          <div className="">
            <div className="w-[540px] h-[280px] bg-very_dark_black rounded-md px-7 pt-5 shadow-xl">
              <div className="flex items-center px-3 gap-4 leading-4">
                <header>
                  <img
                    src="image-patrick.jpg"
                    className="rounded-full w-[30px] border-[2px] border-purple-500"
                    alt=""
                  />
                </header>
                <div>
                  <h1 className="text-white text-[13px]">Patrick Abrams</h1>
                  <p className="text-[12px]  text-light_gray">
                    Virified Graduate
                  </p>
                </div>
              </div>
              {/* content */}
              <div>
                <p className="text-white mt-2 px-3 font-semibold text-[19px]">
                  Awesome teaching support from TAs who did the bootcamp
                  themselves. Getting guidance from them and learning from their
                  experiences was easy.
                </p>
                <p className="text-light_gray mt-3 px-3 text-[13px]">
                  "The staff seem genuinely concerned about my progress which I
                  find really refreshing. The program gave me the confidence
                  neccessary to be able to go out in the world and present
                  myself as a capable junior developer. The standard is above
                  the rest. You will get the personal attention you need from ad
                  incredible community of smart and amazing people"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* aside */}
      <div className="">
        <div className="w-[250px] h-[600px] bg-white rounded-md p-5 shadow-xl">
          <div>
            <div className="flex items-center px-3 gap-4 leading-4">
              <header>
                <img
                  src="image-kira.jpg"
                  className="rounded-full w-[30px]"
                  alt=""
                />
              </header>
              <div>
                <h1 className="text-very_dark_gray text-[13px]">
                  Jeanette Harmon
                </h1>
                <p className="text-[12px]  text-light_gray">
                  Virified Graduate
                </p>
              </div>
            </div>
            <div>
              <p className="text-very_dark_black mt-2 px-3 font-semibold text-[19px] leading-6">
                Such a life-changing experience. Highly recommended"
              </p>
              <p className="text-text-very_dark_gray mt-3 px-2 text-[13px]">
                "Before joining the bootcamp, I´ve never written a line of code.
                I needed some structure from professionals who can help me learn
                programming step by step. I was encouraged to enroll by a former
                student of theirs who can only say wonderful things about the
                program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. it took my learning to the next level in a way that
                no tutorial could ever have. In fact, I've often referred to it
                during interviews as an example of my developent experience. It
                certainly helped me land a jov as a full-stack developer after
                receiving multiple offers. 100% recommend!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
