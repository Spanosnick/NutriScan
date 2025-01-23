import styles  from './Input.module.css';

export function Input({label, type, placeholder, value, onChange ,ref,generalStyle,inputStyle}) {
    return (
        <div className={styles.inputContainer} >
                <h1>{label}</h1>
                <input  type={type} placeholder={placeholder} value={value} onChange={onChange} ref={ref}/>
        </div>
    )
}
