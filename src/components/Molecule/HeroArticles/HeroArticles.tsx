import data from '../../../resources/data/data.json';

import { HeroArticleContainer } from './styles';

export default function HeroArticles() {
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
              className="article-hero__image"
              src={hero.cover}
              alt={hero.name}
            />
            <dl className="article-hero__description">
              <dt className="article-hero__name">
                {hero.name}
              </dt>
              <dl className="article-hero__about">
                {hero.about}
              </dl>
              <button type="button" className="article-hero__button">
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
