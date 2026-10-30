import { useState } from 'react'
import './App.css'
interface list{
  tresc:string;
  checked: boolean;
}
function changeCheck(check:boolean){
  let checkie = !check;
  return(
    checkie
  );
}
function Lista({tresc, checked}:list){
  return(
      <div>
           <p>{tresc} <input type="checkbox" checked={checked} onClick={()=>changeCheck}/></p>
      </div>
    );
}

function render(list : any[], title : string){
  return(
      <div>
        <h1>{title}</h1>
        <div>
          {list.map(l=> <Lista tresc={l.tresc} checked={l.checked}/>)}
        </div>
      </div>
  );
}
function text_note(event:React.ChangeEvent<HTMLInputElement>){
  let txt = event.currentTarget.value;
  return(
    txt
  );
}
function check(event:React.ChangeEvent<HTMLInputElement>){
  let if_checked = true;
  return(
    if_checked
  );
}
function setTasks(name:string, checker:boolean){
  
}
function App() {
  const List = [ 
    {
      tresc: "Jakis tekst",
      checked: true
    },
    {
      tresc: "Jakis tekst",
      checked: false
    },
  ]
  List.push(
    {
      tresc: "Jakis tekst2",
      checked: true
    }
    
  )
  return(
    <div>
      <p><input type="text"onChange={text_note} /> <input type="checkbox" onChange={()=>check}/></p>
      <button onClick={setTasks}>Add Task</button>
      {render(List,"Lista jakas")}
    </div>
      
    );

}


export default App

//Psze Pana, my mamy w większości poniżej 18 lat, braku doświadczenia z tymi rzeczami I POWOLNE TEMPO PRACY. dodatkowo posiadam problemy ze stresem wiec sie poryczałam w między czasie 3 razy. Prosiłabym o przemyslenie tego typu zadań