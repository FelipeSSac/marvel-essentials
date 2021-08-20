import { useState } from 'react';

import { useDetectClickOutside } from 'react-detect-click-outside';

import data from '../../../resources/data/data.json';

import { ReactComponent as ArrowIcon } from '../../../assets/images/arrowicon.svg';
import { MovieArticleContainer } from './styles';

export default function MovieArticles() {
  const { movies } = data;

  const [movieList, setMovieList] = useState(movies);

  const [sortType, setSortType] = useState('');
  const [showSelectBox, setShowSelectBox] = useState(false);

  const ref = useDetectClickOutside({
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
        ref={ref}
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
        const key = i * 2.342;

        return (
          <MovieArticleContainer key={key}>
            <img
              className="article-movie__image"
              src={movie.poster}
              alt={movie.name}
            />
            <dl className="article-movie__description">
              <dt className="article-movie__name">
                {movie.name}
              </dt>
              <dl className="article-movie__about">
                {movie.about}
              </dl>
              <button type="button" className="article-movie__button">
                Ver Detalhes
              </button>
            </dl>
          </MovieArticleContainer>
        );
      })}
    </>
  );
}
