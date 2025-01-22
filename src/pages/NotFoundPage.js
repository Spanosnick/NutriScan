import {useEffect} from "react";
import {useNavigate,} from "react-router-dom";


export default function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(() => {

        setTimeout(() => {
            navigate(-1);
        }, 1000)
    }, []);

    return (
        <section className='aboutSection' id='about'>
            <h2>NOT FOUND PAGE</h2>
        </section>
    );
}
