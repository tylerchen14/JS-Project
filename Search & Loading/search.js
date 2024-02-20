const root = document.getElementById('root')
const loader = document.querySelector('.loader')
const fullName = document.querySelector('.fullName')
const search = document.querySelector('.search')
const searchAge = document.querySelector('.searchAge')

const result = document.querySelector('.result')

const updateList = (d) => {
  root.innerHTML = d
    .map(
      (v, i) => `<div><span>${v.name}</span>  <span>${v.age} 歲</span></div>`
    )
    .join('')
}
loader.style.display = 'none'

const startLoading = (timeout = 1000) => {
  result.style.display = 'none'
  loader.style.display = 'block'
  setTimeout(() => {
    result.style.display = 'block'
    loader.style.display = 'none'
  }, timeout)
}

const getUser = async () => {
  try {
    const userList = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )

    const data = await userList.json()

    updateList(data)
  } catch (error) {
    console.error('failed attempt', error)
  }
}

getUser()

// 依照名字查詢

const dataUrl =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'

const searchList = async (fullName) => {
  try {
    startLoading()

    const userList = await fetch(dataUrl + `?name_like=${fullName}`, {
      method: 'GET',
    })
    const data = await userList.json()

    updateList(data)
  } catch (error) {
    console.error('failed attempt', error)
  }
}

search.addEventListener('click', () => {
  if (fullName) {
    searchList(fullName.value)
  } else {
    searchList()
  }
})

// 搜尋年齡

const searchAgeList = async (fullName) => {
  try {
    startLoading()

    const ageList = await fetch(dataUrl + `?age_gte=${fullName}`, {
      method: 'GET',
    })
    const data = await ageList.json()

    updateList(data)
  } catch (error) {
    console.error('failed attempt', error)
  }
}

searchAge.addEventListener('click', () => {
  if (fullName) {
    searchAgeList(fullName.value)
  } else {
    searchAgeList()
  }
})

// 排序系統

let sortBtnASC = document.querySelector('.sortBtnASC')
let sortBtnDESC = document.querySelector('.sortBtnDESC')

const sortList = async (sort = 'age', order = 'ASC') => {
  try {

    startLoading()
    const ageList = await fetch(dataUrl + `?_sort=${sort}&_order=${order}`, {
      method: 'GET',
    })
    const data = await ageList.json()

    updateList(data)
  } catch (error) {
    console.error('failed attempt', error)
  }
}

sortBtnASC.addEventListener('click', () => {
  sortList()
})

sortBtnDESC.addEventListener('click', () => {
  sortList('age', 'DESC')
})
