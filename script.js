var MAX_SCORE = 12

function mudaPlacar(id, x) {
  var element = document.getElementById(id)
  var score = parseInt(element.innerHTML)
  var newScore = Math.max(score + x, 0)
  
  if (newScore >= MAX_SCORE) {
    element.innerHTML = MAX_SCORE
    setTimeout(function () {
      alert(id + " ganhou a partida!")
      document.getElementById("nos").innerHTML = 0
      document.getElementById("eles").innerHTML = 0
    }, 10)
  } else {
    element.innerHTML = newScore
  }
  
  console.log(score)
}