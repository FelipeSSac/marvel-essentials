import { AiFillStar, AiOutlineCloseCircle } from 'react-icons/ai';
import Amazon from '../../../assets/images/amazonicon.jpeg';
import Americanas from '../../../assets/images/americanasicon.jpg';
import Panini from '../../../assets/images/paniniicon.jpg';

import { HQArticleContainer } from './styles';

import { HandleShowDetails } from '../../../helpers/handlers';

import data from '../../../resources/data/data.json';

export default function HQsArticles() {
  const { hqs } = data;

  return (
    <>
      {hqs.map((hq, i) => {
        const key = i * 4213;

        return (
          <HQArticleContainer
            key={key}
            data-ts={`hq-article-${key}`}
          >
            <div className="article-hq-container">
              <img
                className="article-hq__image"
                src={hq.cover}
                alt={hq.name}
              />
              <dl className="article-hq__description">
                <dt className="article-hq__description--name">
                  {hq.name}
                </dt>
                <dl className="article-hq__description--about">
                  {hq.about}
                </dl>
                <button
                  type="button"
                  className="article-hq__button--show-card"
                  onClick={() => HandleShowDetails(`hq-article-${key}`)}
                >
                  Ver Detalhes
                </button>
              </dl>
              <dl className="article-hq__details">
                <dt className="article-hq__details--name">
                  {hq.name}
                </dt>
                <dd className="article-hq__details--about">
                  {hq.about}
                </dd>
                <dl>
                  <dt className="article-hq__details--market-name">Disponível para compra:</dt>
                  <dd>
                    {hq.availableAt.map((market) => {
                      if (market === 'Panini') {
                        return (
                          <img className="article-hq__details--market-place" src={Panini} alt="Panini" />
                        );
                      }
                      if (market === 'Amazon') {
                        return (
                          <img className="article-hq__details--market-place" src={Amazon} alt="Amazon" />
                        );
                      }
                      return (
                        <img className="article-hq__details--market-place" src={Americanas} alt="Americanas" />
                      );
                    })}
                  </dd>
                </dl>
                <dl className="article-hq__star">
                  <dt className="article-hq__star-title">Crítica:</dt>
                  <dd>
                    {['', '', '', '', ''].map((star, index) => {
                      if (index < hq.stars) {
                        return (
                          <AiFillStar className="article-hq__details-star" />
                        );
                      }
                      return (
                        <AiFillStar className="article-hq__details-star-empty" />
                      );
                    })}
                  </dd>
                </dl>
                <button
                  type="button"
                  className="article-hq__button--close-card"
                  onClick={() => HandleShowDetails(`hq-article-${key}`)}
                >
                  <AiOutlineCloseCircle />
                </button>
              </dl>
            </div>
          </HQArticleContainer>
        );
      })}
    </>
  );
}
