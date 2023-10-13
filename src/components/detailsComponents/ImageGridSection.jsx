import Image from "./Image";
import Video from "./Video";

export default function ImageGridSection({ images, singleImage, video }) {
  console.log(images, singleImage);

  return (
    <main className="flex flex-col gap-8">
      <Video video={video} />

      {/* Has multiple image */}
      {images ? (
        <section
          className={`grid gap-8 grid-cols-1 lg:grid-cols-2 ${
            images.length == 2
              ? "grid-rows-2 lg:grid-rows-1"
              : "grid-rows-4 lg:grid-rows-2"
          }`}
        >
          {images.map((image) => (
            <Image image={image} key={image} />
          ))}
        </section>
      ) : (
        <></>
      )}

      {/* Has a single image */}
      {singleImage ? <Image image={singleImage} /> : <></>}
    </main>
  );
}
