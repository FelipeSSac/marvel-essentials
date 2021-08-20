import { Header } from '../../components/Organism/Header';
import { MainContent } from '../../components/Organism/MainContent';

import { ComicsArticles } from '../../components/Molecule/ComicsArticles';

export default function Comics() {
  return (
    <>
      <Header />
      <MainContent type="comics">
        <ComicsArticles />
      </MainContent>
    </>
  );
}
