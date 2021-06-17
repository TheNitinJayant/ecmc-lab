const userData = [
    {name: "Nitin", email:"nitin1@gmail.com", password: "helloworld1"}
    {name: "John", email:"john1@gmail.com", password: "helloworld2"}
    {name: "Albert", email:"alber1@gmail.com", password: "helloworld3"}
];

const find = () => {
    // 
}

const isAuthenticated = (email, password) => {
    let auth = false;
    userData.forEach((user)=>{
        if(email===user.email && password===user.password){
            auth==true;
        }
    });

    return auth;
}

export {userData, isAuthenticated};