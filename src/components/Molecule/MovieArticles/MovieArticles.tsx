import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { AiFillStar, AiOutlineCloseCircle } from 'react-icons/ai';
import { ReactComponent as ArrowIcon } from '../../../assets/images/arrowicon.svg';
import Disney from '../../../assets/images/disneypicon.png';
import Amazon from '../../../assets/images/amazonicon.jpeg';

import { MovieArticleContainer } from './styles';

import { HandleShowDetails } from '../../../helpers/handlers';

import data from '../../../resources/data/data.json';

export default function MovieArticles() {
  const { movies } = data;

  const [movieList, setMovieList] = useState(movies);

  const [sortType, setSortType] = useState('');
  const [showSelectBox, setShowSelectBox] = useState(false);

  const refSortButton = useDetectClickOutside({
    onTriggered: () => setShowSelectBox(false),
  });

  function handleSort(sort:string) {
    setSortType(sort);

    if (sort === 'Cronologia') {
      setMovieList((prevState) => prevState.sort(
        (prev, next) => (prev.chronologicalOrder - next.chronologicalOrder),
      ));
    } else {
      setMovieList((prevState) => prevState.sort(
        (prev, next) => (prev.releaseDate - next.releaseDate),
      ));
    }
  }

  return (
    <>
      <div
        ref={refSortButton}
        className={`section-movies__select-container${showSelectBox ? (' show-select-box') : ('')}`}
      >
        <button
          type="button"
          onClick={() => setShowSelectBox((prevState) => !prevState)}
          className="section-movies__select__option"
        >
          {sortType || 'Filtrar por'}
        </button>
        <ArrowIcon className="section-movies__select__icon" />
        <button
          type="button"
          className="section-movies__select__option"
          onClick={() => handleSort('Lançamento')}
        >
          Lançamento
        </button>
        <button
          type="button"
          className="section-movies__select__option"
          onClick={() => handleSort('Cronologia')}
        >
          Cronologia
        </button>
      </div>
      {movieList.map((movie, i) => {
        const key = i * 2342;

        return (
          <MovieArticleContainer
            key={key}
            data-ts={`movie-article-${key}`}
            data-testid="movie-article"
          >
            <div className="article-movie-container">
              <img
                className="article-movie__image"
                src={movie.poster}
                alt={movie.name}
              />
              <dl className="article-movie__description">
                <dt className="article-movie__description--name">
                  {movie.name}
                </dt>
                <dl className="article-movie__description--about">
                  {movie.about}
                </dl>
                <button
                  type="button"
                  className="article-movie__button--show-card"
                  onClick={() => HandleShowDetails(`movie-article-${key}`)}
                >
                  Ver Detalhes
                </button>
              </dl>
              <dl className="article-movie__details">
                <dt className="article-movie__details--name">
                  {movie.name}
                </dt>
                <dd className="article-movie__details--about">
                  {movie.about}
                </dd>
                <dl>
                  <dt className="article-movie__details--market-name">Disponível em streaming:</dt>
                  <dd>
                    {movie.availableAt.map((market, ni) => {
                      const nkey = ni * 27241;

                      if (market === 'Disney+') {
                        return (
                          <img key={nkey} className="article-movie__details--market-place" src={Disney} alt="Disney+" />
                        );
                      }
                      return (
                        <img key={nkey} className="article-movie__details--market-place" src={Amazon} alt="Amazon" />
                      );
                    })}
                  </dd>
                </dl>
                <dl className="article-movie__star">
                  <dt className="article-movie__star-title">Crítica:</dt>
                  <dd>
                    {['', '', '', '', ''].map((star, mi) => {
                      const mkey = mi * 87271;

                      if (mi < movie.stars) {
                        return (
                          <AiFillStar key={mkey} className="article-movie__details-star" />
                        );
                      }
                      return (
                        <AiFillStar key={mkey} className="article-movie__details-star-empty" />
                      );
                    })}
                  </dd>
                </dl>
                <button
                  type="button"
                  data-testid="movie-article__close-details"
                  className="article-movie__button--close-card"
                  onClick={() => HandleShowDetails(`movie-article-${key}`)}
                >
                  <AiOutlineCloseCircle />
                </button>
              </dl>
            </div>
          </MovieArticleContainer>
        );
      })}
    </>
  );
}
