"use strict";



const elems=document.querySelectorAll(".tool-item");//получаем коллекцию элементов боковой панели
const leftMenu=document.querySelector(".left-menu");//получаем коллекцию элементов боковой панели
let canvas=document.querySelector(".canvas");//получаем холст сертификата
const inputUploadImage=document.querySelector(".inputUploadImage");//получаем input отвечающий за загрузку фона сертификата
const buttonPdfDownload=document.querySelector(".buttonPdfDownload");//получаем кнопку экспорта в pdf
const buttonPdfView=document.querySelector(".buttonPdfView");//получаем кнопку экспорта в pdf
const canvasSize=document.querySelector(".canvasSize");//получаем селект выбора размера сертификата
let canvasRect = canvas.getBoundingClientRect(); // Получаем размеры и положение холста
const editorMain=document.querySelector(".editor-main");
const editorForm=document.querySelector(".editor-form");
const editorContainer=document.querySelector(".editor-container");
const saveButton=document.querySelector(".save-button");
let currentElem;
let dropdownContainer;
let dropdownButton;
let dropdownMenu;
let colorPickerButton;
let colorPickerPalette;
let colorPickerAlign;
let colorPickerAlignDropdown;
let colorPickerAlignWrapper; 
let selectDropdown;
let valueFont;
let boldButton;
let italicButton;
let underlineButton;
let isNotActive;


let elemsOnCanvas=canvas.children;
let inputsOnEditor=editorMain.children;
let isDrag=false;
let offsetElem=[0,0];
let countInputs = 0;
let isCanvasHorizont=true;
let hasInteracted = false; 
let currentElemOnCanvas;
let currentDragElem;
const nameOfEditor={
  "elemNum":"Номер сертификата",
  "elemTheme":"Тема сертификата",
  "elemDate":"Дата сертификата",
  "elemName":"Имя и фамилия",
  "elemImg":"Изображение",
  "elemTxt":"Текст",
};

// for resize img
let keepRatio = false;
let prevEvDefult=false;


leftMenu.addEventListener("dragstart",(event)=>{
  if(event.target.classList.contains("tool-item")){
    currentDragElem=event.target.id;
    // console.log(currentDragElem);
  };
});


