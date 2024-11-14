import './App.css';
import {Header} from "./components/Header/Header";
import {HeroSection} from "./components/HeroSection/HeroSection";
import {AboutSection} from "./components/AboutSection/AboutSection";
import {BenefitsSection} from "./components/BenefitsSection/BenefitsSection";


function App() {
  return (
    <div className="App">
      <Header />
        <HeroSection />
        <AboutSection />
      <BenefitsSection />
    </div>
  );
}

export default App;
