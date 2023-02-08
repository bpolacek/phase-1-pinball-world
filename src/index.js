
const gameList = document.getElementsByClassName("game-list")[0]
const gameImage = document.getElementById("detail-image")
const gameTitle = document.getElementById("detail-title")
const gameHighScore = document.getElementById("detail-high-score")
const form = document.getElementById("high-score-form")
const scoreInput = document.getElementById("score-input")
//let videoGame = document.createElement("h5")

fetch('http://localhost:3000/games')
.then(response => response.json())
.then(data => {
  data.forEach(game => {addGames(game)})
  gameDetails(data[0])
})
function addGames(game){
let videoGame = document.createElement("h5")
  videoGame.textContent = `${game.name}(${game.manufacturer_name})`
 gameList.append(videoGame)
 videoGame.addEventListener("click", () => gameDetails(game))  //keep this parameter from json
}
//Update Featured Game
function gameDetails(game){
gameImage.src = game.image
gameTitle.textContent = game.name
gameHighScore.innerHTML = game.high_score
}
//Updated High Score
form.addEventListener("submit", (e) => {
  e.preventDefault()
  gameHighScore.innerHTML = scoreInput.value
})