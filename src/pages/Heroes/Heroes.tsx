import { HeroArticle } from '../../components/Molecule/HeroArticle';
import { Header } from '../../components/Organism/Header';
import { MainContent } from '../../components/Organism/MainContent';

export default function Heroes() {
  return (
    <>
      <Header />
      <MainContent type="heroes">
        <HeroArticle />
      </MainContent>
    </>
  );
}
