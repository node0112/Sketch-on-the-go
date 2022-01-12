const grids=document.querySelector('.grid-container')
const clear=document.querySelector('.clear')
const text=document.querySelector('.text-info')
const btn=document.querySelectorAll('.left-buttons button')
const themeSwitcher=document.querySelector('.theme i')
const leftside=document.querySelector('.left-buttons')
const sktchArea=document.querySelector('.sketch-area')
const footer=document.querySelector('.footer')
const header=document.querySelector('.header')
let mode="dark_mode"
let rows=0
let columns=0
let text_mode="og"

function gridSelector(){
  rows=16;
  columns=16
  return(makeGrid(rows,columns))
}

function makeGrid(rows,columns){
    grids.style.setProperty('--grid-rows',rows)
    grids.style.setProperty('--grid-columns',columns)
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        grids.appendChild(cell).className = "grid-item";
      };
}
makeGrid(16,16)


clear.addEventListener("click", gridSelector) 

text.addEventListener('mouseover', ()=>{
  text.style.color="rgb(0, 255, 0)"
  text_mode="changed"
})
text.addEventListener('mouseout', ()=>{
  text.style.color="red"
  text_mode="changed"
})
/*//////////THEME SWItCHER////////////*/
themeSwitcher.addEventListener('click', ()=>{
  if(mode=="light_mode"){
      themeSwitcher.textContent="light_mode"
      themeSwitcher.style.color="white"
      mode="dark_mode"
      leftside.style.backgroundColor="rgb(26, 25, 25)"
      sktchArea.style.backgroundColor="black"
      header.style.backgroundColor="black"
      footer.style.backgroundColor="white"
      if(text_mode=="og"){
          text.style.color="black"}
  }
  else if(mode=="dark_mode"){
    themeSwitcher.textContent="dark_mode"
    themeSwitcher.style.color="black"
    mode="light_mode"
    leftside.style.backgroundColor="white"
    sktchArea.style.backgroundColor="white"
    header.style.backgroundColor="white"
    footer.style.backgroundColor="black"
    if(text_mode=="og"){
    text.style.color="white"}
  }
})


/*////////////////////////*/ 
btn.forEach(btn => {
  btn.addEventListener('mouseover', ()=>{
    btn.style.backgroundColor="green"
    btn.style.color="black"
    btn.style.fontWeight="800"
    btn.style.border="2px solid rgb(188, 255, 2)"
})
})

btn.forEach(btn => {
  btn.addEventListener('mouseout', ()=>{
  btn.style.border="2px solid black"
  btn.style.backgroundColor="black"
  btn.style.color="rgb(188, 255, 2)"
  btn.style.fontWeight="300"
})
})



function clearGrid(rows,columns){
  console.log("hi")
  for (let i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor="red"
    grids.appendChild(cell).className = "grid-item";
  };
}