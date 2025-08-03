import { motion } from "framer-motion";
const DishCard = ({ project }) => {
  return (
    <div>
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="p-4"
      >
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </motion.div>
    </div>
  );
};

export default DishCard;
