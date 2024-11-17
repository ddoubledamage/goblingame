import './css/style.css';
import goblinImage from './img/goblin.png';
import * as Math from "node-forge";

const gridSize = 4;
const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);

for (let i = 0; i < gridSize * gridSize; i++){
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
}

const goblin = document.createElement('img');
goblin.src = goblinImage;
goblin.className = 'goblin';
grid.appendChild(goblin);

function moveGoblin(){
    const cells = document.querySelectorAll('.cell');
    const random = Math.floor(Math.random() * cells.length);
    const randomCell = cells[random];

    if (character.parentElement !== cell) {
        randomCell.appedChild('goblin')
    }
}

setInterval(moveGoblin, 1000);
