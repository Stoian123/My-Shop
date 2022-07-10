import React from 'react';
import newsImg from '../../assets/img/news/women.webp';

function News() {
  return (
    <section className='news'>
      <div className='news__inner'>
        <div className='news__media'>
          <img className='news__media-img' src={newsImg} alt='Sales' />
        </div>
        <div className='news__content'>
          <h1 className='news__title'>Get an extra 15% off sale</h1>
          <p className='news__text'>
            Shop the finest designers with up to 50% off, plus get an extra 15% off for a limited
            time. Selected items, discount automatically applied at checkout
          </p>
        </div>
      </div>
    </section>
  );
}

export default News;
