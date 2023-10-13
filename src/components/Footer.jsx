const refferences = [
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/in/alexander-rubino-36896a26b/",
  },
  {
    label: "Portfolio",
    link: "https://alexanderrubino.com",
  },
  {
    label: "My agency",
    link: "http://spine-agency.com",
  },
  {
    label: "Blog",
    link: "https://medium.com/@alexrubino05",
  },
];

export default function Footer() {
  return (
    <section className="mt-20 text-white flex flex-col gap-y-4 justify-center items-center">
      <h1 className="huge-text font-bold">Wanna learn more?</h1>
      <p className="body-text">Check out my other stuff</p>

      <div className="flex gap-4 flex-wrap mt-16">
        {refferences.map((refference) => (
          <a
            className="px-4 sm:px-5 py-1 sm:py-2 border-[1px] border-white rounded-full hover:border-cambridgeBlue transition-colors"
            key={refference.link}
            target="blank"
            href={refference.link}
          >
            <p className="small-text">{refference.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