document.addEventListener("DOMContentLoaded", () => {
  
  canvas.addEventListener("drop", drop);
  canvas.addEventListener("dragover", allowDrop);
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  
  function elemBuilder(el,offsetX,offsetY){
    el.style.position = "absolute";
    el.style.left = offsetX - 130 + "px";
    el.style.top = offsetY - 40 + "px";
    countInputs++;
    el.id = countInputs;        
    el.placeholder = el.id;
    //el.textContent=nameOfEditor[`${currentDragElem}`];
    el.classList.add("isNotActive");
    el.classList.add("elem-canvas");
    el.classList.add("border-elem")
    // el.addEventListener("click",AddMoveable());
    if(currentDragElem=="elemImg") {
      keepRatio = true;
      prevEvDefult=true;
      // el.style.height=80+"px";
      // el.style.width=80+"px";
      el.style.height="auto";
      el.style.left = offsetX - 73 + "px";
      el.style.top = offsetY - 70 + "px";
      el.onmousedown=AddMoveable(el);
    }
    else {
      el.insertAdjacentHTML("afterbegin",
      `
      <div class="dropdown_container" id="${countInputs}">
            <div class="dropdown_button">
              <img src="img/dropdown.svg" alt="" class="dropdown_button-img" id="${countInputs}" onclick="clickDropdownButton(event)" draggable="false">
            </div>
            <div class="dropdown_menu_wrapper point_dropdown" id="${countInputs}">
              <div class="dropdown_menu point_dropdown">
              <select name="" id="${countInputs}" class="select_dropdown point_dropdown">
                <option class="point_dropdown" value="Alegreya" style="font-family:'Alegreya'">Alegreya</option>
                <option class="point_dropdown" value="Alegreya SC" style="font-family:'Alegreya SC';">Alegreya SC</option>
                <option class="point_dropdown" value="Alegreya Sans" style="font-family:'Alegreya Sans';">Alegreya Sans</option>
                <option class="point_dropdown" value="Alice" style="font-family:'Alice';">Alice</option>
                <option class="point_dropdown" value="Amatic SC" style="font-family:'Amatic SC';">Amatic SC</option>
                <option class="point_dropdown" value="Bad Script" style="font-family:'Bad Script';">Bad Script</option>
                <option class="point_dropdown" value="Comfortaa" style="font-family:'Comfortaa';">Comfortaa</option>
                <option class="point_dropdown" value="Lobster" style="font-family:'Lobster';">Lobster</option>
                <option class="point_dropdown" value="Merriweather" style="font-family:'Merriweather';">Merriweather</option>
                <option class="point_dropdown" value="Montserrat" style="font-family:'Montserrat';">Montserrat</option>
                <option class="point_dropdown" value="Open Sans" style="font-family:'Open Sans';">Open Sans</option>
                <option class="point_dropdown" value="Oswald" style="font-family:'Oswald';">Oswald</option>
                <option class="point_dropdown" value="PT Serif" style="font-family:'PT Serif';">PT Serif</option>
                <option class="point_dropdown" value="Pacifico" style="font-family:'Pacifico';">Pacifico</option>
                <option class="point_dropdown" value="Pangolin" style="font-family:'Pangolin';">Pangolin</option>
                <option class="point_dropdown" value="Pattaya" style="font-family:'Pattaya';">Pattaya</option>
                <option class="point_dropdown" value="Playfair Display" style="font-family:'Playfair Display';">Playfair Display</option>
                <option class="point_dropdown" value="Roboto" style="font-family:'Roboto';">Roboto</option>
                <option class="point_dropdown" value="Ruslan Display" style="font-family:'Ruslan Display';">Ruslan Display</option>
              </select>
              
              <input type="number" name="" id="${countInputs}" value="14" class="value_font point_dropdown">

              <button class="bold point_dropdown" id="${countInputs}">B</button>
              <button class="italic point_dropdown"  id="${countInputs}">I</button>
              <button class="underline point_dropdown" id="${countInputs}">U</button>

              
              <div class="color_picker_button" id="${countInputs}" onclick="clickColorPicker(event)">
                <div class="color_picker_palette" id="${countInputs}">
                  <div class="color_picker_palette-wrapper">
                  <div class="column_black column_palette">
                    <div class="color_picker_palette-item" style="background:black"></div>
                    <div class="color_picker_palette-item" style="background:#980000"></div>
                    <div class="color_picker_palette-item" style="background:#e6b8af"></div>
                    <div class="color_picker_palette-item" style="background:#dd7e6b"></div>
                    <div class="color_picker_palette-item" style="background:#cc4125"></div>
                    <div class="color_picker_palette-item" style="background:#a61c00"></div>
                    <div class="color_picker_palette-item" style="background:#85200c"></div>
                    <div class="color_picker_palette-item" style="background:#5b0f00"></div>
                  </div>
                  <div class="column_red column_palette">
                    <div class="color_picker_palette-item" style="background:#434343"></div>
                    <div class="color_picker_palette-item" style="background:#ff0000"></div>
                    <div class="color_picker_palette-item" style="background:#f4cccc"></div>
                    <div class="color_picker_palette-item" style="background:#ea9999"></div>
                    <div class="color_picker_palette-item" style="background:#e06666"></div>
                    <div class="color_picker_palette-item" style="background:#cc0000"></div>
                    <div class="color_picker_palette-item" style="background:#990000"></div>
                    <div class="color_picker_palette-item" style="background:#660000"></div>
                  </div>      
                  <div class="column_orange column_palette">
                    <div class="color_picker_palette-item" style="background:#666666"></div>
                    <div class="color_picker_palette-item" style="background:#ff9000"></div>
                    <div class="color_picker_palette-item" style="background:#fce5cd"></div>
                    <div class="color_picker_palette-item" style="background:#f9cb9c"></div>
                    <div class="color_picker_palette-item" style="background:#f6b26b"></div>
                    <div class="color_picker_palette-item" style="background:#e69138"></div>
                    <div class="color_picker_palette-item" style="background:#b45f06"></div>
                    <div class="color_picker_palette-item" style="background:#783f04"></div>
                  </div>                
                  <div class="column_yellow column_palette">
                    <div class="color_picker_palette-item" style="background:#999999"></div>
                    <div class="color_picker_palette-item" style="background:#ffff00"></div>
                    <div class="color_picker_palette-item" style="background:#fff2cc"></div>
                    <div class="color_picker_palette-item" style="background:#ffe599"></div>
                    <div class="color_picker_palette-item" style="background:#ffd966"></div>
                    <div class="color_picker_palette-item" style="background:#f1c232"></div>
                    <div class="color_picker_palette-item" style="background:#bf9000"></div>
                    <div class="color_picker_palette-item" style="background:#7f6000"></div>
                  </div>
                  <div class="column_green column_palette">
                    <div class="color_picker_palette-item" style="background:#b7b7b7"></div>
                    <div class="color_picker_palette-item" style="background:#00ff00"></div>
                    <div class="color_picker_palette-item" style="background:#d9ead3"></div>
                    <div class="color_picker_palette-item" style="background:#b6d7a8"></div>
                    <div class="color_picker_palette-item" style="background:#93c47d"></div>
                    <div class="color_picker_palette-item" style="background:#6aa84f"></div>
                    <div class="color_picker_palette-item" style="background:#38761d"></div>
                    <div class="color_picker_palette-item" style="background:#274e13"></div>
                  </div>
                  <div class="column_cyan column_palette">
                    <div class="color_picker_palette-item" style="background:#cccccc"></div>
                    <div class="color_picker_palette-item" style="background:#00ffff"></div>
                    <div class="color_picker_palette-item" style="background:#d0e0e3"></div>
                    <div class="color_picker_palette-item" style="background:#a2c4c9"></div>
                    <div class="color_picker_palette-item" style="background:#76a5af"></div>
                    <div class="color_picker_palette-item" style="background:#45818e"></div>
                    <div class="color_picker_palette-item" style="background:#134f5c"></div>
                    <div class="color_picker_palette-item" style="background:#0c343d"></div>
                  </div>
                  <div class="column_blue column_palette">
                    <div class="color_picker_palette-item" style="background:#d9d9d9"></div>
                    <div class="color_picker_palette-item" style="background:#4a86e8"></div>
                    <div class="color_picker_palette-item" style="background:#c9daf8"></div>
                    <div class="color_picker_palette-item" style="background:#a4c2f4"></div>
                    <div class="color_picker_palette-item" style="background:#6d9eeb"></div>
                    <div class="color_picker_palette-item" style="background:#3c78d8"></div>
                    <div class="color_picker_palette-item" style="background:#1155cc"></div>
                    <div class="color_picker_palette-item" style="background:#1c4587"></div>
                  </div>
                  <div class="column_darkblue column_palette">
                    <div class="color_picker_palette-item" style="background:#efefef"></div>
                    <div class="color_picker_palette-item" style="background:#0000ff"></div>
                    <div class="color_picker_palette-item" style="background:#cfe2f3"></div>
                    <div class="color_picker_palette-item" style="background:#9fc5e8"></div>
                    <div class="color_picker_palette-item" style="background:#6fa8dc"></div>
                    <div class="color_picker_palette-item" style="background:#3d85c6"></div>
                    <div class="color_picker_palette-item" style="background:#0b5394"></div>
                    <div class="color_picker_palette-item" style="background:#073763"></div>
                  </div>
                  <div class="column_purple column_palette">
                    <div class="color_picker_palette-item" style="background:#f3f3f3"></div>
                    <div class="color_picker_palette-item" style="background:#9900ff"></div>
                    <div class="color_picker_palette-item" style="background:#d9d2e9"></div>
                    <div class="color_picker_palette-item" style="background:#b4a7d6"></div>
                    <div class="color_picker_palette-item" style="background:#8e7cc3"></div>
                    <div class="color_picker_palette-item" style="background:#674ea7"></div>
                    <div class="color_picker_palette-item" style="background:#351c75"></div>
                    <div class="color_picker_palette-item" style="background:#20124d"></div>
                  </div>
                  <div class="column_pink column_palette last_column">
                    <div class="color_picker_palette-item" style="background:#ffffff"></div>
                    <div class="color_picker_palette-item" style="background:#ff00ff"></div>
                    <div class="color_picker_palette-item" style="background:#ead1dc"></div>
                    <div class="color_picker_palette-item" style="background:#d5a6bd"></div>
                    <div class="color_picker_palette-item" style="background:#c27ba0"></div>
                    <div class="color_picker_palette-item" style="background:#a64d79"></div>
                    <div class="color_picker_palette-item" style="background:#741b47"></div>
                    <div class="color_picker_palette-item" style="background:#4c1130"></div>
                  </div>
                  </div>
                  

                </div>
              </div>

              <div class="color_picker_align point_dropdown">
                <img src="img/align-center.svg" alt="" class="color_picker_align-img point_dropdown" id="${countInputs}" onclick="clickAlignPicker(event)" draggable="false">

                <div class="color_picker_align-dropdown" id="${countInputs}">
                <div class="color_picker_align-dropdown-wrapper point_dropdown"  id="${countInputs}">
                  <div class="align-dropdown-wrapper-item point_dropdown">
                    <img src="img/align-center.svg" alt="center" class="point_dropdown align-dropdown-wrapper-img"draggable="false">
                  </div>
                  <div class="align-dropdown-wrapper-item point_dropdown">
                    <img src="img/align-justify.svg" alt="justify" class="point_dropdown align-dropdown-wrapper-img"draggable="false">
                  </div>
                  <div class="align-dropdown-wrapper-item point_dropdown">
                    <img src="img/align-left.svg" alt="start" class="point_dropdown align-dropdown-wrapper-img"draggable="false">
                  </div>
                  <div class="align-dropdown-wrapper-item point_dropdown">
                    <img src="img/align-right.svg" alt="end" class="point_dropdown align-dropdown-wrapper-img"draggable="false">
                  </div>
                </div>
                </div>
              </div>
              </div>
            </div>
            
          </div>
          
      `);
      keepRatio = false;
      prevEvDefult=false;
      el.firstChild.textContent = nameOfEditor[`${currentDragElem}`];
      el.onmousedown=AddMoveable(el);

    }

    return el;
  };

  function editorBilder(currDragElem){

    const htmlInput={
      "elemNum":`<input type="text" id="${countInputs}" class="count-elem-${countInputs} inputEditor num" name="num" value="Номер сертификата">`,
      "elemTheme":`<input type="text" id="${countInputs}" class="count-elem-${countInputs} inputEditor thema" name="thema" value="Тема сертификата">`,
      "elemDate":`<input type="date" id="${countInputs}" class="count-elem-${countInputs} inputEditor date" name="date" value="Дата сертификата">`,
      "elemName":`<input type="text" id="${countInputs}" class="count-elem-${countInputs} inputEditor fullname" name="fullname" value="Имя и фамилия">`,
      "elemImg":`<input type="file" id="${countInputs}" class="count-elem-${countInputs} inputEditor" name="img" value="Изображение">`,
      "elemTxt":`<input type="text" id="${countInputs}" class="count-elem-${countInputs} inputEditor" value="Текст">`,
    };
    editorForm.insertAdjacentHTML("afterbegin",
        `
          <div class="editor-item editorBlock-${countInputs}" id="${countInputs}">
            <label for="" class="label_editor-${countInputs}">
             ${nameOfEditor[`${currDragElem}`]}
           </label>
            ${htmlInput[`${currDragElem}`]}
           <input type="button" id="${countInputs}" onclick="onDelete(event)" class="remove-button" value="Удалить элемент">
         </div>
        `
      );
  }

 

  
  function drop(event) {

    event.preventDefault();
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    console.log(event.target);

    if(currentDragElem=="elemImg"){
      const el = document.createElement("img");  
      elemBuilder(el,offsetX,offsetY);
      el.src="img/dok.png";
      el.style.width=150+"px"; 
      canvas.appendChild(el);
      elemsOnCanvas=canvas.children;
      editorBilder(currentDragElem);
      styleEl(el.id);

    }else if(currentDragElem=="elemNum"){
      const el = document.createElement("div");
      elemBuilder(el,offsetX,offsetY);
      canvas.appendChild(el);   
      elemsOnCanvas=canvas.children;
      editorBilder(currentDragElem);
      styleEl(el.id);

      //block second item
      const toolNum = document.getElementById("elemNum");
      toolNum.draggable = false;
      toolNum.classList.remove('tool-item');
      toolNum.classList.add('tool-item-block');

    }else if(currentDragElem=="elemTheme"){
      const el = document.createElement("div");  
      elemBuilder(el,offsetX,offsetY);
      canvas.appendChild(el);
      elemsOnCanvas=canvas.children;
      editorBilder(currentDragElem);
      styleEl(el.id);

      //block second item
      const toolTheme = document.getElementById("elemTheme");
      toolTheme.draggable = false;
      toolTheme.classList.remove('tool-item');
      toolTheme.classList.add('tool-item-block');

    }else if(currentDragElem=="elemDate"){
      const el = document.createElement("div");  
      elemBuilder(el,offsetX,offsetY);
      canvas.appendChild(el);
      elemsOnCanvas=canvas.children;
      editorBilder(currentDragElem);
      styleEl(el.id);

      //block second item
      const toolDate = document.getElementById("elemDate");
      toolDate.draggable = false;
      toolDate.classList.remove('tool-item');
      toolDate.classList.add('tool-item-block');

    }else if(currentDragElem=="elemName"){
      const el = document.createElement("div");  
      elemBuilder(el,offsetX,offsetY);
      canvas.appendChild(el);
      elemsOnCanvas=canvas.children;
      editorBilder(currentDragElem);
      styleEl(el.id);

      //block second item
      const toolName = document.getElementById("elemName");
      toolName.draggable = false;
      toolName.classList.remove('tool-item');
      toolName.classList.add('tool-item-block');

    } else {
      const el = document.createElement("div");
      elemBuilder(el,offsetX,offsetY);
      canvas.appendChild(el);   
      elemsOnCanvas=canvas.children;
      editorBilder(currentDragElem);
      styleEl(el.id);
    };
    
    dropdownContainer=document.querySelectorAll(".dropdown_container");
    dropdownButton=document.querySelectorAll(".dropdown_button-img");
    dropdownMenu=document.querySelectorAll(".dropdown_menu_wrapper");
    colorPickerButton=document.querySelectorAll(".color_picker_button");
    colorPickerPalette=document.querySelectorAll(".color_picker_palette");
    colorPickerAlign=document.querySelectorAll(".color_picker_align-img");
    colorPickerAlignDropdown=document.querySelectorAll(".color_picker_align-dropdown");
    colorPickerAlignWrapper=document.querySelectorAll(".color_picker_align-dropdown-wrapper");
    selectDropdown=document.querySelectorAll(".select_dropdown");
    valueFont=document.querySelectorAll(".value_font");
    boldButton=document.querySelectorAll(".bold");
    italicButton=document.querySelectorAll(".italic");
    underlineButton=document.querySelectorAll(".underline");
    isNotActive=document.querySelectorAll(".isNotActive");

  //scr img
}

  function styleEl(obj) {
    let elem =  document.getElementById(`${obj}`);
    elem.classList.add("elem-canvas");

  }
    function AddMoveable(el) {
      
      // НАЧАЛО 
              
          // for rezise
          const maxWidth = "auto";
          const maxHeight = "auto";
          const minWidth = "auto";
          const minHeight = "auto";
          const resizable = true;
          //const keepRatio = false;
          const throttleResize = 1;
          const renderDirections = ["nw","n","ne","w","e","sw","s","se"];
          const bounds = {"left":0,"top":0,"right":0,"bottom":0,"position":"css"};
          // const elemsGuidelines=Array.from(isNotActive);



      //let hasInteracted = false;
      let isActive = true;

       //const editor = document.body;
      //let moveable;
      let moveable = new Moveable(canvas, {
          target: el,
          preventDefault:prevEvDefult,
          className: `moveable ${countInputs}`,
          // If the container is null, the position is fixed. (default: parentElement(document.body))
          container: canvas,
          draggable: true,
          resizable: true,
          scalable: false,
          rotatable: true,
          roundable: false,
          snapRotataionThreshold: 5,
          snapRotationDegrees: [0, 90, 180, 270],      
          bounds:bounds,
          isDisplayShadowRoundControls: true,
          maxRoundControls: [4, 0],
          roundPadding: 20,
          isDisplaySnapDigit: true,
          //elementGuidelines: elemsGuidelines,
          snappable: true,
          snapThreshold: 5,
          snapGap: false,
          snapDirections: {
              top: true,
              right: true,
              bottom: true,
              left: true,
              center: true,
              middle: true,
          },
          elementSnapDirections: {
              top: true,
              right: true,
              bottom: true,
              left: true,
              center: true,
              middle: true,
          },
          // Enabling pinchable lets you use events that
          // can be used in draggable, resizable, scalable, and rotateable.
          pinchable: true, // ["resizable", "scalable", "rotatable"]
          origin: true,
          
          throttleDrag: 1,
          throttleResize: 1,
          throttleRotate: 0,
          padding: { left: 0, top: 0, right: 0, bottom: 0 },

          // for rezise            
          keepRatio: keepRatio,
          throttleResize: throttleResize,
          renderDirections: renderDirections,
          
      });

      /* draggable */
      moveable
          .on("dragStart", ({ target, clientX, clientY }) => {
              // console.log("onDragStart");
              hasInteracted = true;
              const moveableElems=document.querySelectorAll(".moveable");
              currentElem=el.id;
              for(let elem of moveableElems){
                elem.style.display="none"
                if(elem.classList[2]==el.id){
                  elem.style.display="block"
                }
              };
              for(let dropContainer of dropdownContainer){
                dropContainer.style.display="none";
                if(el.id==dropContainer.id){
                  dropContainer.style.display="block";
                  }
                };
              // for(let dropM of dropdownMenu){
              //   dropM.style.display="none";
              //   if(el.id==dropM.id){
              //     continue;
              //     }
                
              // };
              // console.log(el.offsetHeight)
              // dropdownContainer.style.top = el.style.top;
              // dropdownContainer.style.left= el.style.left;
              // dropdownContainer.style.marginTop=`${el.offsetHeight}`
              // dropdownContainer.style.transform= el.transform;;
              // dropdownContainer.style.transform= el.transform;
             
          
              for(const elem of elemsOnCanvas){
                elem.classList.remove("elem-canvas-target");
              };
              el.classList.add("elem-canvas-target");
              el.classList.remove("isNotActive");
              el.classList.add("isActive");     
          })
          .on("drag", (e) => {
            e.target.style.transform = e.transform;
            // dropdownContainer.style.transform= e.transform;;
                      
          })
          .on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
              // console.log("onDragEnd");  
              hasInteracted=false;
              el.classList.remove("isActive");
              el.classList.add("isNotActive"); 
              isNotActive=document.querySelectorAll(".isNotActive");
              // console.log(hasInteracted)
                           
          });
     
      /* resizable */ 
      moveable.on("resize", e => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
          // dropdownContainer.style.transform= e.transform;;

      });

    

      /* rotatable */
      moveable
          .on("rotateStart", ({ target, clientX, clientY }) => {
              // console.log("onRotateStart");
              hasInteracted = true;
          })
          .on("rotate", ({ target, beforeDelta, delta, dist, transform, clientX, clientY, beforeRotate }) => {
              if (isActive) {
                  // console.log("onRotate", dist);
                  target.style.transform = transform;

              }
          })
          .on("rotateEnd", ({ target, isDrag, clientX, clientY }) => {
              // console.log("onRotateEnd");
          });   
        

         
  }  
});





