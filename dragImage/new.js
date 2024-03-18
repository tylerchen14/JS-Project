window.addEventListener("load", () => {
  document.querySelector('.dropZone').ondragover = (e) => {
    e.preventDefault()
  }

  document.querySelector('.dropZone').ondrop = (e) => {
    e.preventDefault()

    let file = e.dataTransfer.files[0]
    document.querySelector('.fileName').innerHTML = `檔案名字 <br> ${file.name.split('.')[0]}`

    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener("load", () => {
      document.querySelector('.image').src = reader.result
    })

    let image = document.querySelector('.image')
    let scaleDown = document.querySelector('.scale-down')
    let scaleUp = document.querySelector('.scale-up')
    let turnLeft = document.querySelector('.turn-left')
    let turnRight = document.querySelector('.turn-right')
    let up = document.querySelector('.up')
    let down = document.querySelector('.down')
    let left = document.querySelector('.left')
    let right = document.querySelector('.right')
    let deleteBtn = document.querySelector('.delete')

    let transform = { scale: 1, rotate: 0 }
    let moveY = 150
    let moveX = 150

    // 縮小功能
    scaleDown.addEventListener('click', () => {
      transform.scale -= 0.2;
      transform.scale = Math.max(transform.scale, 0.2)
      blockTransform()
    })

    // 放大功能
    scaleUp.addEventListener('click', () => {
      transform.scale += 0.2;
      transform.scale = Math.min(transform.scale, 1)
      blockTransform()
    })

    // 往右功能
    turnRight.addEventListener('click', () => {
      transform.rotate += 30
      blockTransform()
    })

    // 往左功能
    turnLeft.addEventListener('click', () => {
      transform.rotate -= 30
      blockTransform()
    })

    // 上下移動
    up.addEventListener("click", () => {
      moveY -= 20
      blockTransform()
    })

    down.addEventListener("click", () => {
      moveY += 20
      blockTransform()
    })

    // 左右移動
    left.addEventListener("click", () => {
      moveX -= 20
      blockTransform()
    })

    right.addEventListener("click", () => {
      moveX += 20
      blockTransform()
    })

    // Transform總值
    function blockTransform() {
      image.style.transform = `scale(${transform.scale}) rotate(${transform.rotate}deg) `
      image.style.left = `${moveX}px`
      image.style.top = `${moveY}px`
    }

    // 刪除功能
    deleteBtn.addEventListener('click', () => {
      image.src = ""
      image.style.transform = `scale(1) rotate(0deg)`
      image.style.left = ""
      image.style.top = ""
      document.querySelector('.fileName').innerHTML = "空降下來！你的檔案"
    })

  }
})