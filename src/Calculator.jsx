import React, { useState } from 'react';
import 'animate.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleScientificFunction = (func) => {
    try {
      let result;
      switch (func) {
        case 'sin':
          result = Math.sin(eval(input));
          break;
        case 'cos':
          result = Math.cos(eval(input));
          break;
        case 'tan':
          result = Math.tan(eval(input));
          break;
        case 'sqrt':
          result = Math.sqrt(eval(input));
          break;
        case 'log':
          result = Math.log10(eval(input));
          break;
        default:
          result = input;
      }
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator container mt-1">
      <div className="row justify-content-center">
        <div className="col-12 mt-2  text-center mb-4">
          <h2>Scientific Calculator</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <input
            type="text"
            className="form-control text-right p-3 mb-3"
            value={input}
            disabled
          />
        </div>
      </div>
      {/* Scientific buttons */}
      <div className="row justify-content-center">
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 mb-2" onClick={() => handleScientificFunction('sin')}>sin</button>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 mb-2" onClick={() => handleScientificFunction('cos')}>cos</button>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 mb-2" onClick={() => handleScientificFunction('tan')}>tan</button>
        </div>
        <div className="col-3">
          <button className="btn btn-warning w-100 p-4 mb-2" onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleScientificFunction('sqrt')}>√</button>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('1')}>1</button>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('2')}>2</button>
        </div>
        <div className="col-3">
          <button className="btn btn-warning w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('-')}>-</button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('3')}>3</button>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('4')}>4</button>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('5')}>5</button>
        </div>
        <div className="col-3">
          <button className="btn btn-warning w-100 animate__animated animate__pulse p-4 mb-2" onClick={() => handleClick('*')}>*</button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('6')}>6</button>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('7')}>7</button>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('8')}>8</button>
        </div>
        <div className="col-3">
          <button className="btn btn-warning w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('9')}>9</button>
        </div>
        <div className="col-3">
          <button className="btn btn-dark w-100 p-4 animate__animated animate__pulse mb-2" onClick={() => handleClick('0')}>0</button>
        </div>
        <div className="col-3">
          <button className="btn btn-danger w-100 p-4 animate__animated animate__pulse mb-2" onClick={handleClear}>C</button>
        </div>
        <div className="col-3">
          <button className="btn btn-success w-100 animate__animated animate__pulse p-4 mb-2" onClick={handleEvaluate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
