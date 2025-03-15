import { useState } from "react"

function Addtodoform(props){
    const activityarray = props.activityarray
    const setactivityarray = props.setactivityarray

    const[newactivity,setnewactivity]=useState("")

    function handlechange(event){
        setnewactivity(event.target.value)
    }
    function addactivity(){
        setactivityarray([...activityarray,{id:activityarray.length+1,activity:newactivity}])
        setnewactivity("")
    }

    return(
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Manage Activities</h1>
        <div>
        <input value={newactivity} onChange={handlechange} placeholder="Next Activity?" className="p-1 border border-black bg-transparent rounded-sm"></input>
        <button onClick={addactivity} className="bg-black text-white p-1 border border-black rounded-sm">Add</button>
        </div>
    </div>
    )
}
export default Addtodoform