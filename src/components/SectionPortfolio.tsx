import { useState } from "react";
import { workOnCanvas, workOnPaper } from "./portfolio";

type Tab = "canvas" | "paper";
export default function SectionPortfolio() {
  const [tab, setTab] = useState<Tab>("canvas");
  const tabs: { text: string; value: Tab }[] = [
    {
      text: "Canvas",
      value: "canvas",
    },
    {
      text: "Paper",
      value: "paper",
    },
  ];

  function workList() {
    switch (tab) {
      case "paper":
        return workOnPaper;
      case "canvas":
      default:
        return workOnCanvas;
    }
  }
  return (
    <div className="bg-white min-h-screen">
      <aside className="pt-12 text-center prose mx-auto">
        <h1>My Work</h1>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select
            id="Tab"
            className="bg-transparent rounded-md"
            value={tab}
            onChange={(e) => setTab(e.target.value as Tab)}
          >
            {tabs.map((t) => {
              return (
                <option value={t.value} key={t.value}>
                  {t.text}
                </option>
              );
            })}
          </select>
        </div>

        <div className="hidden sm:block">
          <div>
            <nav className="flex gap-6 justify-center" aria-label="Tabs">
              {tabs.map((t) => {
                return (
                  <button
                    key={t.value}
                    type="button"
                    className={`shrink-0 border-b-2 pb-4 text-sm font-medium ${
                      tab === t.value
                        ? " border-redwood text-redwood"
                        : "border-transparent hover:text-redwood"
                    } `}
                    onClick={() => setTab(t.value)}
                  >
                    {t.text}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
      <section className="container max-w-4xl mx-auto p-4 grid grid-cols-2 gap-x-4 gap-y-24 py-12 md:gap-36">
        {workList().map((w) => {
          return (
            <div className=" even:mt-24" key={w.asset}>
              <figure className="mb-2">
                <picture>
                  <img src={w.asset} alt={w.title} />
                </picture>
              </figure>
              <figcaption className=" text-xs">
                <h6 className=" font-bold">{w.title}</h6>
                <p>{w.description}</p>
              </figcaption>
            </div>
          );
        })}
      </section>
    </div>
  );
}
