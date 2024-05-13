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
    const colorButton = document.querySelector('#color');
    const eraserButton = document.querySelector('#eraser');
    let eraserBool = false;

    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            eraserButton.addEventListener('click', () => eraserBool = true);
            colorButton.addEventListener('click', () => eraserBool = false);

            let red, green, blue;
            if (eraserBool)
                [red, green, blue] = [255, 255, 255];
            else {
                red = Math.floor(Math.random() * 256);
                green = Math.floor(Math.random() * 256);
                blue = Math.floor(Math.random() * 256);
            }
            
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
        resetButton.addEventListener('click', () => div.style.backgroundColor = 'white');
    });
}


const gridSize = document.querySelector('#changeGridSize');
gridSize.value = 16;   //Default value
gridSize.addEventListener('input', (e) => {
    //Remove existing rows and divs
    const container = document.querySelector('.container');
    const existingRows = document.querySelectorAll('.container>*');
    existingRows.forEach(row => {
        container.removeChild(row);
    });
    
    //Creating the grid
    createGrid(e.target.value);
    colorGrid();
});


//Creating a default 16x16 grid
createGrid(16);
colorGrid();