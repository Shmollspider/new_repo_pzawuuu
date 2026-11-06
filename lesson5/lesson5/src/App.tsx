import { useState } from 'react'
import './App.css'
// interface list{
//   tresc:string;
//   checked: boolean;
// }
// function changeCheck(check:boolean){
//   let checkie = !check;
//   return(
//     checkie
//   );
// }
// function Lista({tresc, checked}:list){
//   return(
//       <div>
//            <p>{tresc} <input type="checkbox" checked={checked} onClick={()=>changeCheck}/></p>
//       </div>
//     );
// }

// function render(list : any[], title : string){
//   return(
//       <div>
//         <h1>{title}</h1>
//         <div>
//           {list.map(l=> <Lista tresc={l.tresc} checked={l.checked}/>)}
//         </div>
//       </div>
//   );
// }
// function text_note(event:React.ChangeEvent<HTMLInputElement>){
//   let txt = event.currentTarget.value;
//   return(
//     txt
//   );
// }
// function check(event:React.ChangeEvent<HTMLInputElement>){
//   let if_checked = true;
//   return(
//     if_checked
//   );
// }
// function setTasks(name:string, checker:boolean){
  
// }
// function App() {
//   const List = [ 
//     {
//       tresc: "Jakis tekst",
//       checked: true
//     },
//     {
//       tresc: "Jakis tekst",
//       checked: false
//     },
//   ]
//   List.push(
//     {
//       tresc: "Jakis tekst2",
//       checked: true
//     }
    
//   )
//   return(
//     <div>
//       <p><input type="text"onChange={text_note} /> <input type="checkbox" onChange={()=>check}/></p>
//       <button onClick={setTasks}>Add Task</button>
//       {render(List,"Lista jakas")}
//     </div>
      
//     );

// }


// export default App
//Wybaczy mi pan takie agresywne napisanie, byłam pod wpływem silnych emocji
interface TaskProps {
  title:string,
  isDone: boolean,
  id: number,
  toggleT?: ()=> void,
  deletetask?: ()=> void
}
const base_Tasks: TaskProps[] = [
  {id:1,title:'kot', isDone: true},
  {id:2,title:'kit', isDone: false}
]
function Task({id,title,isDone,toggleT}:TaskProps){
  return(
    <div>
        <input type="checkbox" checked={isDone} onChange={toggleT}/>
        <div key={id}>{title}-({isDone? "done":"Not done"})</div>
    </div>
  )
}

function App() {
  const [Tasks, SetTask] = useState(base_Tasks)
  const[filter, setfilter] = useState<fliterMode>("all")
  const[status, setstatus] = useState<sort>('orginal')
  const [textstate, setextstate] = useState('')
  type fliterMode = 'all'|'done'|'not done'
  type sort = 'alfabetyczne'| 'stan'|'orginal'

  function Toggle(id:number){
    return Tasks.map(t=>{
      if (t.id === id) {
        t.isDone = !t.isDone;
      }
      return t;
    })
  }
  function addTask(){
    if(!textstate.trim()) return;
    const newTask : TaskProps = {
      title: textstate,
      id: Date.now(),
      isDone: false
    }

    SetTask([newTask,...Tasks])
  }
  const incomplete = Tasks.filter(
    (Task:TaskProps):boolean => !Task.isDone).length;

//ask abt dodawanie or rather check it

  return(
    <div>
      <input type="text" placeholder='meow meow' onChange={(e)=> setextstate(e.target.value)}/>
      <button onClick={addTask}>Dodaj</button>
      <br />
      <button onClick={()=> setfilter('all')}>ALL</button>
      <button onClick={()=> setfilter('done')}>DONE</button>
      <button onClick={()=> setfilter('not done')}>NOT DONE FAH</button>
      <button onClick={()=> setstatus('alfabetyczne')}>alphabet</button>
      <button onClick={()=> setstatus('stan')}>statefuck knows</button>
      <button onClick={()=> setstatus('orginal')}>org</button>

      

        {Tasks.filter(task => {
          if (filter === 'all') {
            return true;
          }
          if (filter ==='done') {
            return task.isDone;
          }
          if (filter==='not done') {
            return !task.isDone;
          }
        })
        .toSorted((a : TaskProps, b : TaskProps) : number | undefined =>{
          if(status === 'orginal'){
            return 0;
          }
          else if(status === 'alfabetyczne'){
            return a.title.localeCompare(b.title);
          }
          else if (status === 'stan') {
            return Number(a.isDone) - Number(b.isDone)
          }
        })
        .map(task => <Task id={task.id} title={task.title} isDone={task.isDone} toggleT={() => SetTask(Toggle(task.id))}/>)}
        {incomplete} tasks left
    </div>
      
    );

}


export default App