const buttonClassName = "botao-velocidade"

function aumentarVelocidadeAudio (){
      let playbackRatePosition = 1;


      let playbackRate = {
        "1": 1,
        "2": 1.25,
        "3": 1.5,
        "4": 1.75,
        "5": 2,
        "6": 2.25,
        "7": 2.5
      }

      return function(event) {
        let audios = document.querySelectorAll("audio")

        if (audios.length === 0){
          playbackRatePosition = 1;
          return
        }

        playbackRatePosition += 1;
        if (playbackRatePosition > 7){
          playbackRatePosition = 1
        }

        document.getElementsByClassName(buttonClassName)[0].innerText = `${playbackRate[playbackRatePosition]} X`
        audios.forEach((audio) =>{
          audio.playbackRate = playbackRate[playbackRatePosition]
        })
      };
  }


let interval = setInterval(() => {
  let actionsMenu = document.querySelector("header")

  if(actionsMenu){
    let menu = actionsMenu.childNodes[1].firstChild

    clearInterval(interval)

    const button = document.createElement("button")
    button.classList.add(buttonClassName)
    button.innerHTML = "1 X"
    menu.appendChild(button)

    button.onclick = (aumentarVelocidadeAudio)()
  }
}, 1000);