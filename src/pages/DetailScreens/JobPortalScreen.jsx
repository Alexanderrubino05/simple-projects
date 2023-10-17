import TopSection from "../../components/detailsComponents/TopSection";
import ImageGridSection from "../../components/detailsComponents/ImageGridSection";
import CodeSnipptet from "../../components/detailsComponents/CodeSnippet";
import MediumLink from "../../components/detailsComponents/MediumLink";
import { Projects } from "../../../utils/data";

export default function DnDScreen() {
  const project = Projects[2]; //Change this to match

  return (
    <main className="px-8 pb-12 pt-20 text-white flex flex-col gap-y-8">
      <TopSection project={project} />
      <ImageGridSection images={project.images} video={project.video} />

      <div className="flex flex-col justify-between pt-20 gap-4 md:flex-row md:items-end">
        <h1 className="headline-text font-[700]">
          A bit of code from this project
        </h1>
        <MediumLink link={project.mediumLink} />
      </div>

      {/* Understanding searchParams */}
      <h1 className="subheadline-text">Understanding searchParams</h1>
      <p className="body-text">Comming soon</p>
    </main>
  );
}
