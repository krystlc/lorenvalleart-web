import LoveMe from "@/assets/canvas/love-me.webp";
import LooseScrews from "@/assets/canvas/loose-screws.webp";
import BubbleBath from "@/assets/canvas/bubble-bath.webp";
import Cattle from "@/assets/canvas/cattle.webp";
import Jalapenos from "@/assets/canvas/jalapenos.webp";
import Silver from "@/assets/canvas/silver.webp";
import Harvest from "@/assets/canvas/harvest.webp";
import Vase from "@/assets/canvas/vase.webp";
import Placidity from "@/assets/canvas/placidity.webp";
import Tunes from "@/assets/canvas/tunes.webp";
import Rosy from "@/assets/canvas/rosy.webp";

import BNW from "@/assets/paper/bnw.webp";
import Coco from "@/assets/paper/coco.webp";
import Flea from "@/assets/paper/flea.webp";
import Gibs from "@/assets/paper/gibs.webp";
import Jo from "@/assets/paper/jo.webp";
import MsKim from "@/assets/paper/kim_jones.webp";
import Koi from "@/assets/paper/koi.webp";
import Leaf from "@/assets/paper/leaf.webp";
import Lyd from "@/assets/paper/lyd.webp";
import Oscar from "@/assets/paper/oscar.webp";
import Pets from "@/assets/paper/pets.webp";
import Ri from "@/assets/paper/ri.webp";
import Yoda from "@/assets/paper/yoda.webp";

export interface Work {
  title: string;
  description: string;
  asset: string;
}

export const workOnCanvas: Work[] = [
  {
    title: "Love me",
    description:
      'Traditional Art, Oil. Water mixable oil. 8" x 10" Cotton canvas, pinewood. Created 2021',
    asset: LoveMe,
  },
  {
    title: "Loose screws",
    description:
      'Oil, Traditional Art. 18" x 24" Cotton, fir wood. Created 2020',
    asset: LooseScrews,
  },
  {
    title: "Bubble bath",
    description:
      'Oil, Traditional Art. Water mixable oil. 8" x 10" Cotton canvas, pinewood. Created 2021',
    asset: BubbleBath,
  },
  {
    title: "Placidity in the park",
    description:
      'Oil. Water mixable oil. 8" x 10" Cotton canvas, pinewood. Created 2021',
    asset: Placidity,
  },
  {
    title: "Cattle on the field",
    description:
      'Oil, Traditional Art. 12" x 12" Poly cotton Canvas. Created 2020',
    asset: Cattle,
  },
  {
    title: "Jalapeños",
    description:
      'Oil, Traditional Art. 18" x 24" Cotton, fir wood. Created 2020',
    asset: Jalapenos,
  },
  {
    title: "Silver fish",
    description:
      'Oil, Traditional Art. 12" x 16" Cotton canvas panels. Created 2020',
    asset: Silver,
  },
  {
    title: "Bountiful harvest",
    description:
      'Oil, Traditional Art. 16" x 20" Cotton duck, solid wood. Created 2020',
    asset: Harvest,
  },
  {
    title: "Corner vase",
    description:
      'Oil, Traditional Art. 12" x 16" Cotton canvas panels. Created 2020',
    asset: Vase,
  },
  {
    title: "Tunes under the Denesmouth Arch",
    description:
      'Oil, Traditional Art. Oil. 10" x 10" Wood frame canvas. Created 2020',
    asset: Tunes,
  },
  {
    title: "Rosy Maple",
    description:
      'Oil, Traditional Art. Oil. 16" x 20" Cotton duck, solid wood. Created 2020',
    asset: Rosy,
  },
];

export const workOnPaper: Work[] = [
  {
    title: "Ms Kim",
    description:
      'Pencil, Pen. 9" x 12" Toned tan sketch paper. Prismacolor. Created 2015',
    asset: MsKim,
  },
  {
    title: "Mr Buscemi",
    description:
      "Sketch, Pencil. Prismacolor. Artment Black sketch pad. Created 2015",
    asset: BNW,
  },
  {
    title: "Beloved Coco",
    description:
      'Pencil, Pen. 9" x 12" Toned tan sketch paper. Prismacolor. Created 2016 - SOLD',
    asset: Coco,
  },
  {
    title: "Ms Fenty",
    description: "Pen. Shuttlecock pens. Textured paper. Created 2017",
    asset: Ri,
  },
  {
    title: "Brooklyn leaf.",
    description:
      'Pencil, Pen. 9" x 12" Toned tan sketch paper. Prismacolor. Created 2016 - SOLD',
    asset: Leaf,
  },
  {
    title: "Mr. Phoenix",
    description: "Pen. Shuttlecock pens. Textured paper. Created 2018",
    asset: Jo,
  },
  {
    title: "Bangkok koi",
    description:
      "Pencil, Pen. Prismacolor. Artment Black sketch pad. Created 2015 - SOLD",
    asset: Koi,
  },
  {
    title: "Flea",
    description: "Pen. Shuttlecock pens. Textured paper. Created 2018",
    asset: Flea,
  },
  {
    title: "Oscar",
    description:
      'Pencil, Pen. 9" x 12" Toned tan sketch paper. Prismacolor. Created 2015 - SOLD',
    asset: Oscar,
  },
  {
    title: "Lydia",
    description:
      'Pencil, Pen. 9" x 12" Toned tan sketch paper. Prismacolor. Created 2017 - SOLD',
    asset: Lyd,
  },
  {
    title: "Ms Gibbs",
    description: "Pen, Pencil. Shuttlecock pens. Textured paper. Created 2018",
    asset: Gibs,
  },
  {
    title: "Yoda",
    description:
      'Pencil, Pen. 9" x 12" Toned tan sketch paper. Prismacolor. Created 2015 - SOLD',
    asset: Yoda,
  },
  {
    title: "Coffee and cream",
    description:
      'Pencil, Pen. 9" x 12" Toned tan sketch paper. Prismacolor. Created 2018 - SOLD',
    asset: Pets,
  },
];
