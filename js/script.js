function AlertaDolares(){
    alert("AFIP dice: Epa! Alguien dijo dolares? Mejor vamos a sacarselos, nadie puede usar dolares en este pais, segui mirando en pesos. Argentina, campeones del mundo")
}

let cantArroz = 0;

function RestarArroz(){
    if (document.getElementById('labelArroz').value == 0){
        alert("No se puede restar mas productos")
    }else{
        cantArroz=-1
        document.getElementById('labelArroz').value=cantArroz
    }
}

function SumarArroz(){
    cantArroz=document.getElementById('labelArroz').value
    cantArroz=+1
    document.getElementById('labelArroz').innerHTML=cantArroz
}