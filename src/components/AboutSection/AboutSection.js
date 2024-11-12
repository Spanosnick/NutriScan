import React from "react";
import "./AboutSection.css";

export function AboutSection() {
    return (
        <section id='about' className='aboutSection'>
            <div className='aboutMain'>
                <h3>Tι είναι το <span>NutriScan?</span></h3>
                <p>Η <span>NutriScan</span> είναι μια εφαρμογή που επιτρέπει στις επιχειρήσεις που παρασκευάζουν
                    χειροποίητα προϊόντα
                    (όπως σάντουιτς, τορτίγιες, σαλάτες κ.ά.) να προσθέτουν τις διατροφικές αξίες των προϊόντων τους
                    (πρωτεΐνες, υδατάνθρακες, λίπη, θερμίδες κ.λπ.). </p>

                <p>Η εφαρμογή δημιουργεί αυτόματα έναν QR code, τον
                    οποίο μπορούν να σκανάρουν οι πελάτες για να δουν τις διατροφικές πληροφορίες του προϊόντος που
                    επιλέγουν.</p>
            </div>
        </section>
    );
}
