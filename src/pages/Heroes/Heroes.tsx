import { HeroArticles } from '../../components/Molecule/HeroArticles';

import { Header } from '../../components/Organism/Header';
import { MainContent } from '../../components/Organism/MainContent';

export default function Heroes() {
  return (
    <div>
      <Header />
      <MainContent type="heroes">
        <HeroArticles />
      </MainContent>
    </div>
  );
}
