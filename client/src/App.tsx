import React from 'react'
// import GoogleLogin from 'react-google-login'
// import axios from 'axios'

import './App.css'
import Navbar from './components/navbar'
import Index from './pages/home/'

// type Response = {
//   token: string
// }

function App() {
  //   const responseGoogle = async (response: any) => {
  //     console.log(response.tokenId)
  //     const tokenId = response.tokenId
  //     const result = await axios.post<Response>(
  //       'http://localhost:3000/api/v1/google/login',
  //       {
  //         id_token: tokenId,
  //       }
  //     )

  //     console.log('result', result.data.token)
  //     localStorage.setItem('token', result.data.token)
  //     //const jwtToken = result.data.token
  //   }

  return (
    <div className="App">
      <Navbar />

      <Index />

      {/* <GoogleLogin
        clientId="947159253545-cbhff446tna579cn8a9imobitug1r50r.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> */}
    </div>
  )
}

export default App
