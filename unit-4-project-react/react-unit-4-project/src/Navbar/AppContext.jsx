import React from "react";

export const AppContext=React.createContext();

function AppContextProvider({children}) {

    const [isAuth,setIsAuth]=React.useState(false);
    const [token,setToken]=React.useState(null);

    const authState={
        "isAuth":isAuth,
        "token":token
    }

    const loginUser=async()=>{
        console.log("Hello")
        var usrData={
            email: "mdsa@gmail.com",
            password: "mdsa1234"
        }
        try {
            var res=await fetch("https://reqres.in/api/login",{
                method:"POST",
                body:JSON.stringify(usrData),
                headers: { "Content-type": "application/json" }
            });
            var res2=await res.json();
            console.log(res2);
            setIsAuth(!isAuth);
            setToken(res2.token);
            console.log(token)
        } catch (error) {
            console.log(error);
        }
    }

    const logoutUser=()=>{
        setIsAuth(!isAuth);
        setToken(null);
    }

 return (
    <AppContext.Provider value={{authState,loginUser,logoutUser}}>
        {children}
    </AppContext.Provider>
 )

}

export default AppContextProvider;
