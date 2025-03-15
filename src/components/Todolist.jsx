
import Todoitem from "./Todoitem"

function Todolist(props){
  
  const activityarray = props.activityarray
  const setactivityarray = props.setactivityarray

    return(  <div className="bg-[#BDB4EB] border rounded-md p-2.5 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        
        {
          activityarray.length === 0?<p>You haven't added anything yet</p>:""
        }
        {
          activityarray.map(function(item,index){
            return <Todoitem index={index} activity={item.activity} id={item.id} activityarray={activityarray} setactivityarray={setactivityarray}></Todoitem>
          })
        }
      </div>)
}
export default Todolist