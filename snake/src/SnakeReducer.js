const LEFT = "left"
const RIGHT = "right"
const UP = "up"
const DOWN = "down"


const initialState = {
    snakeCoords: [{ x: 0, y: 0 }],
    size: 10,
    direction: RIGHT
};

const move = (state) => {
    let newCoord = {
        x: state.snakeCoords[0].x,
        y: state.snakeCoords[0].y
    }
    switch (state.direction) {
        case LEFT:
            newCoord.x--;
            break;
        case RIGHT:
            newCoord.x++;
            break;
        case UP:
            newCoord.y--;
            break;
        case DOWN:
            newCoord.x++;
            break;
    }
    let coords = {...state.snakeCoords};
    coords.unshift(newCoord);
    coords.pop();
    return {...state, snakeCoords: coords};
}

export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TURN_LEFT':
            return { ...state, direction: LEFT };
        case 'TURN_RIGHT':
            return { ...state, direction: RIGHT };
        case 'TURN_UP':
            return { ...state, direction: UP };
        case 'TURN_DOWN':
            return { ...state, direction: DOWN };
        case 'MOVE':
            return move(state);

        default:
            return state;
    }

}