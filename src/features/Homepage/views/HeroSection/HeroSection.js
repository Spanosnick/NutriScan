import React from "react";
import "./HeroSection.css";
import PeopleFood from "../../../../images/people_food.jpg";

export function HeroSection() {
    return (
        <section className='heroSection'>
            <div className='heroBasic'>
                <h2><span>Αναβαθμίστε </span> την εμπειρία των πελατών σας με διατροφική διαφάνεια.</h2>
                <p>Αφήστε τους πελάτες σας να σκανάρουν QR codes και να ανακαλύψουν τις διατροφικές πληροφορίες των
                    προϊόντων σας.</p>

                <a href='#about'>Δημιουργήστε το Δικό σας QR Code !</a>
            </div>
            <div className='heroSecond'>
                <img src={PeopleFood} alt='Happy People iwth food'/>
            </div>
        </section>
    );
}
