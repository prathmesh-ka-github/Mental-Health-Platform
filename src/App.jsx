import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BackGradients from './components/BackGradients';
import Faq from './components/Faq';
import How from './components/How';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className='-z-10 back-light transition-all'>
      <NavBar/>
      <Home/>
      <How/>
      <Faq/>
      <Solutions/>
      <BackGradients/>
      <div id="test-space" className="h-[5000px]"></div>
    </div>
  )
}

export default App;
