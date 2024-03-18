let deleteBtn = document.querySelector('.deleteBtn')

        let submit = document.querySelector('.submit')
        submit.addEventListener("click", event => {

            let dateInput = document.getElementById('date')
            let itemInput = document.getElementById('item')
            let costInput = document.getElementById('cost')
            let importInfo = document.querySelector('.importInfo')

            let newRow = document.createElement('tr')

            if (dateInput.value === "" || itemInput.value === "" || costInput.value === "") {
                alert("請填寫所有欄位")
            } else {
                newRow.innerHTML = `<td>${dateInput.value}</td> <td>${itemInput.value}</td><td>${costInput.value}</td><td><button class="deleteBtn">刪除</button></td>`

                importInfo.appendChild(newRow)

                sortDate()

                newRow.querySelector('.deleteBtn').addEventListener("click", event => {
                    if (confirm('確定要刪除?')) {
                        newRow.remove()
                    }
                })
            }
            itemInput.value=""
            costInput.value=""
            dateInput.value=""
        })

        function sortDate() {
            let importInfo = document.querySelector('.importInfo')
            let dateContent = Array.from(importInfo.querySelectorAll("tr"))

            dateContent.sort((a, b) => {
                let timeA = new Date(a.cells[0].textContent)
                let timeB = new Date(b.cells[0].textContent)
                return timeA - timeB
            })

            dateContent.forEach(date => {
                importInfo.appendChild(date)
            })
        }