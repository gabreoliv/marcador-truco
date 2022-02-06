var MAX_SCORE = 12

function toggleTeam () {
  var teamNames = document.querySelectorAll(".team-name")

  for (const node of teamNames) {
    node.classList.toggle("current-team")
  }
}

function mudaPlacar(id, amount) {
  var element = document.getElementById(id)
  var score = parseInt(element.innerHTML)
  var newScore = Math.max(score + amount, 0)

  if (amount > 0) {
    toggleTeam()
  }
  
  if (newScore >= MAX_SCORE) {
    element.innerHTML = MAX_SCORE
    setTimeout(function () {
      if(id=="nos") {
        alert(id + " ganhamos a partida!")
        aumentaVitoria("bolinhas-nos")
      }
      else {
        alert(id + " ganharam a partida")
        aumentaVitoria("bolinhas-eles")
      }
      document.getElementById("nos").innerHTML = 0
      document.getElementById("eles").innerHTML = 0
    }, 10)
  } else {
    element.innerHTML = newScore
  }
}

function aumentaVitoria(id) {
  var element = document.querySelector("#" + id + " .bolinha:not(.marcada)")
  if (element) {
    element.classList.add("marcada")
  } else {
    var bolinhas = document.querySelectorAll(".bolinha")
    for (var bolinha of bolinhas) {
      bolinha.classList.remove("marcada") 
    }
  }
}