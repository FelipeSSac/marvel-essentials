import { Header } from '../../components/Organism/Header';
import { MainContent } from '../../components/Organism/MainContent';

import { HQsArticles } from '../../components/Molecule/HQsArticles';

export default function HQs() {
  return (
    <>
      <Header />
      <MainContent type="hqs">
        <HQsArticles />
      </MainContent>
    </>
  );
}
