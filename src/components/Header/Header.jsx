import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

function Header({ searchValue, setSearchValue }) {
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__links'>
          <Link to='/women' className='link'>
            Women
          </Link>
          <Link to='/men' className='link active'>
            Men
          </Link>
        </div>
        <div className='header__logo'>
          <Link className='header__logo-text' to='/'>
            My-Shop
          </Link>
        </div>
        <div className='header__bag'>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          {/* <Link className='header__bag-text' to='/bag'>
            in bag 0
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
