const root = document.getElementById('root')
const loader = document.querySelector('.loader')
const fullName = document.querySelector('.fullName')
const search = document.querySelector('.search')
const searchAge = document.querySelector('.searchAge')

const updateList = (d) => {
  root.innerHTML = d
    .map((v, i) => `<div><span>${v.name}</span>  <span>${v.age}歲</span></div>`)
    .join('')
}
loader.style.display = 'none'

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
    if (fullName.value === '') {
      root.style.display = 'block'
      loader.style.display = 'none'
    } else {
      root.style.display = 'none'
      loader.style.display = 'block'

      const userList = await fetch(dataUrl + `?name_like=${fullName}`, {
        method: 'GET',
      })
      const data = await userList.json()

      updateList(data)

      setTimeout(() => {
        root.style.display = 'block'
        loader.style.display = 'none'
      }, 1000)
    }
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
    if (fullName.value === '') {
      root.style.display = 'block'
      loader.style.display = 'none'
    } else {
      root.style.display = 'none'
      loader.style.display = 'block'

      const ageList = await fetch(dataUrl + `?age_gte=${fullName}`, {
        method: 'GET',
      })
      const data = await ageList.json()

      updateList(data)

      setTimeout(() => {
        root.style.display = 'block'
        loader.style.display = 'none'
      }, 1000)
    }
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
