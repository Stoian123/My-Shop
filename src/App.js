import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Bag from './pages/Bag';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/_app.scss';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className='App'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <main className='page'>
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} />} />
          <Route path='/bag' element={<Bag />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
