const regex = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
}



export const checkLogin = (email, password) => {
    const isEmailValid = regex.email.test(email)
    const isPasswordValid = Object.values(checkPasswordCriteria(password)).every((criteria) => criteria.satisfied)
    if (!isEmailValid) return 'Email ID is not valid'
    if (!isPasswordValid) return 'Password not valid'
}


export function checkPasswordCriteria(password) {
    const criteria = {
        minLength: { satisfied: password.length >= 6, description: "Minimum 6 characters" },
        lowercase: { satisfied: /[a-z]/.test(password), description: "At least one lowercase letter" },
        uppercase: { satisfied: /[A-Z]/.test(password), description: "At least one uppercase letter" },
        digit: { satisfied: /\d/.test(password), description: "At least one digit" },
        specialChar: { satisfied: /[@$!%*?&]/.test(password), description: "At least one special character" },
    };


    return criteria;
}