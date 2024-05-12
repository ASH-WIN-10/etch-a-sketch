const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const rows = document.createElement('div');
    rows.className = 'row';
    container.append(rows);
    for (let j = 0; j < 16; j++) {
        const innerDiv = document.createElement('div');
        innerDiv.className = 'innerDiv';
        rows.append(innerDiv);
    }
}

const divs = document.querySelectorAll('.innerDiv');
divs.forEach(div => {
    div.addEventListener('mouseover', () => {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
});