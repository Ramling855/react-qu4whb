import React,{useEffect,useState} from "react";
import "./style.css";
import {put,add,remv} from './seatSlice';
import {useSelector,useDispatch}from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Timerj from'./Timer';
import{ Link} from 'react-router-dom'
import yellow from "@mui/material/colors/yellow";
// import{add} from './seatSlice'


export default function Show() {
  const[match,setMatch]=useState(0)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const seat=useSelector((state)=>state.sea.data)
  const[out,setOut]=useState([])
  const[color,setColor]=useState([])
const Payment=(all)=>{
  // dispatch(put(all))
dispatch(put(all.seatNo))
setMatch(all.seatNo);
// if(match!==all.seatNo){out.push(seat)}
setColor([...color,all.seatNo])
// navigate('/Success')
}
const Payment1=(all)=>{
  dispatch(remv(all))

}
console.log(match,'ma')
console.log(seat,'tt')
const Pay=()=>{
  navigate('/Success')
}


useEffect(()=>{
  

},[])

 
  const co=useSelector((state)=>state.sea.seat)
  
  return (
    <div>
       <Timerj/>
       <button onClick={Pay}>Pay all</button>
     
{seat.map((all,i)=>{
  
  var colors=color.includes(all.seatNo)?'red':'green';

  return <li key={i} style={{display:'inline-block' ,padding:'2%'}}><h1>{all.seatNo}</h1>
<h1>{all.img}</h1> 
<h1>{all.Price}</h1>
<button onClick={()=>Payment(all)}
 style={{backgroundColor:colors}}>confirm</button>
 <button onClick={()=>Payment1(all)}
 style={{backgroundColor:'yellow'}}>remove</button>
 </li>
}

)}<br/>



    </div>
  );
}
