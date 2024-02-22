let submit = document.querySelector(".submitBtn");
let countryInput = document.querySelector(".countryInput");
let travelLen = document.querySelector("#travelLen");
let startTime = document.querySelector(".startTime");
let endTime = document.querySelector(".endTime");
let budgeInput = document.querySelector(".budgeInput");
let countryDisplay = document.querySelector(".countryDisplay");
let scheduleDisplay = document.querySelector(".scheduleDisplay");
let headerScheduleDisplay = document.querySelector(".headerScheduleDisplay");
let warning = document.querySelector('.warning')



submit.addEventListener("click", () => {
    // 國家輸入
    countryDisplay.innerHTML = countryInput.value;
    countryInput.value = "";

    // 旅遊天數輸入
    document.createElement("tr");

    if (headerScheduleDisplay.innerHTML === "") {
        headerScheduleDisplay.innerHTML += `共出門${travelLen.value}天<br>
    <td>時間</td>
    <td>行程</td>
    <td>地址</td>
    <td>金額</td>
    <td>備註</td>
    <td>刪除</td>`;
        travelLen.value = "";
    } else {
        headerScheduleDisplay.innerHTML = `共出門${travelLen.value}天<br>
    <td>時間</td>
    <td>行程</td>
    <td>地址</td>
    <td>金額</td>
    <td>備註</td>
    <td>刪除</td>`;
        travelLen.value = "";
    }

    // 旅遊時間輸入

    if (startTime.value === "" || endTime.value === "") {
        warning.innerHTML = "尚未輸入日期"
        warning.style = "color:red"
        headerScheduleDisplay.innerHTML = ""
    }









});
