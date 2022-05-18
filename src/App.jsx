import React, { useState } from 'react'
import NumberButton from './number/number'
import Operation from './operations/operations'
import Resultado from './operations/calculos'

function App() {
    const [result, setResult] = useState('')
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')

    let resul = 0

    const [currenOperator, setCurrentOperator] = useState('')

    const allClear = () => {
        setNumber1('')
        setNumber2('')
        setCurrentOperator('')
        setResult('')
    }

    const clickNumber = (value) => {
        if (currenOperator === '') {
            if (number1.toString().length < 9) {
                setNumber1(number1 + value)
            }
        } else if (number2.toString().length < 9) {
            setNumber2(number2 + value)
        }
    }

    const clickOperation = (value) => {
        if (number1 !== '') {
            setCurrentOperator(value)
        }
    }

    const clickChange = () => {
        setNumber1(`-${number1}`)
    }

    const getResult = () => {
        console.log(Resultado(number1,number2,currenOperator))
        setResult(Resultado(number1,number2,currenOperator))
    }

    return (

        <div className="calculator">

            <div className="calculator-displayPrevios">{currenOperator ? number1 + currenOperator : ''}</div>
            <div className="calculator-displayLast">{result || (!currenOperator ? number1 : number2)}</div>

            <div className="calculator-keyboard_container_numbers">

                <Operation value="C" onClick={allClear} />
                <Operation value="+/-" onClick={clickChange} />
                <Operation value="%" onClick={clickOperation} />
                <Operation value="/" onClick={clickOperation} />

                <NumberButton value="7" onClick={clickNumber} />
                <NumberButton value="8" onClick={clickNumber} />
                <NumberButton value="9" onClick={clickNumber} />
                <Operation value="*" onClick={clickOperation} />

                <NumberButton value="4" onClick={clickNumber} />
                <NumberButton value="5" onClick={clickNumber} />
                <NumberButton value="6" onClick={clickNumber} />
                <Operation value="-" onClick={clickOperation} />

                <NumberButton value="1" onClick={clickNumber} />
                <NumberButton value="2" onClick={clickNumber} />
                <NumberButton value="3" onClick={clickNumber} />
                <Operation value="+" onClick={clickOperation} />

                <NumberButton value="0" onClick={clickNumber} />
                <NumberButton value="." onClick={clickNumber} />
                <Operation value="=" onClick={getResult} />

            </div>

        </div>

    )
}

export default App
