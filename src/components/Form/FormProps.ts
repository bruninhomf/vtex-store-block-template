export interface InputProps {
    type: string;
    name: string;
    text: string;
    value: string;
    placeholder: string;
}

export interface ButonProps {
    name: string;
    type: "button" | "submit" | "reset"; 
    text: string;
}