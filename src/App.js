import './App.css';
import {Header} from "./components/Header/Header";
import {HeroSection} from "./components/HeroSection/HeroSection";
import {AboutSection} from "./components/AboutSection/AboutSection";


function App() {
  return (
    <div className="App">
      <Header />
        <HeroSection />
        <AboutSection />
    </div>
  );
}

export default App;
