import { motion } from "framer-motion";

export default function Video({ video }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {video ? (
        <video src={video} autoPlay loop muted className="rounded-3xl w-full" />
      ) : (
        <></>
      )}
    </motion.div>
  );
}
