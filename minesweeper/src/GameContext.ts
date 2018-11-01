import * as React from "react";

export class ContextGameCell {
    constructor(){};
    hasBomb:boolean;  
    isOpened:boolean;  
    bombsNear?:number;
    isMarked:boolean;
    isEmpty(){
        return !this.isOpened && !this.isMarked;
    }
}

export interface IGameContext{
    fieldSize:number;
    totalBombs:number;
    leftBombs:number;
    isGameStarted:boolean;
    isGameOver:boolean;
    startGame?:Function;
    cells?:ContextGameCell[][],
    areBombsSetup:boolean,
    openCell?:Function
    markCell?:Function
}

export const GameContext = React.createContext<IGameContext>({
    fieldSize:0,
    totalBombs:0,
    leftBombs:0,
    isGameStarted:false,
    isGameOver:false,
    areBombsSetup:false
});