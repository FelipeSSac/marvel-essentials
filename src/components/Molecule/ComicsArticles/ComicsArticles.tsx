import { AiFillStar, AiOutlineCloseCircle } from 'react-icons/ai';
import Amazon from '../../../assets/images/amazonicon.jpeg';
import Americanas from '../../../assets/images/americanasicon.jpg';
import Panini from '../../../assets/images/paniniicon.jpg';

import { ComicsArticleContainer } from './styles';

import { HandleShowDetails } from '../../../helpers/handlers';

import data from '../../../resources/data/data.json';

export default function ComicsArticles() {
  const { comics } = data;

  return (
    <>
      {comics.map((comic, i) => {
        const key = i * 4213;

        return (
          <ComicsArticleContainer
            key={key}
            data-ts={`comic-article-${key}`}
          >
            <div className="article-comic-container">
              <img
                className="article-comic__image"
                src={comic.cover}
                alt={comic.name}
              />
              <dl className="article-comic__description">
                <dt className="article-comic__description--name">
                  {comic.name}
                </dt>
                <dl className="article-comic__description--about">
                  {comic.about}
                </dl>
                <button
                  type="button"
                  className="article-comic__button--show-card"
                  onClick={() => HandleShowDetails(`comic-article-${key}`)}
                >
                  Ver Detalhes
                </button>
              </dl>
              <dl className="article-comic__details">
                <dt className="article-comic__details--name">
                  {comic.name}
                </dt>
                <dd className="article-comic__details--about">
                  {comic.about}
                </dd>
                <dl>
                  <dt className="article-comic__details--market-name">Disponível para compra:</dt>
                  <dd>
                    {comic.availableAt.map((market) => {
                      if (market === 'Panini') {
                        return (
                          <img className="article-comic__details--market-place" src={Panini} alt="Panini" />
                        );
                      }
                      if (market === 'Amazon') {
                        return (
                          <img className="article-comic__details--market-place" src={Amazon} alt="Amazon" />
                        );
                      }
                      return (
                        <img className="article-comic__details--market-place" src={Americanas} alt="Americanas" />
                      );
                    })}
                  </dd>
                </dl>
                <dl className="article-comic__star">
                  <dt className="article-comic__star-title">Crítica:</dt>
                  <dd>
                    {['', '', '', '', ''].map((star, index) => {
                      if (index < comic.stars) {
                        return (
                          <AiFillStar className="article-comic__details-star" />
                        );
                      }
                      return (
                        <AiFillStar className="article-comic__details-star-empty" />
                      );
                    })}
                  </dd>
                </dl>
                <button
                  type="button"
                  className="article-comic__button--close-card"
                  onClick={() => HandleShowDetails(`comic-article-${key}`)}
                >
                  <AiOutlineCloseCircle />
                </button>
              </dl>
            </div>
          </ComicsArticleContainer>
        );
      })}
    </>
  );
}