function clickColorPicker(event){
  let idColorPicker=event.target.id;
  for(let colorPP of colorPickerPalette){
    if(colorPP.id==idColorPicker){
      // console.log("ok")
      if(colorPP.style.display=="block"){
        colorPP.style.display="none";
      }else{
        colorPP.style.display="block";
      }
    }   
  } 
};

function clickAlignPicker(event){
  let idAlignPicker=event.target.id;
  for(let alignPP of colorPickerAlignDropdown){
    if(alignPP.id==idAlignPicker){
      if(alignPP.style.display=="block"){
        alignPP.style.display="none";
      }else{
        alignPP.style.display="block";
      }
    }   
  } 
};

function clickDropdownButton (event){
  
  let idButton=event.target.id;
  for(let dropM of dropdownMenu){
    // console.log(dropM.id,idButton)
    if(dropM.id==idButton){
      // console.log("ok")
      if(dropM.style.display=="block"){
        dropM.style.display="none";
      }else{
        dropM.style.display="block";
      }
    }   
  }
  
  // console.log(dropdownMenu.style.display)     
};

document.addEventListener("click",(event)=>{
  console.log(event.target)
  const moveableElems=document.querySelectorAll(".moveable");
  if(event.target.classList.contains("color_picker_palette-item")){
    const colorValue=event.target.style.background;
    for(const cPButton of colorPickerButton){
      if(cPButton.id==currentElem){
        cPButton.style.background=colorValue;
      };
    };
    for(const elem of elemsOnCanvas){
      if(elem.id==currentElem){
        elem.style.color=colorValue;
      };
    };
  };

  if(event.target.classList.contains("align-dropdown-wrapper-img")){
    const alignValue=event.target.alt;
    console.log(alignValue);
    for(const cPAlign of colorPickerAlign){
      if(cPAlign.id==currentElem){
        // cPAlign.style.background=colorValue;
        switch(alignValue){
          case "center":
            cPAlign.src="img/align-center.svg";
            break;
          case "justify":
            cPAlign.src="img/align-justify.svg";
            break;
          case "start":
            cPAlign.src="img/align-left.svg";
            break;
          case "end":
            cPAlign.src="img/align-right.svg";
            break;
              
        };
      };
    };
    for(const elem of elemsOnCanvas){
      if(elem.id==currentElem){
        switch(alignValue){
          case "center":
            elem.style.textAlign=alignValue;
            break;
          case "justify":
            elem.style.textAlign=alignValue;
            break;
          case "start":
            elem.style.textAlign=alignValue;
            break;
          case "end":
            elem.style.textAlign=alignValue;
            break;
      };
    };
  };
  };

  if(event.target.classList.contains("bold")){
    for(const bButton of boldButton){
      if(bButton.id==currentElem){
        if(bButton.style.background=="gray"){
          bButton.style.background="transparent";
          for(const elem of elemsOnCanvas){
            if(elem.id==currentElem){
              elem.style.fontWeight=400;
            };
          };
        }else{
          bButton.style.background="gray";
          for(const elem of elemsOnCanvas){
            if(elem.id==currentElem){
              elem.style.fontWeight=700;
            };
          };
        };
      };
    };
  };

  if(event.target.classList.contains("italic")){
    for(const iButton of italicButton){
      if(iButton.id==currentElem){
        if(iButton.style.background=="gray"){
          iButton.style.background="transparent";
          for(const elem of elemsOnCanvas){
            if(elem.id==currentElem){
              elem.style.fontStyle="normal";
            };
          };
        }else{
          iButton.style.background="gray";
          for(const elem of elemsOnCanvas){
            if(elem.id==currentElem){
              elem.style.fontStyle="italic";
            };
          };
        };
      };
    };
  };

  if(event.target.classList.contains("underline")){
    for(const uButton of underlineButton){
      if(uButton.id==currentElem){
        if(uButton.style.background=="gray"){
          uButton.style.background="transparent";
          for(const elem of elemsOnCanvas){
            if(elem.id==currentElem){
              elem.style.textDecoration="none";
            };
          };
        }else{
          uButton.style.background="gray";
          for(const elem of elemsOnCanvas){
            if(elem.id==currentElem){
              elem.style.textDecoration="underline";
            };
          };
        };
      };
    };
  };

  for(const selDropdown of selectDropdown){
    selDropdown.addEventListener("change",()=>{
      for(const elem of elemsOnCanvas){

        if(elem.id==currentElem){
          elem.style.fontFamily=selDropdown.value;
        };
      };
    });
  };

  for(const valFont of valueFont){
    valFont.addEventListener("change",()=>{
      console.log(valFont.value);
      for(const elem of elemsOnCanvas){
        if(elem.id==currentElem){
          elem.style.fontSize=valFont.value + "px";
        };
      };
    });
  };
  


  if(!event.target.classList.contains("elem-canvas") &&
     !event.target.classList.contains("dropdown_button-img") &&
     !event.target.classList.contains("point_dropdown") &&
     !event.target.classList.contains("color_picker_button") &&
     !event.target.classList.contains("color_picker_palette-item") &&
     !event.target.classList.contains("column_palette") &&
     !event.target.classList.contains("color_picker_palette-wrapper") &&
     !event.target.classList.contains("color_picker_palette")
  ){
    for(const elem of moveableElems){
      elem.style.display="none";
    };
    for(const elem of elemsOnCanvas){
      elem.classList.remove("elem-canvas-target");
    };
    for(const contDropdown of dropdownContainer){
      contDropdown.style.display="none";
    };
    currentElemOnCanvas=null;  
  }

  for(const item of selectDropdown){
    item.addEventListener("click",()=>{

    });
  }

  
  
  if(!event.target.classList.contains("color_picker_button")){
    for(const cPPalette of colorPickerPalette){
      cPPalette.style.display="none";
    };
  };
  if(!event.target.classList.contains("color_picker_align-img")){
    for(const cPADropdown of colorPickerAlignDropdown){
      cPADropdown.style.display="none";
    };
  };

  
    // //scr img
    // html2canvas(document.getElementById('holst')).then(function (canvas) {
      
    //   const scrimg = document.getElementById('scrimg');     

    //   scrimg.value = canvas.toDataURL("image/jpeg");
      
    // });
});

