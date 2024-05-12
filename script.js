const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const rows = document.createElement('div');
    rows.className = 'row';
    container.append(rows);
    for (let j = 0; j < 16; j++) {
        const innerDiv = document.createElement('div');
        innerDiv.className = 'innerDiv';
        innerDiv.setAttribute('draggable', false)
        rows.append(innerDiv);
    }
}

const divs = document.querySelectorAll('.innerDiv');
divs.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
});