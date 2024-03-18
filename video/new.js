function doFirst() {
    // 先跟 HTML 畫面產生關聯
    myMovie = document.getElementById('myMovie')
    playButton = document.getElementById('playButton')
    defaultBar = document.getElementById('defaultBar')
    progress = document.getElementById('progress')
    stopButton = document.getElementById('stopButton')
    upButton = document.getElementById('upButton')
    downButton = document.getElementById('downButton')
    mutedButton = document.getElementById('mutedButton')

    barsize = parseInt(window.getComputedStyle(defaultBar).width)


    // 再建事件聆聽功能
    playButton.addEventListener('click', playOrPause)
    myMovie.addEventListener('click', playOrPause)
    defaultBar.addEventListener('click', clickedBar)
    stopButton.addEventListener('click', StopThis)
    upButton.addEventListener('click', volumeUp)
    downButton.addEventListener('click', volumeDown)
    mutedButton.addEventListener('click', mute)

}
function playOrPause() {
    if (!myMovie.paused && !myMovie.ended) {  // 影片正在跑
        myMovie.pause()
        playButton.innerText = 'play'
    } else {
        myMovie.play()
        playButton.innerText = 'pause'
        setInterval(update, 300)
    }
}
function update() {
    if (!myMovie.ended) {
        let size = barsize / myMovie.duration * myMovie.currentTime
        progress.style.width = `${size}px`
    } else {
        progress.style.width = `0px`
        myMovie.currentTime = 0
        playButton.innerText = 'play'
    }
}
function clickedBar(e) {
    let mouseX = e.clientX - defaultBar.offsetLeft
    progress.style.width = `${mouseX}px`

    let newTime = mouseX / (barsize / myMovie.duration)
    myMovie.currentTime = newTime
}

function StopThis() {
    progress.style.width = `0px`
    myMovie.currentTime = 0
    playButton.innerText = 'play'
    myMovie.pause()
}

function volumeUp() {
    myMovie.volume += 0.2
    myMovie.volume = Math.min(myMovie.volume, 1)
}

function volumeDown() {
    myMovie.volume -= 0.2
    myMovie.volume = Math.max(myMovie.volume, 0)
}

function mute() {
    myMovie.muted = !myMovie.muted
}

window.addEventListener('load', doFirst)