canvas.addEventListener("mousedown",(event)=>{
  if(event.target.classList.contains("elem-canvas")){
    currentElemOnCanvas=event.target.id;
    // console.log(currentElemOnCanvas);
  };
});

editorMain.addEventListener("click",()=>{
  // console.log(inputsOnEditor)
  for(let inpt of inputsOnEditor){
    inpt.addEventListener("input",(event)=>{
      const countId=event.target.id;
      for(let elem of elemsOnCanvas){
        if (countId==elem.id){
          elem.firstChild.textContent=event.target.value;
        }
      };
    });

    inpt.addEventListener("change",function(event){
      // console.log(event.target.files);
      const countId=event.target.id;
      for(let elem of elemsOnCanvas){
        if (countId==elem.id){
          const file_reader = new FileReader();
          file_reader.addEventListener('load', () => {
            const uploaded_image = file_reader.result;
            elem.src =`${uploaded_image}`;
            elem.style.height="auto";

          });
          file_reader.readAsDataURL(event.target.files[0]);
        }
      };  
    });
  };
});

//изменения размера холста
canvasSize.addEventListener("change",(event)=>{
  if(event.target.value=='option1'){
    canvas.classList.remove('canvas-vertical');
    canvas.classList.add('canvas-horizontal');
    isCanvasHorizont=true;
    canvasRect = canvas.getBoundingClientRect();
  }
  else 
  if(event.target.value=='option2'){
    canvas.classList.remove('canvas-horizontal');
    canvas.classList.add('canvas-vertical');
    isCanvasHorizont=false;
    canvasRect = canvas.getBoundingClientRect();
  };
});

  

