

import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";
function App(){

  const [users,setusers]= useState([
    {
        username:"jegan",
        password:"1234"
    }
])

  return(
    <div>
    <BrowserRouter>
     <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}


export default App;
