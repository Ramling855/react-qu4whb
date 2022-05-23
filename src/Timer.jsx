import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
const Timer =()=>{
  const navigate=useNavigate()
  const[min,setMin]=useState(2);
  const[sec,setSec]=useState(60);
  var timer;
 useEffect(()=>{
timer=setInterval(()=>{

  if(min!==0){
    if(sec){setSec(sec-1)
    }else if(sec==0){setSec(100-40)
    setMin(min-1)
    }else if(min==0){setSec(0)}
      }
      switch(min){
        case 0:
          setSec(0)
          navigate('/Theatre')
      }

},1000)
return ()=>clearInterval(timer)
 })
return <div>

<h1>timer</h1>
<h1>{min}:{sec}</h1>

</div>
}
export default Timer;