//загрузка фона сертификата
inputUploadImage.addEventListener("change",function(){
  const file_reader = new FileReader();
  file_reader.addEventListener('load', () => {

    const uploaded_image = file_reader.result;
    canvas.style.backgroundImage =
        `url(${uploaded_image})`;
    //scr img
  scrinCanvas();            
  });
  file_reader.readAsDataURL(this.files[0]);
  
});




function onDelete(event){
  inputsOnEditor=editorForm.children;
  const countId=event.target.id;
  for(let elem of elemsOnCanvas){
    if (countId==elem.id){
      canvas.removeChild(elem);
    };
  };
  for(let edtr of inputsOnEditor){
    if (countId==edtr.id){
      editorForm.removeChild(edtr);
    };
  };
};

function exitButton(){
  window.location.href = '../homepage.php';
};




function generateAndPreviewPDF() {
  window.scroll(0, 0);

  const element = document.querySelector('.canvas');
  const pdfOptions = {
    filename: 'your_file_name.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
    pagebreak: { avoid: '.page-break' },
    pagesplit: true,
  };

  if (!isCanvasHorizont) {
    pdfOptions.filename = "your_file_name.pdf";
    pdfOptions.html2canvas = { scale: 2 };
    pdfOptions.jsPDF = { unit: 'mm', format: 'a4', orientation: 'portrait' };
  }
  html2pdf().from(element).set(pdfOptions).toPdf().get('pdf').then(function (pdf) {

    window.open(pdf.output('bloburl'), '_blank');
  });
}


