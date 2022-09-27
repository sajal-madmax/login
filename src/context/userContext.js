import {createContext,useState,useContext} from "react";
 
export const userContext = createContext({
    user:null,
    logIn : ()=>{ },
    logOut: ()=>{},
 });

 const USER = {name:'Guest',isGuestUser:true}

 export function UsercontextProvider({children}){
    const [user,setUser]=useState(USER)
    function logIn(Username){
        setUser({isGuestUser:false,name:Username})

    }
    function logOut(){
        setUser(USER)

    }
    return <userContext.Provider value={{user,logIn,logOut}}>{children}</userContext.Provider>
 }


 export function useUserContext(){
    const {user,logIn,logOut}=useContext(userContext);
    return { user,logIn,logOut}
 } 