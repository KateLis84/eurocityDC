import './App.css'
import Header from './Modules/Header/Header'
import Footer from './Modules/Footer/Footer.js'
import MainPage from './Pages/MainPage/MainPage'
import LevelPage from './Pages/LevelPage/LevelPage'
import Constructor from './Pages/Constructor/Constructor.js'

function App() {
  return (
    <div>
      <Header/>
      <div>
        {/* <MainPage/> */}
        <LevelPage/>
        {/* <Constructor/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App; 
