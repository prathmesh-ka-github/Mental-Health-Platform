import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BackGradients from './components/BackGradients';
import Faq from './components/Faq';
import How from './components/How';
import Solutions from './components/Solutions';
import Info from './components/Info';
import Top from './components/Top';
import TheySay from './components/TheySay';
import WorkWithUs from './components/WorkWithUs';
import Pricing from './components/Pricing';
import Confidentiality from './components/Confidentiality';

function App() {
  return (
    <div className='-z-30 back-light transition-all'>
      <Top/>
      <NavBar/>
      <Home/>
      <How/>
      <Confidentiality/>
      <Faq/>
      <Solutions/>
      <TheySay/>
      <Pricing/>
      <WorkWithUs/>
      <BackGradients/>
      {/* <div id="test-space" className="h-[5000px]"></div> */}
    </div>
  )
}

export default App;
