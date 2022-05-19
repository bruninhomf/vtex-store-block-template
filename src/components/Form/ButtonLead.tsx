import * as React from 'react'
import { ButonProps } from './FormProps'
import Class from './Style.module.css'

export const ButtonLead = ({ name, type, text }: ButonProps) => {
    return (
        <>
            <div className={Class.inputGroup}>
                <button 
                    className={Class.button}
                    type={type} 
                    name={name}
                >
                    {text}
                </button>
            </div>
        </>
    )
}
