const RegisterController = (email, password, repeatedPassword) => {
    //!DEBUG 
    console.log(`Email is ${email}\nPassword is ${password}\nRepeated password is ${repeatedPassword}`);
    //Check for empty fields
    if (!email || !password) return alert('Some fields are empty');
    //Check for equal password
    if (password != repeatedPassword) return alert ('Passwords must be equal');
    //TODO: pass data to api
    //TODO: handle response
};

module.exports = RegisterController;