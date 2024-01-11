import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-black h-screen flex flex-col items-center">
        <Image
          src="/jack.jpeg"
          width={400}
          height={400}
          alt="Picture of Jack Meltzer"
          className="rounded-lg mb-4"
        />
        <div className="text-center text-white border border-white p-4 rounded-md">
          <h1 className="text-3xl mb-6">About Me</h1>
          <div className="p-10">
            <p className="text-sm mb-4">
              Hello, I'm Jack Meltzer, a passionate and creative production
              designer with a keen eye for detail and a love for storytelling
              through visual elements. Over the years, I have had the privilege
              of contributing my skills to a diverse range of projects, bringing
              visions to life through art direction, set design, and prop
              styling.
            </p>
            <p className="text-sm mb-4">
              My journey in the world of production design began with a
              fascination for creating immersive environments that enhance the
              narrative of a film or a production. From meticulously crafting
              period-specific sets to conceptualizing futuristic designs, I
              thrive on the challenge of transforming ideas into visually
              stunning realities.
            </p>
            <p className="text-sm mb-4">
              With a background in fine arts and a deep understanding of
              cinematic aesthetics, I bring a unique blend of creativity and
              technical expertise to every project. Collaborating closely with
              directors, cinematographers, and the entire production team, I
              ensure that the visual elements seamlessly align with the overall
              storytelling goals.
            </p>
            <p className="text-sm mb-4">
              Whether it's creating the atmosphere of a historical drama, the
              futuristic landscapes of a sci-fi epic, or the cozy interiors of a
              character's home, I approach each project with dedication and a
              commitment to delivering visuals that captivate audiences and
              elevate the overall production value.
            </p>
            <p className="text-sm">
              When I'm not immersed in the world of production design, you can
              find me exploring art galleries, seeking inspiration from
              different cultures, and staying updated on the latest trends in
              design and cinematography. I look forward to bringing my passion
              and expertise to future projects and continuing to contribute to
              the magic of storytelling through the art of production design.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
