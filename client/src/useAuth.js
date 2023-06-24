import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAuth(code) {
    const[accessToken, setAccessToken] = useState()
    const[refreshToken, setRefreshToken] = useState()
    const[ exipresIn, setExipresIn] = useState()
   // console.log("re-------------------",refreshToken)

  useEffect(() => {
    axios.post("http://localhost:3001/login",{
      code,
    }).then(res =>{
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExipresIn(res.data.exipresIn);
        window.history.pushState({}, null, "/")
        // console.log("-------------",res.data.refreshToken)
     // console.log(refreshToken)
       //console.log(res.data)
       console.log(code)
    })
    .catch(() =>{
      //window.location ="/";
    })
  },[code])

  useEffect(()=>{
    if(!refreshToken || !exipresIn) return
    const interval = setInterval(() =>{

      axios.post("http://localhost:3001/refresh",{
        refreshToken,
      }).then(res =>{
        setAccessToken(res.data.accessToken);
        setExipresIn(res.data.exipresIn);
       // console.log(res.body)    
      })
      .catch(() =>{
         //window.location ="/";
      })
    },(exipresIn - 60) * 1000)

    return() => clearInterval(interval)
  },[refreshToken, exipresIn])
  
  return accessToken;
}
