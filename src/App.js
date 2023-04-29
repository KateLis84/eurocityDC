import './App.css'
import Header from './Modules/Header/Header'
import MainPage from './Pages/MainPage/MainPage'
import LevelPage from './Pages/LevelPage/LevelPage'
import Constructor from './Pages/Constructor/Constructor.js'

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        {/* <MainPage/> */}
        <LevelPage/>
        {/* <Constructor/> */}
      </div>
    </div>
  );
}

export default App; 
