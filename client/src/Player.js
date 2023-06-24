import React, { useEffect, useState } from 'react'
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({accessToken, trackuri}) {
 const [play ,setPlay ] =useState(false)

 useEffect(() =>setPlay(true), [trackuri])
    if(!accessToken) return null;
  return (
    <SpotifyPlayer 
    token ={accessToken}
    showSaveIcon
    callback= {state =>{
        if(!state.isPlaying) setPlay(false);
    }}
    play ={play}
    uris ={trackuri ? [trackuri] : []}
    />
  )
}
