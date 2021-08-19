import data from '../../../resources/data/data.json';

import { HeroArticleContainer } from './styles';

export default function HeroArticle() {
  const { heroes } = data;

  return (
    <>
      {
      heroes.map((hero, i) => {
        const key = i * 4.53424;

        return (
          <HeroArticleContainer
            key={key}
          >
            <img
              className="article-hero-image"
              src={hero.cover}
              alt={hero.name}
            />
            <dl className="article-hero-description">
              <dt className="article-hero-name">
                {hero.name}
              </dt>
              <dl className="article-hero-about">
                {hero.about}
              </dl>
              <button type="button" className="article-hero-button">
                Ver Detalhes
              </button>
            </dl>
          </HeroArticleContainer>
        );
      })
    }
    </>
  );
}
