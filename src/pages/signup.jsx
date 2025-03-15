import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup(props) {
    var navigate = useNavigate()
    var users = props.users
    var setusers = props.setusers

    const [uinput,setuinput] = useState()
    const [pinput,setpinput] = useState()

function handleuinput(event){
    setuinput(event.target.value)
    }
function handlpuinput(event){
    setpinput(event.target.value)
    }

function adduser(){
    setusers([...users,{username:uinput,password:pinput}])
    navigate("/")
}

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-2xl font-semibold">Hey Hi👋</h1>
        <p>You can Signup here :)</p>
        <div className="flex flex-col gap-2 pt-3 w-[30vw]">
          <input
          value={uinput}
          onChange={handleuinput}
            placeholder="Username"
            className="border border-black rounded-md p-1"
          ></input>
          <input
          value={pinput}
          onChange={handlpuinput}
            placeholder="Password"
            className="border border-black rounded-md p-1"
          ></input>
          <input
            placeholder="Confirm Password"
            className="border border-black rounded-md p-1"
          ></input>
        </div>
        <button onClick={adduser} className="bg-[#FEA200] px-6 py-1 text-sm mt-2 rounded-md">
          Sign up
        </button>
        <p>
          Already have an account ?{" "}
          <Link className="text-blue-600 hover:underline " to={"/"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;
