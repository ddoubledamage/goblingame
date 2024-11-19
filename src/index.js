import './css/style.css';
import goblinImage from './img/goblin.png';

const gridSize = 4;
const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);

// Создаем элемент character
const character = document.createElement('div');
character.className = 'character';
grid.appendChild(character);

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
    const randomIndex = Math.floor(Math.random() * cells.length);
    const randomCell = cells[randomIndex];

    // Проверяем, находится ли goblin в текущей ячейке
    if (goblin.parentElement !== randomCell) {
        randomCell.appendChild(goblin);
    }
}

setInterval(moveGoblin, 1000);
