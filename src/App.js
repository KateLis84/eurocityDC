import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './Modules/Header/Header'
import Footer from './Modules/Footer/Footer.js'
import MainPage from './Pages/MainPage/MainPage'
import LevelPage from './Pages/LevelPage/LevelPage'
import Testing from './Components/Test/Test.js'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/level" element={<LevelPage/>} />
      </Routes>
      <Footer/>
      {/* <Testing/> */}
    </>
  );
}

export default App; 
