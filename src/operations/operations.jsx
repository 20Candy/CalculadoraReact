import React from 'react'

function Operation({ value, onClick }) {
    let name = ''

    if (value === '/' || value === '*' || value === '+' || value === '-' || value === '=') {
        name = 'calculator-keyboard_operator_key'
    } else {
        name = 'calculator-keyboard_operator_key_Grey'
    }
    return (
        <button type="button" className={name} onClick={() => onClick(value)}>
            {value}
            {' '}
        </button>
    )
}

export default Operation
