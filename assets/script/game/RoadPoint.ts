import { _decorator, Component, Enum, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

enum ROAD_POINT_TYPE {
    NORMAL = 1,
    START,
    GREETING,
    GOODBYE,
    END,
    AI_START,
}

Enum(ROAD_POINT_TYPE);

enum ROAD_MOVE_TYPE {
    LINE = 1,
    CURVE,
}

Enum(ROAD_MOVE_TYPE);

@ccclass('RoadPoint')
export class RoadPoint extends Component {
    @property({
        type: ROAD_POINT_TYPE,
        displayOrder: 1,
    })
    type = ROAD_POINT_TYPE.NORMAL;

    @property({
        type: Node,
        displayOrder: 2,
        visible: function(this:RoadPoint) {
            return (this.type !== ROAD_POINT_TYPE.END);
        }
    })
    nextStation: Node = null;

    @property({
        type: ROAD_MOVE_TYPE,
        displayOrder: 3,
        visible: function(this:RoadPoint) {
            return (this.type !== ROAD_POINT_TYPE.END);
        }
    })
    moveType = ROAD_MOVE_TYPE.LINE;

    @property({
        displayOrder: 4,
        visible: function(this:RoadPoint) {
            return (this.type !== ROAD_POINT_TYPE.END && this.moveType === ROAD_MOVE_TYPE.CURVE);
        }
    })
    clockWise = true;

    @property({
        type: Vec3,
        visible: function(this:RoadPoint) {
            return (this.type === ROAD_POINT_TYPE.GREETING || this.type === ROAD_POINT_TYPE.GOODBYE);
        }
        //displayOrder: 5,
    })
    direction = new Vec3(1, 0, 0);

    @property({
        visible: function(this:RoadPoint) {
            return (this.type === ROAD_POINT_TYPE.AI_START);
        }
        //displayOrder: 6,
    })
    interval = 3;

    @property({
        visible: function(this:RoadPoint) {
            return (this.type === ROAD_POINT_TYPE.AI_START);
        }
    })
    delayTime = 0;

    @property({
        visible: function(this:RoadPoint) {
            return (this.type === ROAD_POINT_TYPE.AI_START);
        }
        //displayOrder: 7,
    })
    speed = 0.05;

    @property({
        visible: function(this:RoadPoint) {
            return (this.type === ROAD_POINT_TYPE.AI_START);
        }
    })
    cars = 201;

}



