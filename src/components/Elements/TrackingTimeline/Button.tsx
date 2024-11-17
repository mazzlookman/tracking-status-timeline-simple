import React from "react";

interface ButtonProps {
    text: string;
    bgColor: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, onClick }) => {
    return (
        <button
            className={`mx-2 py-2 px-2 ${bgColor} outline-none text-white rounded-sm text-center`}
            onClick={ onClick }
        >
            { text }
        </button>
    )
}

export default Button;