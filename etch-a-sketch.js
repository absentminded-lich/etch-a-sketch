function createBoard () {
    const board = document.createElement('div');
    board.id = 'board';
    board.style.height = getDOMHeight();
    board.style.width = board.style.height;
    document.body.appendChild(board);

    return board;
}

function createTile(width, height = width) {
    const tile = document.createElement('div');
    tile.style.width = width;
    tile.style.height = height;
    tile.classList.add('tile');

    tile.addEventListener('mouseover', () => tile.classList.add('tile-on'));

    return tile;
}

function getBoard() {
    const board = document.querySelector('#board');
    return board || createBoard();
}

function getDOMHeight() {
    return Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
}

function populateBoard(board, horzTiles = 16, vertTiles = horzTiles) {
    console.log(`populating board (${horzTiles.toString()} x ${vertTiles.toString()})...`);
    for (let i = 0; i < vertTiles; i++) {
        for (let j = 0; j < horzTiles; j++) {
            board.append(createTile(getDOMHeight() / horzTiles));
        }
    }
    console.log('done');
}

populateBoard(getBoard());