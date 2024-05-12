function createGrid(gridSize){
    const container = document.querySelector('.container');
    for (let i = 0; i < gridSize; i++) {
        const rows = document.createElement('div');
        rows.className = 'row';
        container.append(rows);
        for (let j = 0; j < gridSize; j++) {
            const innerDiv = document.createElement('div');
            innerDiv.className = 'innerDiv';
            rows.append(innerDiv);
        }
    }
}

function colorGrid() {
    //Clearing the canvas and color on hover logic
    const divs = document.querySelectorAll('.innerDiv');
    const resetButton = document.querySelector('#reset');

    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            resetButton.addEventListener('click', () => {
                div.style.backgroundColor = 'white';
            });
        });
    });
}


const gridSizeButton = document.querySelector('#changeGridSize');
gridSizeButton.addEventListener('click', () => {
    //Remove existing rows and divs
    const container = document.querySelector('.container');
    const existingRows = document.querySelectorAll('.container>*');
    existingRows.forEach(row => {
        container.removeChild(row);
    });
    
    //Getting the size of the grid
    let gridSize;
    while (1){
        gridSize = Number(prompt("Enter size from 1 to 100:"));
        if (gridSize>0 && gridSize<101)
            break;
        else if (gridSize == 0 || gridSize == null)
            break
        else
            continue;
    }
    
    //Creating the grid
    createGrid(gridSize);
    colorGrid();
});


//Creating a default 16x16 grid
createGrid(16);
colorGrid();