import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './Modules/Header/Header'
import Footer from './Modules/Footer/Footer.js'
import MainPage from './Pages/MainPage/MainPage'
import LevelPage from './Pages/LevelPage/LevelPage'
import Constructor from './Pages/Constructor/Constructor.js'
import MobileSlides from './Components/MobileSlides/MobileSlides.js'

function App() {
  return (
    <>
      {/* <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/level" element={<LevelPage/>} />
      </Routes>
      <Footer/> */}
      <MobileSlides/>
    </>
  );
}

export default App; 
