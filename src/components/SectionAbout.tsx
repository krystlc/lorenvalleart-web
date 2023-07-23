export default function SectionAbout() {
  return (
    <div className="h-full md:grid md:grid-cols-2 md:w-screen md:h-screen">
      <div className="md:h-screen order-last">
        <img src="/loren.webp" className="h-full w-full object-cover" />
      </div>
      <section>
        <div className="bg-white p-4 md:max-w-md md:ml-auto md:overflow-auto md:h-screen md:py-8 md:pr-8">
          <h1>The Artist</h1>
          <div className=" space-y-2 text-sm">
            <p>
              Highly creative, passionate, and dexterous, Loren Valle is a
              self-taught fine artist who aims to stimulate and empower others
              through her impressive work. She has an extensive background in
              art and loves to not only express herself through artistic
              freedom, but to offer viewers the ability to experience different
              perspectives that foster personal growth and deeply inspire.
            </p>
            <p>
              Loren is a Filipina-American based in Florida and learned at a
              young age just how important art was in the world. She discovered
              that there really is nothing quite like the elegance and soothing
              euphoric atmosphere created when fine art is present. Whether you
              are looking to compliment your home, enrich the appeal of a
              special event, or simply self-reflect, art is there to fulfill
              that desire.
            </p>
            <p>
              Dating back to her earliest memories of preschool, Loren found
              immense joy cutting through curved lines of paper and drawing the
              differences between a plant cell and an animal cell in zoology
              class. Though she already had that natural artistic eye, her first
              official gig as an artist was submitting illustrations to be used
              in her university's campus paper. Since then to now, Loren has
              been ever-evolving in her skills, going from taking portrait
              commissions of people and pets using pens and colored pencils, to
              now painting anything that piques her interest using oil paints.
              Even with this exceptional development, Loren still continuously
              experiments and pushes herself to reach new development levels in
              her craft.
            </p>
            <p>
              Nothing makes Loren happier than being able to galvanize, spark
              curiosity, and cultivate appreciation from others with her
              alluring pieces. She has a true ardency for what she does, and
              enjoys being able to share her ingenious visions to make a lasting
              impact on society. From oil paintings, pencil drawings, to pen
              drawings, Loren delivers memorable fine art that encourages both
              new and experienced artists to reach their full potential as well.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
