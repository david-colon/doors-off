import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/LocationsPage';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='locations' element={<LocationsPage />} />
        <Route path='locations/:locationId' element={<LocationDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
