import Addtodoform from "./Addtodoform";
import Todolist from "./Todolist";
import { useState } from "react";
function Todocont() {
  
  const [activityarray,setactivityarray] = useState([
    {id:1,
      activity:"wake up early"
    },
    {id:2,
      activity:"have a breakfast"
    },
    {id:3,
      activity:"go to gym"
    }
  ])
 
  return (
    <div>
        <div className="flex items-center gap-5 flex-wrap">
        <Addtodoform activityarray ={activityarray} setactivityarray={setactivityarray}></Addtodoform>
        <Todolist activityarray ={activityarray} setactivityarray={setactivityarray}></Todolist>
      </div>
    </div>
    
  );
}
export default Todocont;
