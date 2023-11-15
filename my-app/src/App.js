import { useState } from 'react';
import './App.css';

var widthy = "";

function TodoList() {

   const [task, setTask] = useState("");
   const [taskItems, setTaskItems] = useState([]);

   function addItem(event) {
      event.preventDefault();

      if(task.trim() !== ""){
         widthy="5px solid black";
        const newItem = {
          key: Date.now(),
          text: task
        };

        setTaskItems(prevItems => [...prevItems, newItem]);
        setTask("");
      }
      event.target.task.focus();
    }

   function deleteItem(key) {
    setTaskItems(prevItems => prevItems.filter(
       item => item.key !== key));
    }

   return (
      <>
         <h1>Todo List</h1>
         <form onSubmit={addItem}>
             {/*<label htmlFor="task">Add task <br /></label> */}
            <input style={{height:"70px",fontSize:"40px", width:"250px"}} id="task" type="text"
            autoFocus 
               value={task} onChange={(e) => setTask(e.target.value)} />
            <button class="stringy" style={{height:"70px", fontSize:"50px"}} type="submit">Add Task</button>
         </form>
         <TodoItems items={taskItems} delete ={deleteItem}/>
      </>
   );
}

function App() {
   const backStyle ={
      backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMW066iShd3Uy8iGyOjryFeMs37e9d_B05f9FTa_1BSql1CyEq7asuLAbZeQ7-ry32LDA&usqp=CAU')",
      height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
   }
   return <div style={backStyle}> 
      <TodoList />

   </div>;
}

function TodoItems(props) {
   const index =1;
   const todoItems = props.items;

  return (
      
     <ul>
         {
            todoItems.map((item) =>
            <div class={flip} color='red'>
               {rand()}
               <p>{item.text}  
                  <button class="delete" onClick={() => props.delete(item.key)}>
                  X
                  </button>
               </p>
               
            </div>
            )
         }
        { /*todoItems.map((item) =>
        <div width="80px" text-align="left" style={{fontSize: '30px',background:"light green"}}>
            
           <li key={item.key}>
              {item.text}
              <button onClick={() => props.delete(item.key)}>
                  X
               </button>
           </li>
         </div>
  ) */}
     </ul>
  );
}
var flip ="item1";

function rand(){
   if(flip ==="item1"){
      flip="item2";
   } else {
      flip="item1";
   }
}
export default App;