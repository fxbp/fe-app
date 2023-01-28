import { render, screen, fireEvent } from '@testing-library/react'
import IncreaseDecreaseComponent from './IncreaseDecreaseComponent'

beforeEach(() => {
    render(<IncreaseDecreaseComponent />)
})

test('should increase value by 1 in default state', () => {
    const increaseButton = screen.getByRole('button', { name: '+' })
    expect(increaseButton).toBeInTheDocument()

    fireEvent.click(increaseButton)
    const totalText = screen.getByText(/total: 1/i)
    expect(totalText).toBeInTheDocument()
})

test('should decrease value by 1 in default state', () => {
    const decreaseButton = screen.getByRole('button', { name: '-' })
    expect(decreaseButton).toBeInTheDocument()

    fireEvent.click(decreaseButton)
    const totalText = screen.getByText(/total: -1/i)
    expect(totalText).toBeInTheDocument()
})

test('should have 0 value when increase and decrease in default state', () => {
    const decreaseButton = screen.getByRole('button', { name: '-' })
    const increaseButton = screen.getByRole('button', { name: '+' })

    fireEvent.click(increaseButton)
    fireEvent.click(decreaseButton)

    const totalText = screen.getByText(/total: 0/i)
    expect(totalText).toBeInTheDocument()
})
