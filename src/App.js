import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  //   if (isLoading) {
  //     return (
  //       <div className="loading">
  //         <h1>Loading...</h1>
  //       </div>
  //     );
  //   }
  return (
    <article className="main-router">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </article>
  );
}

export default App;
