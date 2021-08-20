import data from '../../../resources/data/data.json';

import { HQArticleContainer } from './styles';

export default function HQsArticles() {
  const { hqs } = data;

  return (
    <>
      {hqs.map((hq, i) => {
        const key = i * 4.213;

        return (
          <HQArticleContainer key={key}>
            <img
              className="article-hq__image"
              src={hq.cover}
              alt={hq.name}
            />
            <dl className="article-hq__description">
              <dt className="article-hq__name">
                {hq.name}
              </dt>
              <dl className="article-hq__about">
                {hq.about}
              </dl>
              <button type="button" className="article-hq__button">
                Ver Detalhes
              </button>
            </dl>
          </HQArticleContainer>
        );
      })}
    </>
  );
}
