import React from "react";
import bookReview from "../img/mySites/book review by swdrana.jpg";
import PersonalWallet from "../img/mySites/My Personal Wallet by swdrana.jpg";
import ConventionCenter from "../img/mySites/Convention Center by swdrana.jpg";
import PhoneLookUp from "../img/mySites/Phone Lookup_by_swdrana.jpg";
import eTutor from "../img/mySites/eTutor-by-swdrana.jpg";
import TechHub from "../img/mySites/TechHub-by-swdrana.jpg";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import TechnologyAndTools from "../components/TechnologyAndTools";
const About = () => {
  return (
    <div className=" bg-base-200">
      <div className="hero py-10 lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
          <div className="text-center lg:text-left">
            <h4 className="text-md">Hey! I'm</h4>
            <h4 className="text-4xl">
              <span className="font-bold text-red-600">Masuduzzaman</span>{" "}
            </h4>
            <p className=" text-blue-500 font-bold text-xl tracking-widest ">
              MERN Stack Developer
            </p>
            <hr class=" border-[1px] border-yellow-400" />
            <p className="pt-2 text-justify">
              I am a computer science student at{" "}
              <a href="http://www.njupt.edu.cn/" target="_blank">
                <strong className="hover:underline hover:text-blue-600">
                  Nanjing University Posts & Telecommunication
                </strong>
              </a>{" "}
              in <strong>Nanjing, Jiangsu, China.</strong> My mission this year
              is to be a web developer. I am constantly working hard for this
              and hopefully I will be able to reach my destination. Below you
              can see samples of some of the projects I have done.
            </p>
            {/* Social  */}
            <div className="w-1/2 mx-auto flex justify-evenly my-1">
              <a
                href="https://facebook.com/swdrana"
                className="hover:text-blue-600 "
                target="_blank"
              >
                <FaFacebook size={40} />
              </a>
              <a
                href="https://github.com/swdrana"
                className="hover:text-gray-600 "
                target="_blank"
              >
                <FaGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/swdrana/"
                className="hover:text-blue-500"
                target="_blank"
              >
                <FaLinkedinIn size={40} />
              </a>
              <a
                href="https://www.youtube.com/swdrana"
                className="hover:text-red-600"
                target="_blank"
              >
                <FaYoutube size={40} />
              </a>
              <a
                href="https://twitter.com/swdrana"
                className="hover:text-blue-500"
                target="_blank"
              >
                <FaTwitter size={40} />
              </a>
            </div>
            {/* Email  */}
            <div className="flex justify-center mb-2">
              <strong>Email: &nbsp;&nbsp;</strong>
              <a
                href="mailto:codingbengal@gmail.com"
                target="_blank"
                className="hover:underline hover:text-orange-600"
                title="Click me to send email"
              >
                codingbengal@gmail.com
              </a>
            </div>
            {/* Education  */}
            <div class=" flex justify-between ">
              <div>
                <div class="font-bold">BSc in Computer Science Engineering</div>
                <div class="text-sm opacity-50">
                  Nanjing University Posts & Telecommunication
                </div>
                <div class="text-sm opacity-50">Nanjing, Jiangxu, China.</div>
              </div>
              <div>
                <div class="font-bold">
                  Diploma in Telecommunication Engineer
                </div>
                <div class="text-sm opacity-50">
                  Shariatpur Polytechnic Institute.
                </div>
                <div class="text-sm opacity-50">Shariatpur, Bangladesh.</div>
              </div>
            </div>
            <TechnologyAndTools />
            <hr class=" border-[1px] border-yellow-400" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <img
              src="https://swdrana.github.io/personal-portfolio-m1-final/img/swdrana.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <h1 className="text-center text-2xl hover:text-red-500">My Projects</h1>
      <hr class=" border-[1px] w-10/12 mx-auto my-3 border-gray-800 hover:border-red-500" />
      <div className="hero w-full">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-10">
          <a href="https://tech-hub-2217d.web.app/" target="_blank">
            <div class="stack">
              <div class="card shadow-md bg-[#E32227] duration-300  hover:bg-neutral text-primary-content p-5">
                <img src={TechHub} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">Tech Hub</h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#E84B4F] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#ED7377] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a href="https://e-tutor-c21cb.web.app/" target="_blank">
            <div class="stack">
              <div class="card shadow-md bg-[#2BB02B]  duration-300  hover:bg-neutral text-primary-content p-5">
                <img src={eTutor} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">eTutor</h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#3ACF3A] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#5FD85F] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a
            href="https://phone-lookup-by-swdrana.netlify.app/"
            target="_blank"
          >
            <div class="stack">
              <div class="card shadow-md bg-[#3F33BD] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={PhoneLookUp} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">Phone Look Up</h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#5A4FCF] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#7C73D9] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a
            href="https://vigorous-davinci-48064c.netlify.app/"
            target="_blank"
          >
            <div class="stack">
              <div class="card shadow-md bg-[#FFA500] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={ConventionCenter} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">
                    Convention Center
                  </h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#FFB52E] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#FFD68A] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a
            href="https://my-personal-wallet-by-swdrana.netlify.app/"
            target="_blank"
          >
            <div class="stack">
              <div class="card shadow-md bg-[#FF00FF] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={PersonalWallet} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">
                    Personal Wallet
                  </h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#FF2EFF] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#FF5CFF] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
          <a href="https://book-review-swdrana.netlify.app/" target="_blank">
            <div class="stack">
              <div class="card shadow-md bg-[#8F00FF] hover:bg-neutral duration-300 text-primary-content p-5">
                <img src={bookReview} className=" rounded-2xl" alt="" />
                <div class="card-body text-center">
                  <h2 class="font-bold text-2xl text-center">Book Reviews</h2>
                  <p>Click to Live Preview</p>
                </div>
              </div>

              <div class="card shadow bg-[#A32EFF] text-primary-content">
                <div class="card-body"></div>
              </div>
              <div class="card shadow-sm bg-[#B75CFF] text-primary-content">
                <div class="card-body"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
