import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectsCard({ project, reversed }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "10%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-white rounded-3xl grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 overflow-hidden"
    >
      {/* Left Colloumn */}
      <section className="p-8 flex flex-col justify-between">
        <div className="flex flex-col gap-y-4">
          <h1 className="headline-text uppercase font-[700]">
            {project.title}
          </h1>

          <div className="flex gap-4 flex-wrap">
            {project.tags.map((tag) => (
              <div
                className="px-4 sm:px-5 py-1 sm:py-2 border-2 border-dark rounded-full"
                key={tag}
              >
                <p className="small-text">{tag}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-3 md:gap-y-8">
          <div>
            <p className="body-text">{project.description}</p>
          </div>

          <Link
            className="px-4 lg:px-5 py-1 lg:py-2 border-2 border-dark rounded-full w-fit transition-colors relative z-10 overflow-hidden group"
            to={project.path}
          >
            <div className="bg-cambridgeBlue absolute left-0 top-0 bottom-0 right-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms]" />
            <p className="relative small-text">SEE CASE STUDY -&gt;</p>
          </Link>
        </div>
      </section>

      {/* Right Coloumn/Image */}
      <div
        className={`${
          reversed ? "lg:order-[-1]" : ""
        } w-full h-full overflow-hidden`}
      >
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <img
            src={project.images[0]}
            alt="img"
            className="object-cover h-full w-full hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
