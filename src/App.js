import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

import Header from './components/Header';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
// import { Counter } from './components/Counter/Counter';

export const SearchContext = createContext('');

function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="wrapper">
      {/* <Counter /> */}
      <SearchContext.Provider value={{ searchText, setSearchText }}>
        {/* <Header searchText={searchText} onChangeSearchText={(text) => setSearchText(text)} /> */}
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchText={searchText} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
