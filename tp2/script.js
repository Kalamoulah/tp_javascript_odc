let tabElement = ["mon premier", "mon deuxieme", "mon troisieme", "mon quatrieme"];

let boxGauche = document.querySelector('.box_gauche')
let boxDroite = document.querySelector('.box_droite')
let btnDroite = document.querySelector('#droite')
let btnGauche = document.querySelector('#gauche')


function generate() {
    for (let i = 0; i < tabElement.length; i++) {    
        let element= document.createElement('p');
         element.innerText= tabElement[i];
         boxGauche.appendChild(element); 

         element.addEventListener('mouseover', function(){           
         element.classList.add('active');    
        
        })        

        moveRight(element);
        moveLeft(element)
        
    }   
}


function moveRight(element) {
    btnDroite.addEventListener('click', function(){         

        if (element.classList.contains("active")) {
            boxDroite.appendChild(element)
            element.classList.remove("active")
        }
    })

    return 0;
}

function moveLeft(element) {
    btnGauche.addEventListener('click', function(){
        
        if (element.classList.contains("active")) {
           boxGauche.appendChild(element)
           element.classList.remove("active")
        }
    })

    return 0;
}






generate();



