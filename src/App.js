import './App.css';
import Navbar from './components/section/Navbar';
import Presentation from './components/section/Presentation';
import Skills from './components/section/Skills';
import Footer from './components/section/Footer';
import Projects from './components/section/Projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
