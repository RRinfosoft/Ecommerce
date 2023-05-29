import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import Footer from './component/Footer/Footer';
import Products from './component/Pages/Products/Products';
import Featured from './component/Pages/Featured/Featured';
import Review from './component/Pages/Review/Review';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/review' element={<Review />} />
        </Route>
      </Routes>
      <Footer />
    
    </>
  );
}

export default App;
