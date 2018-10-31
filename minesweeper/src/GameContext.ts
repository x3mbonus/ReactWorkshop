import * as React from "react";

export interface IGameContext{
    fieldSize:number;
    totalBombs:number;
    leftBombs:number;
    isGameStarted:boolean;
    isGameOver:boolean;
    startGame?:Function;
    cells?:string[][],
    areBombsSetup:boolean,
    click?:Function
}

export const GameContext = React.createContext<IGameContext>({
    fieldSize:0,
    totalBombs:0,
    leftBombs:0,
    isGameStarted:false,
    isGameOver:false,
    areBombsSetup:false
});