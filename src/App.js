import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
