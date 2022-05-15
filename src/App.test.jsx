import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'

it('Carga UI', () => {
    render(<App />)
})

it('Botón añade número a la pantalla', async () => {
    render(<App />)

    const element = screen.getByText('1')
    expect(element).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('1')).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('11')).toBeInTheDocument()
})

