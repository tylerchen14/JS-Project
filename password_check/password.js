let submit = document.querySelector('.submit')
        submit.addEventListener("click", event => {
            let password = document.getElementById('password').value
            let warning = document.querySelector('.warning')
            if (password.length < 8) {
                warning.innerHTML = '請輸入 8 位數以上'
            }
            else {
                let count = document.querySelector('.count')
                count.classList.add('correct')
                let lowercaseWarning = false;
                let uppercaseWarning = false;
                let numberWarning = false;
                let symbolWarning = false;

                // 小寫
                for (i = 0; i < password.length; i++) {
                    let passwordLetter = password.charAt(i)
                    if (passwordLetter >= "a" && passwordLetter <= "z") {
                        lowercaseWarning = true;
                        let lowercase = document.querySelector('.lowerCase')
                        lowercase.classList.add('correct')
                    }
                    // 大寫
                    else if (passwordLetter >= "A" && passwordLetter <= "Z") {
                        uppercaseWarning = true;
                        let upperCase = document.querySelector('.upperCase')
                        upperCase.classList.add('correct')
                    }
                    // 數字
                    else if (passwordLetter >= "0" && passwordLetter <= "9") {
                        numberWarning = true;
                        let num = document.querySelector('.num')
                        num.classList.add('correct')
                    }
                    // 符號
                    else if ("!@#$%^&*()-=+<>?[]{}|".includes(passwordLetter)) {
                        symbolWarning = true;
                        let sign = document.querySelector('.sign')
                        sign.classList.add('correct')
                    }
                }
                if (lowercaseWarning == false) {
                    warning.innerHTML = '需要包含一個小寫字母'
                }
                else if (uppercaseWarning == false) {
                    warning.innerHTML = '需要包含一個大寫字母'
                }
                else if (symbolWarning == false) {
                    warning.innerHTML = '需要包含一個符號'
                }
                else if (numberWarning == false) {
                    warning.innerHTML = '需要包含一個數字'
                } else {
                    warning.innerHTML = '輸入成功！'
                    warning.classList.add('correct')
                }
            }
        })