//выгрузка pdf
buttonPdfDownload.addEventListener("click",()=>{

  styleNone();
  const pdfConfig = {
    filename: 'your_file_name.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' } // Установите ориентацию 'landscape' для горизонтального формата
  };
  if(!isCanvasHorizont){
    pdfConfig.filename="your_file_name.pdf";
    pdfConfig.html2canvas = { scale: 2, windowWidth: document.documentElement.clientWidth, windowHeight: document.documentElement.clientHeight };
    pdfConfig.jsPDF={ unit: 'mm', format: 'a4', orientation: 'portrait' };
  };


  html2pdf().from(canvas).set(pdfConfig).outputPdf().save();

  setTimeout(()=>{
    styleAdd();
  },2000)
});


buttonPdfView.addEventListener('click', ()=>{
  styleNone();
  generateAndPreviewPDF();
  setTimeout(()=>{
    styleAdd();
  },2000)
});

function styleNone(){
  const moveableElems = document.querySelectorAll(".moveable");
  for (const elem of moveableElems) {
    elem.style.display = "none";
  };
  for (const elem of elemsOnCanvas) {
    elem.classList.remove("elem-canvas-target");
    elem.classList.remove("border-elem")
  };
  for(const dropBtn of dropdownButton){
    dropBtn.style.opacity="0";
  };
  for(const dropMenu of dropdownMenu){
    dropMenu.style.opacity="0";
  };
  document.body.style.overflow = "hidden";

};

