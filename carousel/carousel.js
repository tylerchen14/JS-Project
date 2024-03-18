let slides = document.querySelector('.slides')
let slider = document.querySelector('.slider')
let index = 0
let move = 550
let pagination = document.querySelectorAll('.pagination')
let img = document.querySelectorAll('img')
let moveRange = move * index

// 前後一頁 當前這一頁
function currentslide() {
  index = 0
  changePagination()
}
currentslide()

function nextslide() {
  index++;
  if (index >= img.length) {
    index = 0
  }
  moveRange = move * index
  slides.style.transform = `translateX(-${moveRange}px)`
  changePagination()
}

function prevslide() {
  index--;
  if (index < 0) {
    index = img.length - 1
  }
  moveRange = move * index
  slides.style.transform = `translateX(${moveRange}px)`
  changePagination()
}

// 定時器
let timer = setInterval(nextslide, 5000)

// 上滑暫停計時器
slides.addEventListener("mouseover", () => {
  clearInterval(timer)
})

slides.addEventListener("mouseout", () => {
  timer = setInterval(nextslide, 5000)
}
)

// 分頁
function changePagination() {
  pagination.forEach((pag, pagindex) => {
    if (pagindex === index) {
      pag.classList.add('light')
    }
    else {
      pag.classList.remove('light')
    }
  })
}

// 移入分頁直接轉換圖片
pagination.forEach((pag, pagindex) => {
  pag.addEventListener("mouseover", () => {
    index = pagindex
    moveRange = move * index
    slides.style.transform = `translateX(-${moveRange}px)`
    changePagination()
    clearInterval(timer)
  })

  pag.addEventListener("mouseout", () => {
    timer = setInterval(nextslide, 5000)
  });
})