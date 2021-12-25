import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar';
import Home from './pages';
import About from './pages/about';
import UniversityProjects from './pages/universityProjects';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
            Home
          </Route>
          <Route exact path='/university-projects' element={<UniversityProjects />}>
            University Projects
          </Route>
          <Route exact path='/about' element={<About />}>
            About
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
