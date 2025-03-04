import { useState } from 'react';
import './App.css'
import AppName from './components/AppName'
import TodoInput from './components/TodoInput'

function App() {

  let [item, setitem] = useState([
    {
      name : "eating",
      date : "2/5/2021",
    },
    {
      name : "play",
      date : "2/5/2021",
    },
    {
      name : "searies watch",
      date : "2/5/2021",
    },
    {
      name : "searies watch",
      date : "2/5/2021",
    }
  ]);

  


  // let [count,setcount] = useState(0);

  const increase = () => {
    setcount (count + 1);
  };

  const changeItem = (name,date) =>{

    const newi = {name:name,date:date};
    setitem([...item,newi]);
  }

  const deleteitem = (index) =>{
    
    const del = item.filter((_,i)=>i!==index);
    setitem(del);
  };

  return (
    <>
     <div>
      <AppName />
      <TodoInput todoItem={item} changeItem={changeItem} deletenode={deleteitem}/>
      {/* <button onClick={increase}>count : {count}</button> */}
     </div>
    </>
  )
}

export default App
