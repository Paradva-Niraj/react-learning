const TodoItem = ({todoItems,deletetodo}) => {
    const deleteitem = (index) =>{
      deletetodo(index);
    }

    return (
        <>
                {todoItems.map((value,index) => (
                    <div key={index} className="container">
                    <div className="row">
                      <div className="col-6">
                        {value.name}
                      </div>
                      <div className="col-4">
                        {value.date}  
                      </div>
                      <div className="col-2">
                        <button className="btn btn-danger btn-lg" onClick={()=>{deleteitem(index)}}> delete </button>
                      </div>
                    </div>
                  </div>
                ))}
        </>
    );    
};

export default TodoItem;