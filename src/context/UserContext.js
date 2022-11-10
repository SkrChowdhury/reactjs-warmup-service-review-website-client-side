import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword,getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext=createContext()
const Auth=getAuth(app)


const UserContext = ({children}) => {


const [user,setUser]=useState({})

const [loading,setLoading]=useState(true)

const googleProvider=new GoogleAuthProvider()





const createUser=(email,password)=>{


return createUserWithEmailAndPassword(Auth,email,password)


}


const signIn=(email,password)=>{


    return signInWithEmailAndPassword(Auth,email,password)
    
    
    }


    const signInWithGoogle=()=>{


        return signInWithPopup(Auth,googleProvider)
        
        }








    const logOut=()=>{

        return signOut(Auth)
        
        
        }


    useEffect(()=>{

        const unsubscribe=onAuthStateChanged(Auth,currentUser=>{
        
        setUser(currentUser)
        
        setLoading(false)
        
        
        })
        
        return()=>{
        
        
            unsubscribe()
        }
        
        
        } ,[])







//const user={displayName:'Arkan'}
    
    
    const authInfo={user,createUser,signIn,logOut,signInWithGoogle,loading}
    return (

        <AuthContext.Provider value={authInfo}>


{children}


        </AuthContext.Provider>
            





     
    );
};

export default UserContext;