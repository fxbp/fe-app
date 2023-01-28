import { Button } from '@mui/material'
import { useState } from 'react'

const IncreaseDecreaseComponent = () => {
    const [value, setValue] = useState(0)

    const increaseValue = () => {
        setValue((prevValue) => prevValue + 1)
    }

    const decreaseValue = () => {
        setValue((prevValue) => prevValue - 1)
    }

    return (
        <div>
            <Button color="secondary" onClick={decreaseValue}>
                -
            </Button>
            <Button color="primary" onClick={increaseValue}>
                +
            </Button>
            <span>total: {value}</span>
        </div>
    )
}

export default IncreaseDecreaseComponent
