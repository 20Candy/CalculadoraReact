import React from 'react'

function NumberButton({ value, onClick }) {
    let name = ''

    if (value === '0') {
        name = 'calculator-keyboard_operator_key_cero'
    } else {
        name = 'calculator-keyboard_number_key'
    }

    return (
        <button type="button" className={name} onClick={() => onClick(value)}>{value}</button>
    )
}

export default NumberButton
