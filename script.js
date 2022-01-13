/**/
// Do Not Open this file for copying the script! Remember this won't do 
//you any good and you won't learn to code like a real developer!
//Always search on google for anything you  don't understand.
//This script can be good for you to use as a refernce AFTER you have completed your website

/**/

const grids=document.querySelector('.grid-container')
const clear=document.querySelector('.clear')
const colorBtn=document.querySelector('.color')
const text=document.querySelector('.text-info')
const btn=document.querySelectorAll('.left-buttons button')
const themeSwitcher=document.querySelector('.theme i')
const leftside=document.querySelector('.left-buttons')
const sktchArea=document.querySelector('.sketch-area')
const footer=document.querySelector('.footer')
const header=document.querySelector('.header')
const colorShadow=document.querySelector("#colorWell")
const ui=document.querySelector(".ui")
let click="clear"
let items = document.querySelectorAll('.grid-item');
let param=document.querySelector('.param')
let borderBtn=document.querySelector('.border')
let borderMode="bordered"
let mode="dark_mode"
let rows=16
let columns=16
let text_mode="og"
let color="yellowgreen"
let parameter='mouseover'
let paramState=0


function gridSelector(){ //takes input from user. Default grid is 16x16
  rows=16;
  columns=16
  return(makeGrid(rows,columns))
}


////////////////GRID MAKER\\\\\\\\\\\\\\\\\\\\
makeGrid(rows,columns,borderMode)//defualt grid
function makeGrid(rows,columns){
    grids.style.setProperty('--grid-rows',rows)
    grids.style.setProperty('--grid-columns',columns)
    for (let i = 0; i < (rows * columns); i++) {
      let items = document.querySelectorAll('.grid-item');
        let cell = document.createElement("div");

        if(borderMode=="borderless"){
          items.forEach(item => {
            item.style.border = "";
          })
        }
        else if(borderMode=="bordered"){
          items.forEach(item => {
            item.style.border = "1px solid black";
        })}

      cell.classList.add('grid-item');
      grids.appendChild(cell);
      };
      hoverColor(color,parameter);
    }

//*///////////////CLEAR GRID\\\\\\\\\\\\\\\\\\\*/
function clearGrid(rows,columns,parameter,color,click){
  if(click=="mode"){
  while(grids.firstChild) {
    grids.removeChild(grids.lastChild)
  }return(makeGrid(rows,columns))}
  else if(click=="clear"){
    let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
      item.style.backgroundColor = "whitesmoke";
  })
}
}
/*//////////////////////\\\\\\\\\\\\\\\\\\\\\*/



/******************************* */
/*Grid Color*/
function hoverColor(color,parameter) {
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.addEventListener(parameter, () => {
      item.style.backgroundColor = color;
    });
  });
}
/******************************* */

////////////////////BORDERED OR BORDERLESS\\\\\\\\\\\\\\\\\\\
function borderChange(borderMode){
  let items = document.querySelectorAll('.grid-item');
  if(borderMode=="bordered"){
   while(grids.firstChild) {
    grids.removeChild(grids.lastChild)
  }return(makeGrid(rows,columns,borderMode))
  }

  else if(borderMode=="borderless"){
    while(grids.firstChild) {
      grids.removeChild(grids.lastChild)
    }return(makeGrid(rows,columns,borderMode))
  }

}

/*////////////////////\\\\\\\\\\\\\\\\\\\\\* /
/*Basic animations for buttons and alot of the things you see!*/

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

colorBtn.addEventListener('click', ()=>{
  colorShadow.style.boxShadow="0 0 5px " +color
})

function ogShadow(color){
  colorShadow.style.boxShadow="0 0 20px "+color

}

clear.addEventListener("click", ()=>{
  click="clear"
  return (clearGrid(rows,columns,parameter,color,click))

}) 

text.addEventListener('mouseover', ()=>{
  text.style.color="rgb(0, 255, 0)"
  text_mode="changed"
})
text.addEventListener('mouseout', ()=>{
  text.style.color="red"
  text_mode="changed"
})
/*///////////////////////*/

/*//////////Dark/Light Mode SWItCHER + HOVER/CLICK SWITCHER////////////*/
themeSwitcher.addEventListener('click', ()=>{
  if(mode=="light_mode"){
      themeSwitcher.textContent="light_mode"
      themeSwitcher.style.color="white"
      mode="dark_mode"
      leftside.style.backgroundColor="rgb(26, 25, 25)"
      ui.style.backgroundColor="rgb(26, 25, 25)"
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
    ui.style.backgroundColor="white"
    leftside.style.backgroundColor="white"
    sktchArea.style.backgroundColor="white"
    header.style.backgroundColor="white"
    footer.style.backgroundColor="black"
    if(text_mode=="og"){
    text.style.color="white"}
  }
})

//Click or Hover Selector
param.addEventListener('click', ()=>{
  if(parameter=='mouseover'){
    parameter='click';
    click="mode"
    paramState=1
    param.textContent="Hover Fill"
    return(clearGrid(rows,columns,color,parameter,click))
  }
  else if(parameter=='click'){
    parameter='mouseover';
    click="mode"
    param.textContent="Click Fill"
    return(clearGrid(rows,columns,color,parameter,click))
  }
})

//border or borderless
borderBtn.addEventListener('click',()=>{
  if(borderMode=="bordered"){
    borderMode="borderless"
    borderBtn.textContent="Bordered"
    borderChange(borderMode)
  }
  else if(borderMode=="borderless"){
    borderMode="bordered"
    borderBtn.textContent="Border Less"
    borderChange(borderMode)
  }
})

//COLOR PICKER\\\\\\\\\\
var colorWell;
var defaultColor = "#9acd32";

window.addEventListener("load", startup, false);
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.addEventListener("input", updateFirst, false);
  function updateFirst(event) {
      color = event.target.value;
      colorShadow.style.boxShadow="0 0 20px "+event.target.value

      if(color=="#000000" || color=="#444444" || color=="#232323"){
        colorShadow.style.boxShadow="0 0 20px yellowgreen"
      }
      console.log(color)
      return(hoverColor(color,parameter))
    }
  }
/*/////////////////////////////////////////////*/