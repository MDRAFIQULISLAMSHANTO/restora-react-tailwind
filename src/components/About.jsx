import about from "../assets/about.jpeg";
import { ABOUT, DISHES } from "../constants";

import { motion } from "framer-motion";

const AboutAndDishes = () => {
  return (
    <div>
      {/* About Section */}
      <section className="container mx-auto mb-8" id="about">
        <motion.h2 
         initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2}}
        className="mb-8 text-center text-[#F7EBC8] text-3xl tracking-tighter lg:text-4xl">
          About Us
        </motion.h2>
        <div className="flex flex-wrap">
          <div className="w-full p-4 lg:w-1/2">
            <motion.img
             initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.5}}
              src={about}
              className="rounded-3xl lg:-rotate-3"
              alt="About"
            />
          </div>
          <div className="w-full px-2 lg:w-1/2">
            <motion.h2 
            initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.4}}
            className="text-4xl tracking-tighter lg:text-6xl">
              {ABOUT.header}
            </motion.h2>
            <motion.div 
            initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.6}}
            className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-roatet-3">

            </motion.div>
            <motion.p 

             initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.6}}
            className="m-8 text-2xl leading-relaxed tracking-tight">{ABOUT.content}</motion.p>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default AboutAndDishes;


