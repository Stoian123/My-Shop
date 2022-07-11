import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Bag from './pages/Bag';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/_app.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className='App'>
        <Header />
        <main className='page'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bag' element={<Bag />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
