import AppSection from "./components/AppSection";

function App() {
  return (
    <>
      <main className="h-screen w-screen grid grid-row-5 md:grid-rows-none md:grid-cols-5 divide-y divide-[#a88f8d] md:divide-y-0 md:divide-x">
        <AppSection letter="L" number="01" coverSrc="/brushes.webp">
          <div className=" absolute bottom-1/2 inset-x-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eum tempora modi a ex ipsam quod asperiores mollitia dolorum!
            Voluptatem at facilis nam quae enim numquam perferendis adipisci
            autem tenetur?
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dolores iure eius cupiditate numquam est explicabo delectus atque
            aspernatur dolore odio quod illum libero, asperiores autem quis,
            nesciunt porro exercitationem?
          </p>
        </AppSection>
        <AppSection letter="O" number="02" coverSrc="/loren.webp">
          <div className=" absolute bottom-1/2 mb-12 inset-x-8 w-12 mx-auto text-center">
            Lorem, ipsum dolor sit amet!
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dolores iure eius cupiditate numquam est explicabo delectus atque
            aspernatur dolore odio quod illum libero, asperiores autem quis,
            nesciunt porro exercitationem?
          </p>
        </AppSection>
        <AppSection letter="R" number="03" coverSrc="/gummy.webp">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eum tempora modi a ex ipsam quod asperiores mollitia dolorum!
            Voluptatem at <span className="link">facilis nam quae</span> enim
            numquam perferendis adipisci autem tenetur?
          </div>
        </AppSection>
        <AppSection letter="E" number="04" coverSrc="/painting.webp">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eum tempora modi a ex ipsam quod asperiores mollitia dolorum!
            Voluptatem at facilis nam quae enim numquam perferendis adipisci
            autem tenetur?
          </div>
        </AppSection>
        <AppSection letter="N" number="05" coverSrc="/studio.jpeg">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eum tempora modi a ex ipsam quod asperiores mollitia dolorum!
            Voluptatem at facilis nam quae enim numquam perferendis adipisci
            autem tenetur?
          </div>
        </AppSection>
      </main>
      <footer className="rotate-180">
        <p className="rotate-90 fixed left-2 -bottom-4 origin-bottom-left uppercase text-xs tracking-widest">
          Copyright 2023 — Loren Valle Art
        </p>
      </footer>
    </>
  );
}

export default App;