function styleAdd(){
  document.body.style.overflow = "auto";
  for(const elem of elemsOnCanvas){
    elem.classList.add("border-elem")
  };
  for(const dropBtn of dropdownButton){
    dropBtn.style.opacity="1";
  };
  for(const dropMenu of dropdownMenu){
    dropMenu.style.opacity="1";
  };
};


saveButton.addEventListener("mousemove",()=>{
  scrinCanvas();
})

canvas.addEventListener("mouseleave",()=>{
  scrinCanvas();
})

saveButton.addEventListener("click", ()=> {

  // scrinCanvas();
  const data = {
    num: $(".num").val(),
    thema: $(".thema").val(),
    date:$(".date").val(),
    fullname:$(".fullname").val(),
    scrimg:$("#scrimg").val(),

  };

    $.ajax({
      url: 'insert.php',
      type: 'post',
      data: data,
      success:function(response){
        console.log(response)
        if(response=="success"){
          window.location.href="../auth.php";
        }else if(response=="unsuccess"){
          console.log("беды с башкой")
          document.querySelector(".error").textContent="На холсте отсутсвуют необходимые элементы"
        }
        // window.location.href="../auth.php";
        // document.querySelector("").insertAdjacentText("afterbegin",`${msg}`);
      },
        //$('#image_id img').attr('src', response);
    });

});


// dropdownButton.addEventListener("click",()=>{
//     if(dropdownMenu.style.display=="block"){
//       dropdownMenu.style.display="none";
//     }else{
//       dropdownMenu.style.display="block";
//     }
//   }
// );
// colorPickerButton.addEventListener("click",()=>{
//   if(colorPickerPalette.style.display=="block"){
//     colorPickerPalette.style.display="none";
//   }else{
//     colorPickerPalette.style.display="block";
//   }
// });
// colorPickerAlign.addEventListener("click",()=>{
  
//   if(colorPickerAlignDropdown.style.display=="block"){
//     colorPickerAlignDropdown.style.display="none";
//   }else{
//     colorPickerAlignDropdown.style.display="block";
//   }
// })

function scrinCanvas(){
  styleNone();
  html2canvas(document.getElementById('holst')).then(function (canvas) {
      const scrimg = document.getElementById('scrimg');     
      scrimg.value = canvas.toDataURL("image/jpeg");
  });
  styleAdd(); 
};

canvas.addEventListener("click",(event)=>{
  console.log(event.offsetX+"=x")
  console.log(event.offsetY+"=Y")
})