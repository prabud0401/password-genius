
function getPasswordCriteria() {

    const lengthInput = document.getElementById("password-length");
    let length = parseInt(lengthInput.value);

    while (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid password length between 8 and 128.");
        return null;
    }

    
    const lowercase = document.getElementById("lowercase").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const numeric = document.getElementById("numeric").checked;
    const special = document.getElementById("special").checked;

    
    if (!(lowercase || uppercase || numeric || special)) {
        alert("Please select at least one character type.");
        return null;
    }

    
    return {
        length: length,
        lowercase: lowercase,
        uppercase: uppercase,
        numeric: numeric,
        special: special
    };
}


function generatePassword(criteria) {
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '$@%&*';

    
    let allChars = '';
    if (criteria.lowercase) allChars += lowercaseChars;
    if (criteria.uppercase) allChars += uppercaseChars;
    if (criteria.numeric) allChars += numericChars;
    if (criteria.special) allChars += specialChars;

    
    let password = '';
    for (let i = 0; i < criteria.length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}


function displayPassword(password) {
    
    const passwordSection = document.querySelector(".password");
    const passwordTextArea = passwordSection.querySelector("#password");
    passwordTextArea.value = password;
}

function generateAndDisplayPassword() {
    const criteria = getPasswordCriteria();

    if (!criteria) {
        return;
    }

    const password = generatePassword(criteria);

    displayPassword(password);
}

document.getElementById("generate-btn").addEventListener("click", generateAndDisplayPassword);
