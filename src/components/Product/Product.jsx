import React from 'react';
import Skeleton from './Skeleton';

function Product(data) {
  const sizes = data.sizes;
  const [activeSize, setActiveSize] = React.useState(0);
  return (
    <div className='card'>
      <div className='card__media'>
        <img className='card__media-img' src={data.image} alt='Product' />
      </div>
      <div className='card__info'>
        <p className='card__info-name'>{data.name}</p>
        <p className='card__info-description'>{data.description}</p>
      </div>
      <div className='card__sizes'>
        <ul className='card__sizes-list'>
          {sizes.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={
                  activeSize === index
                    ? 'card__sizes-item active'
                    : 'card__sizes-item'
                }>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='card__price'>
        <p className='card__price-original'>${data.price}</p>
        <p className='card__price-discount'>-{data.priceDiscount}%</p>
        <p className='card__price-final'>${data.priceFinally}</p>
      </div>
      <button className='card__btn'>Add to bag</button>
    </div>
  );
}

export default Product;
