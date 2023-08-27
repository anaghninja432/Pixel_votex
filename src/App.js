import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from'./components/Navbar';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
function App() {
  return (
    <div classname= "App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='./Pages/Home' element={<Home/>}/>
          <Route path='./Pages/About' element={<About/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
