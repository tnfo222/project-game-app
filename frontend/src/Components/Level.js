import React from "react";
import {bush,
    darkGrass,
    cutGrass,
    water,
    } from "../images";
import {GAME_SIZE} from "../constants";
import Grid from "./Grid";

const squares = [];
    for (let i = GAME_SIZE; i > 0; i--){
        if (i === 1 || i === 6){
            squares.push(Array(GAME_SIZE).fill("cutGrass"));
        } else if (i === 2 || i === 5) {
            squares.push(Array(GAME_SIZE).fill("darkGrass"));
        } else if (i === 3 || i === 4) {
            squares.push(Array(GAME_SIZE).fill("water"))
        } else if (i === 9) {
            squares.push(Array(GAME_SIZE).fill("bush"))
        }
    }

function Level() {
    return(
        <div className = "grid">
            {squares.map((row) => {
                return row.map((square, index) => {
                    let src;
                    if (square === "darkGrass") {
                        src = darkGrass;
                    } else if (square === "cutGrass") {
                        src = cutGrass;
                    } else if (square === "water") {
                        src = water;
                    } else if (square === "bush") {
                        src = bush;
                    }
                    return <Grid key={index} src={src} />;
                })
            })}
        </div>
    )
}

export default Level;