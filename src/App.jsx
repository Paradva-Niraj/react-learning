import { useState } from 'react';
import './App.css'
import AppName from './components/AppName'
import TodoInput from './components/TodoInput'
import { itemcontext } from './Store/items-store';

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

  const delitem = (index) =>{
    
    const del = item.filter((_,i)=>i!==index);
    setitem(del);
  };

  return (
    <itemcontext.Provider value={{item,changeItem,delitem}}>
     <div>
      <AppName />
      <TodoInput/>
      {/* <TodoInput changeItem={changeItem} deletenode={deleteitem}/> */}

      {/* <button onClick={increase}>count : {count}</button> */}
     </div>
    </itemcontext.Provider>
  )
}

export default App
