import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  const [input,setInput] = useState('0');

  const upDateDisplay = n => {
    setInput((input === '0' ? n : input + n));
  };

  const dotInput = (n) => {
    if (input.lastIndexOf('.') < 0) {
      setInput(input + n);
    } else if (
      (input.lastIndexOf('+') >= 0) && (input.lastIndexOf('.') < input.lastIndexOf('+')) ||
      (input.lastIndexOf('-') >= 0) && (input.lastIndexOf('.') < input.lastIndexOf('-')) ||
      (input.lastIndexOf('*') >= 0) && (input.lastIndexOf('.') < input.lastIndexOf('*')) ||
      (input.lastIndexOf('/') >= 0) && (input.lastIndexOf('.') < input.lastIndexOf('/'))
    ) { 
      setInput(input + n);
    }
  };

  const doOperation = (n) => {
    let busca = /[\+\-\*\/]$/;
    let busca2 = /[\+\-\*\/].$/;
    if ( (n === '+' || n === '*' || n === '/') && busca.test(input) ) {
      if ( input[input.length - 1] === '-' && busca2.test(input)) {
        setInput(input.slice(0,input.length-2) + n);
      } else {
        setInput(input.slice(0,input.length-1) + n);
      }
    } else {
      setInput(input + n);
    }
  }

  const result = () => {
    setInput(evaluate(input));
  };

  return (
    <div className='main-container'>
      <div className='fila'>
        <Display input={input}/>
      </div>
      <div className='fila'>
        <Boton presionarBoton={upDateDisplay}>1</Boton>
        <Boton presionarBoton={upDateDisplay}>2</Boton>
        <Boton presionarBoton={upDateDisplay}>3</Boton>
        <Boton presionarBoton={doOperation}>+</Boton>
      </div>
      <div className='fila'>
        <Boton presionarBoton={upDateDisplay}>4</Boton>
        <Boton presionarBoton={upDateDisplay}>5</Boton>
        <Boton presionarBoton={upDateDisplay}>6</Boton>
        <Boton presionarBoton={upDateDisplay}>-</Boton>
      </div>
      <div className='fila'>
        <Boton presionarBoton={upDateDisplay}>7</Boton>
        <Boton presionarBoton={upDateDisplay}>8</Boton>
        <Boton presionarBoton={upDateDisplay}>9</Boton>
        <Boton presionarBoton={doOperation}>*</Boton>
      </div>
      <div className='fila'>
        <Boton presionarBoton={upDateDisplay}>0</Boton>
        <Boton presionarBoton={dotInput}>.</Boton>
        <Boton presionarBoton={result}>=</Boton>
        <Boton presionarBoton={doOperation}>/</Boton>
      </div>
      <div className='fila'>
        <Clear borrarPantalla={() => setInput('0')}>CLEAR</Clear>
      </div>
    </div>
  )
};

function Display({ input }) {
  return(
    <div 
      className='display'
      id='display'>
      {input}
    </div>
  );
};

function Boton(props) {
  
  const idBotones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
    '.': 'decimal',
    '=': 'equals'
  };

  const mathOp = (contenido) => {
    return isNaN(contenido);
  }

  return (
    <div
      id={idBotones[props.children]} 
      className={`boton-container ${mathOp(props.children) ? 'math-operator' : ''}`.trimEnd()} 
      onClick={() => props.presionarBoton(props.children)}>
      {props.children}
    </div>
  );
};

function Clear(props) {
  return(
    <div 
      id='clear' 
      className='boton-clear'
      onClick={props.borrarPantalla}>
      {props.children}
    </div>
  )
};