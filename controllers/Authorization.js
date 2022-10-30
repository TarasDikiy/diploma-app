const AuthorizeController = (email, password) => {
    //!DEBUG 
    console.log(`Email is ${email}\nPassword is ${password}`);
    //Check for empty fields
    if (!email || !password) return alert('Some fields are empty');
    //TODO: Pass data to api
    //TODO: Handle response
};

module.exports = AuthorizeController;