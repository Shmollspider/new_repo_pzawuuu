interface props{
  // /** Imie osoby do greetings, auto = no one*/
  // person?: string;
  // /** Opcjonalny czas! auto =12*/
  // time?: string;
  title?:string;
  year?:number;
  img?:string;
}
// function Welcome({time = "12", person = "no one"}:props){
//   let tmp_time =  Number(time);
//   if (tmp_time < 12) {
//     return(
//       <p>Good morning {person}! It's {tmp_time} o'clock</p>
//     );
//   }
//   else{
//     return(
//       <p>Good afternoon {person}! It's {tmp_time} o'clock</p>
//     );
//   }
  
// }
function Movies({title, year, img}:props){
    return(
      <div>
        <h1>MOVIES</h1>
        <img src="img"></img>
        <p>{title}</p>
        <p>{year}</p>
      </div>
    );
}
function App(){
  return(
    <Movies title="ori" year={2023} img="/ori.jpg"/>
  );
}
export default App
