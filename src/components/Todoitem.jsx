function Todoitem(props){

    const activityarray = props.activityarray
    const setactivityarray = props.setactivityarray

    function handledelete(deletedid)
    {
       var temparr = activityarray.filter(function(item){
        if(item.id===deletedid){
            return false
        }
        else{
            return true
        }
       })
       
       setactivityarray(temparr)

    }

    return(<div className="flex justify-between">
    <p>{props.index+1}. {props.activity}</p>
    <button className="text-red-600" onClick={()=>handledelete(props.id)}>Delete</button>
    </div>)

}
export default Todoitem
