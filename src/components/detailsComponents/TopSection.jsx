import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TopSection({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      {/* Back Button */}
      <div className="w-fit">
        <Link className="body-text relative group" to="/">
          Back
          <div className="w-0 transition-[width] duration-[400ms] ease-in-out bg-cambridgeBlue h-[2px] group-hover:w-full mt-[-4px]" />
        </Link>
      </div>

      <section className="h-[30vh] flex flex-col justify-between lg:h-[40vh]">
        <h1 className="huge-text font-[700]">{project.title}</h1>
        <div className="flex justify-between flex-col gap-4 md:flex-row md:items-end">
          {/* Tags */}
          <div className="flex flex-col gap-y-4 body-text">
            <p className="text-darkGray">Skills</p>
            <div className="flex gap-6 flex-wrap">
              {project.tags.map((tag) => (
                <div
                  className="px-4 sm:px-5 py-1 sm:py-2 border-[1px] border-white rounded-full"
                  key={tag}
                >
                  <p className="small-text">{tag}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="flex gap-x-10">
            {/* GitHub */}
            <div className="flex flex-col">
              <p className="text-darkGray body-text">See all code</p>
              <a
                href=""
                target="blank"
                className="body-text relative group w-fit"
              >
                GitHub
                <div className="w-0 transition-[width] duration-[400ms] ease-in-out bg-cambridgeBlue h-[2px] mt-[-4px] group-hover:w-full" />
              </a>
            </div>

            {/* Link */}
            {project.projectLink ? (
              <div className="flex flex-col">
                <p className="text-darkGray body-text">Visit page</p>
                <a
                  href={project.projectLink}
                  target="blank"
                  className="body-text relative group"
                >
                  {project.projectLinkText}
                  <div className="w-0 transition-[width] duration-[400ms] ease-in-out bg-cambridgeBlue h-[2px] mt-[-4px] group-hover:w-full" />
                </a>
              </div>
            ) : (
              <></>
            )}
          </section>
        </div>
      </section>
    </motion.div>
  );
}
