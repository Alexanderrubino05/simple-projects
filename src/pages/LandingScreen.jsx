import { Projects } from "../../utils/data";
import Footer from "../components/Footer";
import ProjectsCard from "../components/ProjectsCard";
import { motion } from "framer-motion";

function LandingScreen() {
  return (
    <main className="px-8 pb-8">
      {/* Landing Page */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="text-white flex flex-col justify-center items-center h-[90vh]"
      >
        <div className="flex flex-col-reverse md:flex-row items-baseline gap-x-3">
          <h1 className="huge-text font-[700]">Simple Projects</h1>
          <h1 className="small-text text-gray-600 self-end">
            Some unpublished
          </h1>
        </div>

        <div className="flex items-baseline gap-x-3 subheadline-text text-cambridgeBlue hover:opacity-50 transition-opacity">
          <h1>By</h1>
          <a
            className="underline underline-offset-4"
            href="https://alexanderrubino.com"
            target="blank"
          >
            Alexander Rubino
          </a>
        </div>
      </motion.div>

      {/* Projects page */}
      <section className="grid grid-flow-row auto-rows-[100vh] md:auto-rows-[85vh] gap-y-20">
        {Projects.toReversed().map((project, index) => (
          <ProjectsCard
            project={project}
            reversed={(index + 1) % 2 === 1 ? true : false}
            key={project.description}
          />
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default LandingScreen;
