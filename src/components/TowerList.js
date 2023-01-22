import TowerItem from "./TowerItem";


const TowerList = ({towerListDefinition}) => {

    console.log(`TowerList: ${JSON.stringify(towerListDefinition)}`);

    return(
        <div>
            <p> this is a tower list</p>
            {
                towerListDefinition && towerListDefinition.map((towerItem, index) =>
                    <TowerItem 
                        key={index}
                        towerName = {towerItem?towerItem.towerName:"NO_NAME"}
                        totalShrines = {towerItem?towerItem.shrines.length:0}
                        totalKoroks = {towerItem?towerItem.totalKoroks:0}
                    />
                )
            }
        </div>
        );
}

export default TowerList;