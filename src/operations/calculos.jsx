

function Resultado(number1, number2,currenOperator) {
    let resul = 0
    
    switch (currenOperator) {
        case '+':
            resul = (Number(number1) + Number(number2))

            if (resul > 999999999) {
                resul = 'ERROR'
            } else {
                resul = String((Number(number1) + Number(number2)))
                resul= resul.substring(0, 9)
            }

            break
        case '-':
            resul = (Number(number1) - Number(number2))
            if (resul < 0) {
                resul = 'ERROR'
            } else {
                resul = String((Number(number1) - Number(number2)))
                resul = resul.substring(0, 9)
            }

            break
        case '*':
            resul = (Number(number1) * Number(number2))

            if (resul > 999999999) {
                resul = 'ERROR'
            } else {
                resul = String((Number(number1) * Number(number2)))
                resul = resul.substring(0, 9)
            }
            break

        case '/':
            if (number2 === '0') {
                resul = 'ERROR'
            } else {
                resul = String((Number(number1) / Number(number2)))
                resul = resul.substring(0, 9)
            }

            break

        case '%':
            resul = String((Number(number1) % Number(number2)))
            resul = resul.substring(0, 9)
            break

        default:
            break
        }

        return resul
    }

export default Resultado
