export interface FilmTipus{
    readonly id: number
    cim: string
    studio: string
    megjelenesiEv: number
    ertekeles: number
    kep: string
    
}

export const FILMLISTA: FilmTipus[] = [
  {
    id: 1,
    cim: "Coco",
    studio: "Pixar",
    megjelenesiEv: 2017,
    ertekeles: 8.4,
    kep: "public/kepek/coco.jpg"
  },
  {
    id: 2,
    cim: "Frozen",
    studio: "Disney",
    megjelenesiEv: 2013,
    ertekeles: 7.4,
    kep: "public/kepek/frozen.jpg"
  },
  {
    id: 3,
    cim: "Shrek",
    studio: "DreamWorks",
    megjelenesiEv: 2001,
    ertekeles: 7.9,
    kep: "public/kepek/shrek.jpg"
  },
  {
    id: 4,
    cim: "How to Train Your Dragon",
    studio: "DreamWorks",
    megjelenesiEv: 2010,
    ertekeles: 8.1,
    kep: "public/kepek/httyd.jpg"
  }
];