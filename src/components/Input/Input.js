import styles  from './Input.module.css';

export function Input({label, type, placeholder, value, onChange ,ref,generalStyle,inputStyle,inputName}) {
    return (
        <div className={`${styles.inputContainer} ${generalStyle} `} >
                <label htmlFor={inputName}>{label}</label>
                <input  type={type} placeholder={placeholder} className={inputStyle} value={value} onChange={onChange}
                        onInput={onChange} name={inputName} id={inputName} ref={ref}/>
        </div>
    )
}
