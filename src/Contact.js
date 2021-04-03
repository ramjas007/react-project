import React,{useEffect,useState} from 'react';


function Contact(props){
    //const [name,setname]=useState("ram")
   // const [age,setage]=useState(26)

    useEffect(()=>{
        console.warn("check props1 for update",props.name)
    },[]
)
useEffect(()=>{
    console.warn("check props2 for update",props.name)
},[props.name])
const [val,setval]=useState("anil kumar")
const test =(e)=>
{
    console.warn("test function",e.target.value)
    setval(e.target.value)
}
    let data = "let just first kill you";
    return ( 
    
    <div >
        <h1 >
        Contact us

        </h1>
        <h1>
            {data}
        </h1>
        <h2>
            {props.name}
        </h2>
        <input type ="text" onChange={test} value={val} />
        <button onClick ={()=> alert(val)} >on click</button>
    </div > 

    )
}

export default Contact;


/*
useEffect(()=>{
    console.warn("use of hook",{props})
},[age]
)
let data = "let just first kill you";
return ( 

<div >
    <h1 >
    Contact us

    </h1>
    <h1>
        {data}
    </h1>
    <h2>
        {name}
    </h2>
    <h2>
        {age}
    </h2>
    <button onClick={()=> setname('anil_sidhu')}> update thid thing</button>
    <button onClick={()=> setage(98)}> update age thing</button>
</div > 

)*/