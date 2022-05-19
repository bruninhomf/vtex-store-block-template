import * as React from 'react'
import { InputProps } from './FormProps'
import Class from './Style.module.css'

export const InputLead = ({type, name, text, value, placeholder}: InputProps) => {
    return (
        <>
            <div className={Class.inputGroup}>
                <label className={Class.label}>{text}</label>
                <input 
                    className={Class.input}
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
};
