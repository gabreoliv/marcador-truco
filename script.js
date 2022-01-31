var MAX_SCORE = 12

function toggleTeam () {
  var teamNames = document.querySelectorAll(".team-name")
  console.log(teamNames)
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
      alert(id + " ganhou a partida!")
      document.getElementById("nos").innerHTML = 0
      document.getElementById("eles").innerHTML = 0
    }, 10)
  } else {
    element.innerHTML = newScore
  }
  
  console.log(score)
}