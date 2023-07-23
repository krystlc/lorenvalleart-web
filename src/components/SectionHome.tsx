export default function SectionHome() {
  return (
    <div className="md:grid grid-cols-2 w-full h-full">
      <div className="md:h-full">
        <img src="/brushes.webp" className="h-full w-full object-cover" />
      </div>
      <section className=" flex flex-col items-center justify-center p-4">
        <div className=" max-w-sm">
          <h1>Kumusta!</h1>
          <p>
            Inspired by the mundane aspects of life and by the common objects
            and everyday scenarios, I paint my surroundings highlighting the
            beauty that lies in the most ordinary things. With a humorous
            approach I focus on the things that go unnoticed and are often
            overlooked.
          </p>
        </div>
      </section>
    </div>
  );
}
