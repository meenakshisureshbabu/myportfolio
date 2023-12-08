import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import {Routes,Route} from 'react-router-dom'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = {<Body/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
