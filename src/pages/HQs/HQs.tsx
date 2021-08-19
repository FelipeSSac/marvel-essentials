import { Header } from '../../components/Organism/Header';
import { MainContent } from '../../components/Organism/MainContent';

import { HQsArticle } from '../../components/Molecule/HQsArticle';

export default function HQs() {
  return (
    <>
      <Header />
      <MainContent type="hqs">
        <HQsArticle />
      </MainContent>
    </>
  );
}
