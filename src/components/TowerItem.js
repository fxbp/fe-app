import { ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import TowerIcon from "../icons/Torre.png"



const TowerItem = ({towerName, totalShrines, totalKoroks}) =>{

    console.log("tower Item")
    console.log(towerName,totalShrines,totalKoroks)
  
    return (
        <ListItem>
            <ListItemAvatar>
                <TowerIcon />
            </ListItemAvatar>
            <ListItemText
                primary={towerName}
            />
        </ListItem>
    );

}

export default TowerItem;