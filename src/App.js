import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React,{ useEffect, useState } from 'react';

function App() {
  var person = {
                name: "Dr. Mahfuz",
                job: "Singer"
               }
  var person2 = {
                name: "Eva Rahman",
                job: "Kokil konthi"
               }
  var style={
    color : 'red',
    backgroundColor : 'yellow'
  }
  const players = ['Sakib Al Hasan','Mushfiqur Rahim','Tamim Iqbal','Mahmudullah Riad','Mehidy Hasan Miraz','Liton Das']
  const products = [
    {name:"Photoshop",price:"$90.99"},
    {name:"Illustrator",price:"$60.99"},
    {name:"PDF Reader",price:"$6.99"},
    {name:"Premiere EL",price:"$249.99"},
  ]
  // const productNames = products.map(product => product.name)
  // const playerNames = players.map(player => player)
  // console.log(playerNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>My heading : {person.name + ' is a ' + person.job}</h1>
        <h3 style={{color : 'yellow',backgroundColor : 'cyan'}}>Singer : {person2.name + ' is a ' + person2.job}</h3>
        <p>My first react paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <ol>
          {
            players.map(player => <li>{player}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ol>
        <div style={{display: 'flex'}}>
          {
            products.map(pd => <Product product={pd}></Product>)
          }
          {/* <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
          <Product product={products[2]}></Product>
          <Product product={products[3]}></Product> */}
        </div>
        <div style={{display: 'flex'}}>
          <Person name={players[0]} year="2018"></Person>
          <Person name={players[1]} year="2019"></Person>
          <Person name={players[2]} year="2020"></Person>
          <Person name={players[3]} year="2021"></Person>
        </div>
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrese = () => setCount(count + 1);
  const handleDecrese = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <div style={{display:'flex'}}>
        <button style={{marginLeft:'5px',padding:'5px'}} onClick = {handleIncrese}>Increase</button>
        <button style={{marginLeft:'5px',padding:'5px'}} onClick = {handleDecrese}>Decrease</button>
      </div>
    </div>
  )
}
function Users(){
  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  })
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'gray',
    height:'200px',
    width:'200px',
    float:'left',
    padding: '10px',
    margin: '10px',
  }
  const{name,price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style={{backgroundColor:'#61DAFB',border:'none',borderRadius:'20px',fontSize: '20px',padding: '10px'}}>Buy now</button>
    </div>
  )
}
function Person(props) {
  const personStyle ={
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (
      <div style={personStyle}>
        <h1>{props.name}</h1>
        <h3>Hero of the year,{props.year}</h3>
      </div>
  )
}

export default App;
