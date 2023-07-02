//INTRO
const tatetiBody = document.querySelector('.canva')
const tatetiHero = document.querySelector('.hero')
const heroMessage = document.querySelector('.heroMessage')
let player = 'one'
let winnerPositions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

//GENERATOR
const tatetiBuilder = () => {
  let times = 9
  let positions = ['A1','A2','A3','B1','B2','B3','C1','C2','C3']
  for(let i = 0; i < times; i++){
    let zone = document.createElement("div");
    zone.classList.add("zone");
    zone.classList.add(positions[i]);
    tatetiBody.appendChild(zone)
  }
}
tatetiBuilder()

//CLICK ACTION
document.addEventListener('click',(e)=>{
  if(e.target.classList.value.includes('zone')){
  if(e.target.innerText!==''){
    console.log('Space already used')
  }else{
    if(player=='one'){
      e.target.innerText='O'
    }else{
      e.target.innerText='X'
    }
    check()
    if(player=='one'){
      player='two'
    }else{
      player='one'
    }
  }
}
})

//CHECK
const check = () => {
  const zones = document.querySelectorAll('.zone')
  for(let i = 0; i < winnerPositions.length; i++){
    let checker = []
    for(let j = 0; j < winnerPositions[i].length; j++){
      checker.push(zones[winnerPositions[i][j]-1].innerHTML)
    }
    console.log(checker)
    if(checker.filter(x=>x=='O').length==3){
      heroMessage.innerHTML="Player O WIN"
      tatetiHero.classList.add('heroActive')
      
    }else if(checker.filter(x=>x=='X').length==3){
      heroMessage.innerHTML="Player X WIN"
      tatetiHero.classList.add('heroActive')
    }
  }
}

//RESET
const reset = () =>{
  tatetiHero.classList.remove('heroActive');
  let zones = document.querySelectorAll('.zone')
  for (let i = 0; i < zones.length; i++) {
    zones[i].innerText=''
  }
}



