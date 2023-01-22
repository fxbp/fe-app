import { List } from "@mui/material";
import TowerItem from "./TowerItem";


const TowerList = ({towerListDefinition}) => {

    console.log(`TowerList: ${JSON.stringify(towerListDefinition)}`);

    return(
        <div>
            <p> this is a tower list</p>
            {
                <List >
                    { 
                        towerListDefinition && towerListDefinition.map((towerItem, index) => {
                        return <TowerItem 
                            key={index}
                            towerName = {towerItem?towerItem.towerName:"NO_NAME"}
                            totalShrines = {towerItem?towerItem.shrines.length:0}
                            totalKoroks = {towerItem?towerItem.totalKoroks:0}
                        />
                    })
                    }
                </List>
            }
        </div>
        );
}

export default TowerList;