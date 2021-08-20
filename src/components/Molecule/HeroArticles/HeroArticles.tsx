import { AiFillStar, AiOutlineCloseCircle } from 'react-icons/ai';
import { HeroArticleContainer } from './styles';

import { HandleShowDetails } from '../../../helpers/handlers';

import data from '../../../resources/data/data.json';

export default function HeroArticles() {
  const { heroes } = data;

  return (
    <>
      {
      heroes.map((hero, i) => {
        const key = i * 453424;

        return (
          <HeroArticleContainer
            key={key}
            data-ts={`hero-article-${key}`}
          >
            <div className="article-hero-container">
              <img
                className="article-hero__image"
                src={hero.cover}
                alt={hero.name}
              />
              <dl className="article-hero__description">
                <dt className="article-hero__name-description">
                  {hero.name}
                </dt>
                <dd className="article-hero__about">
                  {hero.about}
                </dd>
                <button
                  type="button"
                  className="article-hero__button--show-card"
                  onClick={() => HandleShowDetails(`hero-article-${key}`)}
                >
                  Ver Detalhes
                </button>
              </dl>
              <dl className="article-hero__details">
                <dt className="article-hero__name-details">
                  {hero.name}
                </dt>
                <dl className="article-hero__apparition">
                  <dt className="article-hero__apparition-title">Aparições:</dt>
                  {hero.lastApparitions.map((aparition) => (
                    <dd className="article-hero__apparition-list">{aparition}</dd>
                  ))}
                </dl>
                <dl className="article-hero__star">
                  <dt className="article-hero__star-title">Avaliação dos Fãs:</dt>
                  <dd>
                    {['', '', '', '', ''].map((star, index) => {
                      if (index < hero.stars) {
                        return (
                          <AiFillStar className="article-hero__details-star" />
                        );
                      }
                      return (
                        <AiFillStar className="article-hero__details-star-empty" />
                      );
                    })}
                  </dd>
                </dl>
                <button
                  type="button"
                  className="article-hero__button--close-card"
                  onClick={() => HandleShowDetails(`hero-article-${key}`)}
                >
                  <AiOutlineCloseCircle />
                </button>
              </dl>
            </div>
          </HeroArticleContainer>
        );
      })
    }
    </>
  );
}
