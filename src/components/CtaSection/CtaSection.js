import React, {useState} from 'react';
import './CtaSection.css';

export function CtaSection() {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState('test@gmail.com');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    function handleEmailChange(event) {
        setEmail(event.target.value);
        setDisabled(event.target.value.length === 0);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isValidEmail(email)) {
            setMessage('Please enter a valid email address.');
        }else {
            setLoading(true);
            try {
                const response = await fetch('https://nickport.com/save_email.php', {
                    method: 'POST',
                    headers: {
                       "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });
                const result = await response.json();
                setMessage(result.message);


            } catch (error) {
                setMessage('An error occurred. Please try again.');
            }

            setTimeout(() => {
                setLoading(false);
                setEmail('');
                setDisabled(true);
                setMessage('');
            },5000)
        }

    };
    function isValidEmail(email) {
        // Regular expression to validate an email address
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }



    return (
        <section className='cta_section'>
            <div className='cta_container'>
                <h2 className='cta_title'>Επικοινωνία</h2>
                <p className='cta_description'>Συμπληρώστε το email σας παρακάτω για να μάθετε πρώτοι τα νέα και τις
                    λειτουργίες του <span>NutriScan</span> </p>
                <form className='cta_form' onSubmit={handleSubmit}>
                    <input type='email' onChange={handleEmailChange} value={email} placeholder='Το email σας'/>
                    <button  disabled={disabled}>Εγγραφή</button>
                </form>
                {message && <p className='returnMessage'> {message}</p>}
                {loading && <div className="d-flex justify-content-center align-items-center" >
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
            </div>
        </section>
    );
}
