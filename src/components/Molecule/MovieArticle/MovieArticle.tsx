// import { ChangeEvent, useState } from 'react';

import data from '../../../resources/data/data.json';

import { MovieArticleContainer } from './styles';

export default function MovieArticle() {
  const { movies } = data;

  // const [movieList, setMovieList] = useState(movies);
  // const [sortType, setSortType] = useState('default');

  // const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setSortType(event.currentTarget.value);

  //   if (event.currentTarget.value === 'chronology') {
  //     setMovieList((prevState) => prevState.sort(
  //       (prev, next) => (prev.chronologicalOrder - next.chronologicalOrder),
  //     ));
  //   } else {
  //     setMovieList((prevState) => prevState.sort(
  //       (prev, next) => (prev.releaseDate - next.releaseDate),
  //     ));
  //   }
  // };

  return (
    <>
      {/* <select
        className="section-movies__select-sort"
        value={sortType}
        onChange={(event) => handleSort(event)}
      >
        <option value="default">Filtrar por</option>
        <option value="release">Lançamento</option>
        <option value="chronology">Cronologia</option>
      </select> */}
      {movies.map((movie, i) => {
        const key = i * 2.342;

        return (
          <MovieArticleContainer key={key}>
            <img
              className="article-movie-image"
              src={movie.poster}
              alt={movie.name}
            />
            <dl className="article-movie-description">
              <dt className="article-movie-name">
                {movie.name}
              </dt>
              <dl className="article-movie-about">
                {movie.about}
              </dl>
              <button type="button" className="article-movie-button">
                Ver Detalhes
              </button>
            </dl>
          </MovieArticleContainer>
        );
      })}
    </>
  );
}
