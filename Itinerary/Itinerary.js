let submit = document.querySelector(".submitBtn");
let countryInput = document.querySelector(".countryInput");
let travelLen = document.querySelector("#travelLen");
let startTime = document.querySelector(".startTime");
let budgeInput = document.querySelector(".budgeInput");
let countryDisplay = document.querySelector(".countryDisplay");
let scheduleDisplay = document.querySelector(".scheduleDisplay");
let headerScheduleDisplay = document.querySelector(".headerScheduleDisplay");
let warning = document.querySelector('.warning')
let plusSchedule = document.querySelector('.plusSchedule')


submit.addEventListener("click", () => {
  // 旅遊時間確認
  if (startTime.value === "") {
    warning.innerHTML = "尚未輸入出發日期"
    warning.style = "color:red"
  } else if(travelLen.value==="請選擇天數"){
    warning.innerHTML = "尚未輸入天數"
    warning.style = "color:red"
  }
  warning.innerHTML = ""

  // 國家輸入
  countryDisplay.innerHTML = countryInput.value;
  countryInput.value = "";

    // 出門時間
    headerScheduleDisplay.innerHTML += `<br>${startTime.value}`

  // 出門總天數
  headerScheduleDisplay.innerHTML += `共出門${travelLen.value}天<br>
  <td>時間</td>
  <td>行程</td>
  <td>地址</td>
  <td>金額</td>
  <td>備註</td>
  <td>刪除</td>`

  travelLen.value = "";
  startTime.value = "";
})

plusSchedule.addEventListener('click', () => {
  let newRow = document.createElement('tr')

  newRow.innerHTML = `
  <td><input type="date"></td>
  <td><input type="text"></td>
  <td><input type="text"></td>
  <td><input type="number"></td>
  <td><input type="text"></td>
  <td><button class="delete">刪除</button></td>
  `
  scheduleDisplay.appendChild(newRow)
})

// 大頭上傳
window.addEventListener('load', () => {
  document.querySelector('.upload-head-shot').addEventListener('change', (e) => {
    let file = e.target.files[0]

    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => {
      let headShot = document.querySelector('.avatar img')
      headShot.src = reader.result
    })
  })
})