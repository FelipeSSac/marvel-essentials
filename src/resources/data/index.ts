interface IHero {
  name: string;
  about: string;
  cover: string;
  lastApparitions: Array<string>;
  stars: number;
}

interface IMovie {
  name: string;
  about: string;
  releaseDate: number;
  chronologicalOrder: number;
  poster: string;
  availableAt: Array<string>;
  stars: number;
}

interface IComic {
  name: string;
  about: string;
  cover: string;
  availableAt: Array<string>;
  stars: number;
}

export interface IData {
  heroes: Array<IHero>;
  movies: Array<IMovie>;
  comics: Array<IComic>;
}
