import { motion } from "framer-motion";

export default function Image({ image }) {
  return (
    <div className="w-full h-full overflow-hidden rounded-3xl">
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="h-full w-full"
      >
        <img
          src={image}
          className="w-full h-full hover:scale-105 transition-transform duration-500 ease-in-out object-cover"
          alt="img"
          key={image}
        />
      </motion.div>
    </div>
  );
}
