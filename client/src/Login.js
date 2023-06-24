import React from 'react'
import {Container} from 'react-bootstrap'

const AUTH_URL = 
'https://accounts.spotify.com/authorize?client_id=00c2f6dcc58e42aa8b256125f2ccd9b9&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'
export default function Login() {
  return (
    <Container>
        <center>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with spotify</a>
        </center>
    </Container>
  )
}


