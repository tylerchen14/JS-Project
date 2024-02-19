const title = document.getElementById('title')
const data = document.getElementById('data')
const yearAndMonth = document.getElementById('yearAndMonth')

const now = new Date()
const nowY = now.getFullYear()
const nowM = now.getMonth() + 1
const weekList = ['一', '二', '三', '四', '五', '六', '日']

const stringNowM = String(nowM).padStart(2, '0')

yearAndMonth.innerHTML = `${nowY}/${stringNowM}`

title.innerHTML = `<tr> ${weekList.map((weekday) => ` <th> ${weekday}</th> `).join('')} </tr>`

const firstDay = new Date(`${nowY}/${nowM}/1`).getDay()

console.log(firstDay)

const days = new Date(nowY, nowM, 0).getDate()

// const frontEmptyData = Array(firstDay).fill('')

// const valueDate = Array(days)
//   .fill(1)
//   .map((v, i) => i + 1)

// const backEmptyDate = Array(42 - firstDay - days).fill('')

// const frontEmptyData = []

// for (let i = 0; i < firstDay; i++) {
//   frontEmptyData.push('')
// }

// const valueDate = []

// for (let i = 0; i < days; i++) {
//   valueDate.push(String(i + 1))
// }

// const backEmptyDate = []

// for (let i = 0; i < 42 - firstDay - days - 6; i++) {
//   backEmptyDate.push('')
// }

// const allData = [...frontEmptyData, ...valueDate, ...backEmptyDate]

// console.log(allData)

// let display = '<tr>'

// for (i = 1; i < allData.length; i++) {
//   display += `<td>${allData[i]}</td>`

//   if (i % 7 === 0) {
//     display += '</tr><tr>'
//   }
// }

// display += '</tr>'

// data.innerHTML = display

const allData = [
  ...Array(firstDay - 1).fill(''),
  ...Array(days)
    .fill(1)
    .map((v, i) => i + 1),
  ...Array(42 - firstDay - days - 6).fill(''),
].map((v, i) => {
  return `<td>${v}</td>`
})

const allDataChunks = _.chunk(allData, 7)

data.innerHTML = allDataChunks
  .map((v, i) => {
    return `<tr>${v.join('')}</tr>`
  })
  .join('')
