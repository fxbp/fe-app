import { Grid } from '@mui/material'
import TowerItem from './TowerItem'

const TowerList = ({ towerListDefinition }) => {
    return (
        <div>
            <p> this is a tower list</p>
            <Grid container spacing={2} columns={{ xs: 1, sm: 12 }}>
                {towerListDefinition &&
                    towerListDefinition.map((towerItem, index) => {
                        return (
                            <Grid item xs={12}>
                                <TowerItem
                                    key={index}
                                    towerName={
                                        towerItem
                                            ? towerItem.towerName
                                            : 'NO_NAME'
                                    }
                                    totalShrines={
                                        towerItem ? towerItem.shrines.length : 0
                                    }
                                    totalKoroks={
                                        towerItem ? towerItem.totalKoroks : 0
                                    }
                                />
                            </Grid>
                        )
                    })}
            </Grid>
        </div>
    )
}

export default TowerList
