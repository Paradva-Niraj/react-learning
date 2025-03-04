import { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import { itemcontext } from "../Store/items-store";


function TodoInput (){
  const {item} = useContext(itemcontext);
  const {changeItem} = useContext(itemcontext);
  let [items,setitem] = useState("");
  let [date,setdate] = useState("");
  const additem = () =>{
    if(items!="" && date!="")
    {
      changeItem(items,date);
      setitem("");
      setdate("");
    }
    else{
      alert("check value are not corrct")
    }
  }


  const deleteitem = (index) =>{
    deletenode(index);
  };
    return <>
      
        {/* <form action="#" className="form"> */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <input type="text" className="form-control form-control-lg mb-3" value={items} onChange={(e)=>setitem(e.target.value)} placeholder='Enter Todo'></input>
            </div>
            <div className="col-4">
              <input type="date" className="form-control form-control-lg md-3 alert-primary" value={date} onChange={(e)=>setdate(e.target.value)} ></input>
            </div>
            <div className="col-2">
              <button className="btn btn-success btn-lg" onClick={additem}> ADD </button>
            </div>
          </div>
        </div>
        <TodoItem/>
      {/* </form> */}
    </>
}

export default TodoInput;