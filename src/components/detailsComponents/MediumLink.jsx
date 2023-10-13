import mediumImage from "../../assets/Medium.png";

export default function MediumLink({ link }) {
  return (
    <a
      href={link}
      target="blank"
      className="flex items-center gap-x-3 border-darkGray border-[1px] py-2 px-5 rounded-full hover:border-cambridgeBlue transition-colors w-fit cursor-pointer"
    >
      <img src={mediumImage} className="w-10 h-10" />
      <h1 className="body-text">See post on Medium</h1>
    </a>
  );
}
