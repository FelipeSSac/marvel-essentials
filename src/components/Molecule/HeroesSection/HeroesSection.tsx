import { useState } from 'react';
import useData from '../../../hooks/useData';

import { HeroesSectionContainer } from './styles';

export default function HeroesSection() {
  const { heroes } = useData();

  const [indexItems, setIndexItems] = useState(2);

  const handleShowItems = (type: string) => {
    setIndexItems((prevState) => (type === 'next' ? prevState + 1 : prevState - 1));
  };

  return (
    <HeroesSectionContainer>
      {indexItems <= 2 && (
        <button type="button" onClick={() => handleShowItems('next')}>Proximo</button>
      )}
      {indexItems >= 3 && (
        <button type="button" onClick={() => handleShowItems('previous')}>Anterior</button>
      )}
      {heroes.map((hero, i) => {
        if ((i < indexItems - 2) || (i > indexItems)) return null;
        return (
          <article className="section-heroes__article-container">
            <img className="section-heroes__article-image" src={hero.cover} alt={hero.name} />
            <dt className="section-heroes__article-dt">
              <dd className="section-heroes__article-name">
                {hero.name}
              </dd>
              <dd className="section-heroes__article-about">
                {hero.about}
              </dd>
              <button type="button" className="section-heroes__article-button">
                Ver Detalhes
              </button>
            </dt>
          </article>
        );
      })}
    </HeroesSectionContainer>
  );
}
