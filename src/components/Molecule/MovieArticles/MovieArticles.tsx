import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { AiFillStar, AiOutlineCloseCircle } from 'react-icons/ai';

import { HandleShowDetails } from '../../../helpers/handlers';

import data from '../../../resources/data/data.json';

import { ReactComponent as ArrowIcon } from '../../../assets/images/arrowicon.svg';
import { MovieArticleContainer } from './styles';

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
                <dl className="article-movie__star">
                  <dt className="article-movie__star-title">Crítica:</dt>
                  <dd>
                    {['', '', '', '', ''].map((star, index) => {
                      if (index < movie.stars) {
                        return (
                          <AiFillStar className="article-movie__details-star" />
                        );
                      }
                      return (
                        <AiFillStar className="article-movie__details-star-empty" />
                      );
                    })}
                  </dd>
                </dl>
                <button
                  type="button"
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
