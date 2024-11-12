import React from "react";
import image1 from "../assets/travels.jpg";
import image3 from "../assets/recipi.jpg";
import image4 from "../assets/shopping cart.PNG";
import image5 from "../assets/Weather-app.PNG";

// type animation

// motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container mx-auto mt-80">
        <h2 className="text-4xl text-center mb-10">My Projects</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            vlewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 loading-tight text-accent">Travels</h2>
              <a
                className="btn btn-sm"
                href="https://wondrous-cendol-60e70c.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Project
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-3"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={image1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <h2 className="h2 loading-tight text-accent">
                  Travels Website
                </h2>
                <span className="text-3xl text-white">Project title</span>
              </div>
              <div></div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            vlewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 loading-tight text-accent">Shopping Cart</h2>
              <a
                className="btn btn-sm"
                href="https://ecommerce-website-kappa-lime.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Project
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-3"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={image4}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <h2 className="h2 loading-tight text-accent">Shopping Cart</h2>
                <span className="text-3xl text-white">Project title</span>
              </div>
              <div></div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            vlewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 loading-tight text-accent">shop Cart</h2>
              <a
                className="btn btn-sm"
                href="https://shop-cart-taupe-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Project
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-3"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={image3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <h2 className="h2 loading-tight text-accent">shop Cart</h2>
                <span className="text-3xl text-white">Project title</span>
              </div>
              <div></div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            vlewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 loading-tight text-accent">Weather App</h2>
              <a
                className="btn btn-sm"
                href="https://weather-app-wine-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Project
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-3"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={image5}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <h2 className="h2 loading-tight text-accent">Weather App</h2>
                <span className="text-3xl text-white">Project title</span>
              </div>
              <div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
