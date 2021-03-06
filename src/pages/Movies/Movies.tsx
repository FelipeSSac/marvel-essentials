import { Header } from '../../components/Organism/Header';
import { MainContent } from '../../components/Organism/MainContent';

import { MovieArticles } from '../../components/Molecule/MovieArticles';

export default function Movies() {
  return (
    <>
      <Header />
      <MainContent type="movies">
        <MovieArticles />
      </MainContent>
    </>
  );
}
