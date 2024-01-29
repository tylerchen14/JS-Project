function generate(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_+=<>?"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? UppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(length should be above 1)`
    } 
    if (allowedChars.length === 0) {
        return `(select one item)`
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;}


const passwordLength = 23;
const includeLowerCase = false;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


let password = generate(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);


console.log(`Your Password: ${password}`);