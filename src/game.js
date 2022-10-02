import { start,reset } from "./stopwatch.js ";

let chooseOption;
const messageForUser = document.getElementById("sJogadorDaVez")
const sectionTile = document.getElementById("sectionTile")

const btnReset = document.getElementById("btnReset").addEventListener('click',()=>{resetGame()})
const btnX = document.getElementById("X").addEventListener('click',(event)=>{btnChoose(event)})
const btnO = document.getElementById("O").addEventListener('click',(event)=>{btnChoose(event)})


const arrayTile =[
    [document.getElementById("1"),document.getElementById("2"),document.getElementById("3")],
    [document.getElementById("4"),document.getElementById("5"),document.getElementById("6")],
    [document.getElementById("7"),document.getElementById("8"),document.getElementById("9")]
]

arrayTile[0][0].addEventListener('click',(event)=>{clickSpan(event)})
arrayTile[0][1].addEventListener('click',(event)=>{clickSpan(event)})
arrayTile[0][2].addEventListener('click',(event)=>{clickSpan(event)})
arrayTile[1][0].addEventListener('click',(event)=>{clickSpan(event)})
arrayTile[1][1].addEventListener('click',(event)=>{clickSpan(event)})
arrayTile[1][2].addEventListener('click',(event)=>{clickSpan(event)})
arrayTile[2][0].addEventListener('click',(event)=>{clickSpan(event)})
arrayTile[2][1].addEventListener('click',(event)=>{clickSpan(event)})
arrayTile[2][2].addEventListener('click',(event)=>{clickSpan(event)})


function clickSpan(event){
    if(chooseOption != undefined && chooseOption == "X"){
        event.target.innerText = "X"
        event.target.style.pointerEvents ="none"
        computerChoose()
    }else if(chooseOption != undefined && chooseOption == "O"){
        event.target.innerText = "O"
        event.target.style.pointerEvents ="none"
        computerChoose()
    }
}

function btnChoose(event){
    chooseOption = event.target.id
 
    if(event.target.id == "X"){
        document.getElementById("O").disabled = true;
        messageForUser.innerText = "Agora escolha uma posição"
        document.getElementById("sectionBtnsChoose").style.pointerEvents = "none"
        start()
 
    }else if(event.target.id == "O"){
        document.getElementById("X").disabled = true;
        messageForUser.innerText = "Agora escolha uma posição"
        document.getElementById("sectionBtnsChoose").style.pointerEvents = "none"
        start()
    }
}

function computerChoose(){
    const tie = 
    arrayTile[0][0].innerText != "" && arrayTile[0][1].innerText != "" && arrayTile[0][2].innerText != "" && 
    arrayTile[1][0].innerText != "" && arrayTile[1][1].innerText != "" && arrayTile[1][2].innerText != "" && 
    arrayTile[2][0].innerText != "" && arrayTile[2][1].innerText != "" && arrayTile[2][2].innerText != ""; 

    if(!tie){
        if(!verifyLine() && !verifyColumn() && !verifyDiagonal()){
            messageForUser.innerText = "Agora vou escolher!"
            sectionTile.style.pointerEvents ="none"
    
            setTimeout(()=>{
                let numColumn = Math.round(Math.random() * 2)
                let numLine = Math.round(Math.random() * 2)
                
                let chooseComputerSpan = arrayTile[numColumn][numLine]
    
                if(chooseComputerSpan.innerText == "" && chooseOption == "X"){
                    chooseComputerSpan.innerText = "O"
                    chooseComputerSpan.style.pointerEvents = "none"
                    messageForUser.innerText = "Agora você!"
                    sectionTile.style.pointerEvents ="auto"
                    verifyLine()
                    verifyColumn()
                    verifyDiagonal()
                }else if(chooseComputerSpan.innerText == "" && chooseOption == "O"){
                    chooseComputerSpan.innerText = "X"
                    chooseComputerSpan.style.pointerEvents = "none"
                    messageForUser.innerText = "Agora você!"
                    sectionTile.style.pointerEvents ="auto"
                    verifyLine()
                    verifyColumn()
                    verifyDiagonal()
                }else{
                    verifyLine()
                    verifyColumn()
                    verifyDiagonal()
                    computerChoose()
                }
            },800)
        }else{
            sectionTile.style.pointerEvents ="none"
        }
    }else{
        messageForUser.innerText = "Empate!"
        reset()
        sectionTile.style.pointerEvents ="none"
    }
    
}

