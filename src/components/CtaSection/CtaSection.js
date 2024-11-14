import React from 'react';
import './CtaSection.css';

export function CtaSection() {

    return (
        <section className='cta_section'>
            <div className='cta_container'>
                <h2 className='cta_title'>Επικοινωνία</h2>
                <p className='cta_description'>Συμπληρώστε το email σας παρακάτω για να μάθετε πρώτοι τα νέα και τις
                    λειτουργίες του <span>NutriScan</span> </p>
                <form className='cta_form'>
                    <input type='email' placeholder='Το email σας'/>
                    <button>Εγγραφή</button>
                </form>
            </div>
        </section>
    );
}
