let btnAdd =  document.querySelector(".btn");
let boxNote = document.querySelector(".box_note");


function addELement() {
   btnAdd.addEventListener('click', ()=>{

      let noteEl = document.createElement('div');      
      noteEl.classList.add('note')
      boxNote.appendChild(noteEl);  //boxNote est le parent de noteEl
  
  
      let optionEl = document.createElement('div');      
      optionEl.classList.add('option')
      noteEl.appendChild(optionEl);
  
  
      let iconEL = document.createElement('div');      
      iconEL.classList.add('icon')
      optionEl.appendChild(iconEL);
  
     
  
      let imgEl1 = document.createElement('img');
      imgEl1.classList.add('i1');
      imgEl1.src="pen.svg"
      iconEL.appendChild(imgEl1)
  
      let imgEL2 = document.createElement('img');
      imgEL2.classList.add('i2');
      imgEL2.src="trash.svg"
      iconEL.appendChild(imgEL2)
  
  
      let textariaEL = document.createElement('textarea');
      textariaEL.classList.add('texte');   
    
      noteEl.appendChild(textariaEL);
  
      trashElement(imgEL2, noteEl);
      editElement(imgEl1, textariaEL);
  
  })
}

addELement();

function editElement(imgEL1, textariaEL) {
   imgEL1.addEventListener('click', function(){
      textariaEL.readOnly =! setAttribute.readOnly
     })

   
}


function trashElement(imgEL2, noteEl) {
   imgEL2.addEventListener('click', function(){
      noteEl.remove();   })

   
}