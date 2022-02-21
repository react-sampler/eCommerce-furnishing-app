import './App.css';
import './bootstrap.min.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import CartScreen from './screens/CartScreen';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container className='py-3'>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/*' element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
