import React from 'react';

function Filter({
  categoryId,
  sortType,
  onChangeCategory,
  onChangeFilter,
  categories,
}) {
  const filterList = [
    { name: 'Our Picks', filterProperty: 'rating' },
    { name: 'Price: high to low', filterProperty: 'priceFinally' },
    { name: 'Price: low to high', filterProperty: '-priceFinally' },
    { name: 'Discount: high to low', filterProperty: 'priceDiscount' },
  ];
  const [isVisible, setIsVisible] = React.useState(false);
  const onClickListItem = (index) => {
    onChangeFilter(index);
    setIsVisible(!isVisible);
  };
  return (
    <div className='filter'>
      <div className='filter__wrapper'>
        <h3 className='filter__title'>Filter</h3>
        <div className='filter__inner'>
          <nav className='filter__menu'>
            <ul className='filter__menu-list'>
              {categories.map((categoryName, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => onChangeCategory(index)}
                    className={
                      categoryId === index
                        ? 'filter__menu-item active'
                        : 'filter__menu-item'
                    }>
                    {categoryName}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className='sort'>
            <div className='sort__label'>
              <svg
                width='10'
                height='6'
                viewBox='0 0 10 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
                  fill='#2C2C2C'
                />
              </svg>
              <b>Sort by:</b>
              <span onClick={() => setIsVisible(!isVisible)}>
                {sortType.name}
              </span>
            </div>
            {isVisible && (
              <div className='sort__popup'>
                <ul>
                  {filterList.map((obj, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => onClickListItem(obj)}
                        className={
                          sortType.filterProperty === obj.filterProperty
                            ? 'active'
                            : ''
                        }>
                        {obj.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
