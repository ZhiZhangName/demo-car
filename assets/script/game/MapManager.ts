import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { GameMap } from './GameMap';
@ccclass('MapManager')
export class MapManager extends Component {
    public currPath: Node[] = [];
    public resetMap() {
        const currMap = this.node.children[0].getComponent(GameMap);
        this.currPath = currMap.path;
    }
}


