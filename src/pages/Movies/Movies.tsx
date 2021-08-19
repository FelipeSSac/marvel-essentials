import { Header } from '../../components/Organism/Header';
import { MainContent } from '../../components/Organism/MainContent';

import { MovieArticle } from '../../components/Molecule/MovieArticle';

export default function Movies() {
  return (
    <>
      <Header />
      <MainContent type="movies">
        <MovieArticle />
      </MainContent>
    </>
  );
}
