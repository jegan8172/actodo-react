import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props) {

var userfound = false
const navigate = useNavigate()
const [uinput,setuinput] = useState()
const [pinput,setpinput] = useState()
const [ruser,setruser] = useState(true)

function handleuinput(event){
setuinput(event.target.value)
}
function handlpuinput(event){
setpinput(event.target.value)
}

function checkuser(){
console.log(props.users)
    props.users.forEach(function(item){
        if(item.username === uinput && item.password === pinput){
            userfound = true
            navigate("/landing",{state:{user:uinput}})
        }
       
    })
    if(userfound===false){
        setruser(false)
    }
}


  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-2xl font-semibold">Hey Hi👋</h1>
        {
            ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-600">Please Signup before you login</p>
        }
        
        <div className="flex flex-col gap-2 pt-3 w-[30vw]">
          <input type="text"
          value={uinput}
          onChange={handleuinput}
            placeholder="Username"
            className="border border-black rounded-md p-1"
          ></input>
          <input type="text"
          value={pinput}
          onChange={handlpuinput}
            placeholder="Password"
            className="border border-black rounded-md p-1"
          ></input>
        </div>
        <button onClick={checkuser} className="bg-[#8272DA] px-6 py-1 text-sm mt-2 rounded-md">
          Login
        </button>
        <p>
          Don't have an account ?{" "}
          <Link className="text-blue-600 hover:underline " to={"/signup"}>
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
