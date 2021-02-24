import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

//Main Function of Component----
function App() {
  const products = [
    {name:'Laptop',price:'$500'},
    {name:'Mobile',price:'$200'},
    {name:'Tablet',price:'$100'},
    {name:'Watch',price:'$50'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <Person></Person>
        <Person></Person>
        <Person></Person>

        // Dynamically using props
        <Actors nayok='Salman Sah' naika ='Shabnur'></Actors>
        <Actors nayok ='Omor Sani' naika ='Mousumi'></Actors>
        <Actors nayok = 'Sakib Khan' naika ='Opu Bissas'></Actors>

       <State></State>

       <Products name={products[0].name} price ={products[0].price}></Products>
       <Products name={products[1].name} price ={products[1].price}></Products>
       <Products name={products[2].name} price ={products[2].price}></Products>

       <Users></Users>

      </header>
    </div>
   );        
};

//------------------Create Static Component----------------------
function Person(){
  const personStyle = {
    color:'gold',
    border: '5px solid green',
    borderRadius :'10px',
    padding:'30px',
    margin:'20px'
  }
    return(
    
      <div style ={personStyle}>
        <h1>Name: Tuhin Khan</h1>
        <h3>Job: Software Engineer</h3>
      </div>
    )
  }

  // -----------------Creating Component with Dynamic Data using Props ----
  function Actors(props){
    const actorStyle ={
      border:'4px solid gold',
      padding:'30px',
      margin:'20px',
      borderRadius:'10px',
      color:'lime'
    }
    return(
      <div style ={actorStyle}>
        <h1>Hero : {props.nayok}</h1>
        <h2>Heroin : {props.naika}</h2>
      </div>
    )
  }

  // Creating component using props from array object

  function Products(props){
    const productStyle ={
      color:'gold',
      borderRadius:'20px',
      backgroundColor:'gray',
      padding:'30px',
      margin:'20px',
      
    }
  
  
   
    return (
        <div style ={productStyle}>
            <h2>Name: {props.name}</h2>
            <h1>Price: {props.price}</h1>
            <button style ={{padding:'10px', borderRadius:'10px' , backgroundColor:'green', color:'gold'}}>Buy Now</button>
  
        </div>
    )
  }

// -----------------Component For State count increase and Decrease -----------------
function State(){
  const [count,setCount]= useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count-1);
  
  return(
    <div>
      <h1>Count : {count}</h1>
    <button onClick ={handleIncrease} style={{padding:'10px', marginRight:'10px',border:'none', borderRadius:'7px', backgroundColor:'green',color:'white'}}>Increase</button>

    <button onClick={handleDecrease} style={{padding:'10px',border:'none', borderRadius:'7px', backgroundColor:'red',color:'white'}}>Decrease</button>
    </div>
    
  )
}

//---------------User data using useEffect and API-------------
function Users(){
  const [users,setUsers] = useState(0);

  useEffect(()=>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[]);
  const friends =['arafat','riaj','orin']
  return(
    <div>
        <h2>Dynamic User List using API :{users.length}</h2>
    <ul>
      {
        users.map(uname => <li>{uname.name}</li>)
      }
    </ul>
    </div>
  )
}

export default App;
