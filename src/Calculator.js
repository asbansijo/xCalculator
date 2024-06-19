// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            if (input.trim() === '' || /[+\-*/]$/.test(input)) {
                setResult('Error');
            } else {
                try {
                    setResult(eval(input));
                } catch (error) {
                    setResult('Error');
                }
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <input type="text" value={input} readOnly />
            <div>{result}</div>
            <div className="buttons">
                {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((button) => (
                    <button key={button} onClick={() => handleClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
