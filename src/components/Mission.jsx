import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl text-[#F7EBC8]">Our Mission</h2>
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <video
              className="w-full rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              poster={missionImg}
            >
              <source src={mission} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute h-full w-full rounded-3xl bg-black/40"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute max-w-lg px-4 tracking-tighter text-white lg:text-3xl"
          >
            {MISSION.text}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
