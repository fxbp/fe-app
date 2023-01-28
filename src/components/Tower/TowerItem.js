import { Grid } from '@mui/material'
import TowerIcon from '../../icons/Torre.png'
import IncreaseDecreaseComponent from '../IncreaseDecrease/IncreaseDecreaseComponent'

const TowerItem = ({ towerDefinition }) => {
    const { towerName } = towerDefinition

    return (
        <Grid
            container
            display="flex"
            columns={{ xs: 1, sm: 12 }}
            border="2px solid black"
        >
            <Grid item xs={4} alignItems="center" display="flex">
                <img src={TowerIcon} width={30} alt="tower icon" />

                <div>{towerName}</div>
            </Grid>

            <Grid item xs={2} sm={4} display="flex" alignItems="center">
                <p>Shrines</p>
                <IncreaseDecreaseComponent />
            </Grid>
            <Grid item xs={2} sm={4} display="flex" alignItems="center">
                <p>Koroks</p>
                <IncreaseDecreaseComponent />
            </Grid>
        </Grid>
    )
}

export default TowerItem
