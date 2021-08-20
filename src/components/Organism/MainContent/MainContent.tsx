import { ReactElement, useState } from 'react';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import data from '../../../resources/data/data.json';

import { MainContentContainer } from './styles';

interface IMainContentProps {
  type: 'heroes' | 'movies' | 'comics';
  children: ReactElement;
}

export default function MainContent({ type, children }: IMainContentProps) {
  const [sliderCurrent, setSliderCurrent] = useState(0);

  const items = data[type];
  const { length } = items;

  function handleShowSlide(direction: string) {
    const section = document.querySelector('[data-ts="section"]');

    if (!section) return null;

    if (direction === 'next') {
      setSliderCurrent((prevState) => prevState + 1);

      return section.scrollBy(300, 0);
    }
    setSliderCurrent((prevState) => prevState - 1);

    return section.scrollBy(-300, 0);
  }

  return (
    <MainContentContainer>
      <section className="main-content__section" data-ts="section">
        <button
          type="button"
          className={`section__button-toggle-show--prev button-toggle-show ${sliderCurrent === 0 ? ('button-toggle-show--hide') : ('')}`}
          onClick={() => handleShowSlide('prev')}
        >
          <FaArrowLeft />
        </button>
        <button
          type="button"
          className={`section__button-toggle-show--next button-toggle-show ${sliderCurrent === length - 3 ? ('button-toggle-show--hide') : ('')}`}
          onClick={() => handleShowSlide('next')}
        >
          <FaArrowRight />
        </button>
        {children}
      </section>
    </MainContentContainer>
  );
}
