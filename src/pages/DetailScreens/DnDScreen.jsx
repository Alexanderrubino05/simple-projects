import TopSection from "../../components/detailsComponents/TopSection";
import ImageGridSection from "../../components/detailsComponents/ImageGridSection";
import CodeSnipptet from "../../components/detailsComponents/CodeSnippet";
import MediumLink from "../../components/detailsComponents/MediumLink";
import { Projects } from "../../../utils/data";

export default function DnDScreen() {
  const project = Projects[0]; //Change this to match

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
      <p className="body-text">
        Before we look at the code, we first need to understand how we fetch and
        filter our data. Lets look at this example: We want to fetch all of the
        spells has a Ranger class. Therefore, when we click on our filter
        button, we update the URL pathname using searchParams.
      </p>

      <CodeSnipptet
        code='
  import { useRouter } from "next/navigation";
  const router = useRouter();
  
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("class", "ranger");
  
  // Generate the new pathname with the updated search parameters
  const newPathname = `${
    window.location.pathname
  }?${searchParams.toString()}`;
  router.push(newPathname);
      '
      />

      <p className="body-text">
        After the URL has been updated, we can fetch the searchParams and then
        call the api from that information. If you simply call searchParams in
        the Home function, you get all of the searchParams information.
      </p>

      <CodeSnipptet
        code='
  export default async function Home({ searchParams }) {
    let apiURL = `https://api.open5e.com/spells/?spell_lists=${
      searchParams.class || "default-class"
      }`;
  }
      '
      />

      {/* Updating searchParams on sorting action — sortingComponent.jsx */}
      <h1 className="subheadline-text">
        Updating searchParams on sorting action — sortingComponent.jsx
      </h1>
      <p className="body-text">
        Lets look at how we update the searchParams, when the Filter button has
        been clicked. We call the <i>changeSorting()</i> function on click,
        where we look through which sorting values has been changed, and then
        either add or remove them from the searchParams.
      </p>

      <CodeSnipptet
        code='
  import { useRouter } from "next/navigation";
  const router = useRouter();
  
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("class", "ranger");
  
  // Generate the new pathname with the updated search parameters
  const newPathname = `${
    window.location.pathname
  }?${searchParams.toString()}`;
  router.push(newPathname);
      '
      />

      {/* Fetch Data from API — page.jsx */}
      <h1 className="subheadline-text">Fetch Data from API — page.jsx</h1>
      <p className="body-text">
        We have four possible sorting options:
        <br></br>- Class
        <br></br>- Spell Level
        <br></br>- Spell Name
        <br></br>- Sort by Value
        <br></br>
        We simply look through each one of them, to see if any of them are
        activated. The only one which should always be active, is the Sort by
        Value. After we have finalised our apiURL, we simply call it in our
        fetchData function. After we have gotten the data, we simply loop
        through it. And display the SpellCard from it.
      </p>

      <CodeSnipptet
        code='
  import { fetchData } from "@/utils";
  import { SpellCard } from "@/components/spellCard";

  export default async function Home({ searchParams }) {
    let apiURL = `https://api.open5e.com/spells/?sort_by=${
      searchParams.sort_by || "A-Z"
    }`;

    //Change apiURL, depending on searchParams
    if (searchParams.class) apiURL += `&spell_lists=${searchParams.class}`;

    if (searchParams.spell_level)
      apiURL += `&spell_level=${searchParams.spell_level}`;

    if (searchParams.spell_name) apiURL += `&name=${searchParams.spell_name}`;

    const data = await fetchData(apiURL);

    return (
      // .. //
        {data.results ? (
          <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2 xl:grid-cols-3">
            {data.results.map((spell) => (
              <SpellCard key={spell.desc} spell={spell} />
            ))}
          </div>
        ) : (
          <h1>No spells</h1>
        )}
      // .. //
    );
  }
      '
      />

      {/* The fetchData function — /utils/index.js */}
      <h1 className="subheadline-text">
        The fetchData function — /utils/index.js
      </h1>
      <p className="body-text">
        A simple function to make it easier to fetch data, by simply passing in
        the apiURL.
      </p>

      <CodeSnipptet
        code="
  export async function fetchData(url) {
    // Set the required headers for the API request
    const response = await fetch(url);

    // Parse the response as JSON
    const result = await response.json();

    return result;
  }
      "
      />

      {/* Bug talk — Page scrolles to top on searchParams change. */}
      <h1 className="subheadline-text">
        Bug talk — Page scrolles to top on searchParams change.
      </h1>
      <p className="description-text">
        So, one of the problems with the new version of Next.js, is a annoying
        bug, which is being discussed here:
        <u>https://github.com/vercel/next.js/issues/49087</u> When the
        searchParams is being changed, it forces the website to scroll to the
        top, which is quite annoying. So when you are clicking the filter
        button, you are forced to scroll to the top. However, there is no
        solution just yet, but the Next.js team is hopefully solving this
        problem soon. <br /> <br />
        Hope you enjoyed.
      </p>
    </main>
  );
}
