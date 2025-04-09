import '../../../App.css';
import {Header} from "./Header/Header";
import {HeroSection} from "./HeroSection/HeroSection";
import {AboutSection} from "./AboutSection/AboutSection";
import {BenefitsSection} from "./BenefitsSection/BenefitsSection";
import {CtaSection} from "./CtaSection/CtaSection";

export function Homepage() {
  return (
      <div className="App">
          <Header/>
          <HeroSection/>
          <AboutSection/>
          <BenefitsSection/>
          <CtaSection/>
      </div>
  );
}
