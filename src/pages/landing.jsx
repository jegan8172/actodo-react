import Header from "../components/Header"
import Card from "../components/Card"
import Todocont from "../components/Todocontainer"
import { useLocation } from "react-router-dom"
function Landing(){
    const data = useLocation()
    return(
        <div className='bg-black p-14'>
      <div className='bg-[#efefef] p-10 border rounded-md'>
        <Header name={data.state.user}></Header>
        <div className="flex justify-between gap-7 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"29"} subtitle={"Coimbatore"}></Card>
        <Card bgcolor={"#FD6663"} title={"March"} subtitle={"10:30:09"}></Card>
        <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"}></Card>
        </div>
        <Todocont></Todocont>
      </div>
    </div>
    )
}
export default Landing