function verifyLine(){

    const firstLine = arrayTile[0][0].innerText == arrayTile[0][1].innerText && arrayTile[0][1].innerText == arrayTile[0][2].innerText && arrayTile[0][0].innerText != "";
    const secondLine = arrayTile[1][0].innerText == arrayTile[1][1].innerText && arrayTile[1][1].innerText == arrayTile[1][2].innerText && arrayTile[1][0].innerText != "";
    const thirdLine = arrayTile[2][0].innerText == arrayTile[2][1].innerText && arrayTile[2][1].innerText == arrayTile[2][2].innerText && arrayTile[2][0].innerText != "";

    if(firstLine){
        if(arrayTile[0][0].innerText == chooseOption){
            messageForUser.innerText = "Você Ganhou!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }else{
            messageForUser.innerText = "Eu Ganhei!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }
    }else if(secondLine){
        if(arrayTile[1][0].innerText == chooseOption){
            messageForUser.innerText = "Você Ganhou!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }else{
            messageForUser.innerText = "Eu Ganhei!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }
    }else if(thirdLine){
        if(arrayTile[2][0].innerText == chooseOption){
            messageForUser.innerText = "Você Ganhou!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }else{
            messageForUser.innerText = "Eu Ganhei!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }
    }
    return false;

}

function verifyColumn(){
    const firstColumn = arrayTile[0][0].innerText == arrayTile[1][0].innerText && arrayTile[1][0].innerText == arrayTile[2][0].innerText && arrayTile[0][0].innerText != "";
    const secondColumn = arrayTile[0][1].innerText == arrayTile[1][1].innerText && arrayTile[1][1].innerText == arrayTile[2][1].innerText && arrayTile[0][1].innerText != "";
    const thirdColumn = arrayTile[0][2].innerText == arrayTile[1][2].innerText && arrayTile[1][2].innerText == arrayTile[2][2].innerText && arrayTile[0][2].innerText != "";


    if(firstColumn){
        if(arrayTile[0][0].innerText == chooseOption){
            messageForUser.innerText = "Você Ganhou!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }else{
            messageForUser.innerText = "Eu Ganhei!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }
    }else if(secondColumn){
        if(arrayTile[0][1].innerText == chooseOption){
            messageForUser.innerText = "Você Ganhou!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }else{
            messageForUser.innerText = "Eu Ganhei!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }
    }else if(thirdColumn){
        if(arrayTile[0][2].innerText == chooseOption){
            messageForUser.innerText = "Você Ganhou!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }else{
            messageForUser.innerText = "Eu Ganhei!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }
    }
    return false;
    
}

function verifyDiagonal(){
    const firstDiagonal = arrayTile[0][0].innerText == arrayTile[1][1].innerText && arrayTile[1][1].innerText == arrayTile[2][2].innerText && arrayTile[0][0].innerText != "";
    const secondDiagonal = arrayTile[0][2].innerText == arrayTile[1][1].innerText && arrayTile[1][1].innerText == arrayTile[2][0].innerText && arrayTile[0][2].innerText != "";


    if(firstDiagonal){
        if(arrayTile[0][0].innerText == chooseOption){
            messageForUser.innerText = "Você Ganhou!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }else{
            messageForUser.innerText = "Eu Ganhei!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }
    }else if(secondDiagonal){
        if(arrayTile[0][2].innerText == chooseOption){
            messageForUser.innerText = "Você Ganhou!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }else{
            messageForUser.innerText = "Eu Ganhei!!"
            sectionTile.style.pointerEvents ="none"
            reset()
            return true;
        }
    }
    return false;
}

function resetGame(){
    reset()
    chooseOption = undefined;
    document.getElementById("X").disabled = false;
    document.getElementById("O").disabled = false;
    document.getElementById("sectionBtnsChoose").style.pointerEvents = "auto"
    sectionTile.style.pointerEvents ="auto"
    arrayTile[0][0].innerText = ""

    messageForUser.innerText = "Escolha X ou O"

    arrayTile[0][0].innerText = "";
    arrayTile[0][0].style.pointerEvents = "auto";
    arrayTile[0][1].innerText = "";
    arrayTile[0][1].style.pointerEvents = "auto";
    arrayTile[0][2].innerText = "";
    arrayTile[0][2].style.pointerEvents = "auto";
    arrayTile[1][0].innerText = "";
    arrayTile[1][0].style.pointerEvents = "auto";
    arrayTile[1][1].innerText = ""; 
    arrayTile[1][1].style.pointerEvents = "auto";
    arrayTile[1][2].innerText = ""; 
    arrayTile[1][2].style.pointerEvents = "auto";
    arrayTile[2][0].innerText = ""; 
    arrayTile[2][0].style.pointerEvents = "auto";
    arrayTile[2][1].innerText = "";
    arrayTile[2][1].style.pointerEvents = "auto";
    arrayTile[2][2].innerText = ""; 
    arrayTile[2][2].style.pointerEvents = "auto";

}