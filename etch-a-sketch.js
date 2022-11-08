function createBoard () {
    const maxLength = Math.min(getDOMWidth(), getDOMHeight());
    const board = document.createElement('div');
    board.id = 'board';
    board.style.height = maxLength;
    board.style.width = maxLength;
    document.body.appendChild(board);

    return board;
}

function createResizeButton(width, height = width) {
    const btn = document.createElement('button');
    btn.style.width = width;
    btn.style.height = height;
    btn.textContent = 'Resize';
    btn.style.fontSize = width / 5;

    btn.addEventListener('click', () => {
        const gridSize = prompt('Enter a new grid size');
        if (gridSize >= 1 && gridSize <= 100) {
            deleteBoard();
            populateBoard(getBoard(), gridSize);
        }
    });

    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = getRandColor();
        btn.style.color = 'white';
    });
    
    return btn;  
}

function createTile(width, height = width) {
    const tile = document.createElement('div');
    tile.style.width = width;
    tile.style.height = height;
    tile.classList.add('tile');

    tile.addEventListener('mouseover', () => {
        tile.style.backgroundColor = getRandColor();
        decreaseOpacity(tile);
    });

    return tile;
}

function deleteBoard() {
    document.body.removeChild(getBoard());
}

function getBoard() {
    const board = document.querySelector('#board');
    return board || createBoard();
}

function getDOMHeight() {
    return Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
}

function getDOMWidth() {
    return Math.max(document.body.scrollWidth, document.body.offsetWidth,
        document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
}

function getRandColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function decreaseOpacity(tile, mag = 0.1) {
    if (tile.style.opacity === '') {
        tile.style.opacity = 1;
    } else if (tile.style.opacity > 0) {
        tile.style.opacity -= Math.min(mag, tile.style.opacity);
    }
}

function populateBoard(board, horzTiles = 16, vertTiles = horzTiles) {
    console.log(`populating board (${horzTiles.toString()} x ${vertTiles.toString()})...`);
    for (let i = 0; i < vertTiles; i++) {
        for (let j = 0; j < horzTiles; j++) {
            if (i === 0 && j === 0) {
                board.append(createResizeButton(board.clientHeight / horzTiles));
            } else {
                board.append(createTile(board.clientHeight / horzTiles));
            }
        }
    }
    console.log('done');
}

populateBoard(getBoard());