import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Modules/Header/Header';
import Footer from './Modules/Footer/Footer.js';
import MainPage from './Pages/MainPage/MainPage';
import LevelPage from './Pages/LevelPage/LevelPage';
import JKPage from './Pages/JKPage/JKPage.js';
import FilterPage from './Pages/FilterPage/FilterPage.js';
import FlatPage from './Pages/FlatPage/FlatPage.js';
import AboutUs from './Pages/AboutUs/AboutUs.js';

function App() {
  return (
    <div style={{overflowX: 'hidden'}}>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/level" element={<LevelPage/>} />
        <Route path="/jkpage/:jkId" element={<JKPage/>} />
        <Route path="/filters" element={<FilterPage/>} />
        <Route path="/flat/:jkId/:flatId" element={<FlatPage/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App; 
