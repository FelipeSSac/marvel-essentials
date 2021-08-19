import data from '../../../resources/data/data.json';

import { HQArticleContainer } from './styles';

export default function HQsArticle() {
  const { hqs } = data;

  return (
    <>
      {hqs.map((hq, i) => {
        const key = i * 4.213;

        return (
          <HQArticleContainer key={key}>
            <img
              className="article-hq-image"
              src={hq.cover}
              alt={hq.name}
            />
            <dl className="article-hq-description">
              <dt className="article-hq-name">
                {hq.name}
              </dt>
              <dl className="article-hq-about">
                {hq.about}
              </dl>
              <button type="button" className="article-hq-button">
                Ver Detalhes
              </button>
            </dl>
          </HQArticleContainer>
        );
      })}
    </>
  );
}
