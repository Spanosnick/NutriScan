import React, {useState} from 'react';
import './CtaSection.css';

export function CtaSection() {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
        setDisabled(event.target.value.length === 0);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://nickport.com/save_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            setMessage(result.message);
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <section className='cta_section'>
            <div className='cta_container'>
                <h2 className='cta_title'>Επικοινωνία</h2>
                <p className='cta_description'>Συμπληρώστε το email σας παρακάτω για να μάθετε πρώτοι τα νέα και τις
                    λειτουργίες του <span>NutriScan</span> </p>
                <form className='cta_form' onSubmit={handleSubmit}>
                    <input type='email' onChange={handleEmailChange} placeholder='Το email σας'/>
                    <button  disabled={disabled}>Εγγραφή</button>
                </form>
                {message && <p className='returnMessage'> {message}</p>}
            </div>
        </section>
    );
}
