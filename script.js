const grids=document.querySelector('.grid-container')

function makeGrid(rows,columns){
    grids.style.setProperty('--grid-rows',rows)
    grids.style.setProperty('--grid-columns',columns)
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        grids.appendChild(cell).className = "grid-item";
      };
}

makeGrid(16,16);