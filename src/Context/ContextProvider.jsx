import { useContext } from 'react';
import { useState } from 'react';
import {createContext} from 'react'

const PostContext =createContext();



export default function ContextProvider({children}) {

   const[Added, setAdded] = useState([]);
   
  return (
   <PostContext.Provider value={{Added, setAdded}}>
        {children}
   </PostContext.Provider>
  )
}

 export function usePost(){
    const context = useContext(PostContext)
    if(context === undefined){
        throw new Error('usePost must be used within a PostProvider')
    }
    return context
 }