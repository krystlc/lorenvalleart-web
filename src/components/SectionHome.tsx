export default function SectionHome() {
  return (
    <div className="sm:grid grid-cols-2 w-full h-full">
      <div className="sm:h-full">
        <img src="/brushes.webp" className="h-full w-full object-cover" />
      </div>
      <section className="prose mx-auto flex flex-col items-center justify-center">
        <div className="p-4">
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
