import './App.css'
interface props{
  // /** Imie osoby do greetings, auto = no one*/
  // person?: string;
  // /** Opcjonalny czas! auto =12*/
  // time?: string;
  title?:string;
  year?:number;
  img?:string;
  m_link?:string;
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
//this is to check
function Movies({title, year, img}:props){
    return(
      <div>
        <img src={img} className='img'></img>
        <p>{title}</p>
        <p>{year}</p>
      </div>
    );
}
function Music({title, year, img, m_link}:props){
    return(
      <div>
        <img src={img} className='img'></img>
        <br />
        <a href={m_link}>{title}</a>
        <p>{year}</p>
        
      </div>
    );
}
function App(){
  return(
    <div>
      <div>
      <h1>MOVIES AND SERIALS</h1><br />
      <div className='put_correct'>
        <Movies title="Stray Kids: The dominATE Experience" year={2026} img="./public/skz.jpg"/>
        <Movies title="Project Hail Mary" year={2026} img="./public/hail_mary.jpg"/>
        <Movies title="Frieren" year={2020} img="./public/frieren.jpg"/>
      </div>
     
    </div>
    <div>
      <h1>Music/Albums</h1><br />
      <div className='put_correct'>
        <Music title="Zoltraak" year={2023} img="./public/frieren.jpg" m_link="https://www.youtube.com/watch?v=M7gm_r8hXoU"/>
        <Music title="Wodymidaj" year={2019} img="./public/kw.jpg" m_link="https://www.youtube.com/watch?v=sIBazzGIeLw"/>
        <Music title="Through Patches of Violet" year={2024} img="./public/patches.jpg" m_link="hhttps://www.youtube.com/watch?v=G_JfKOjwzwo"/>
        <Music title="compass" year={2023} img="./public/compass.jpg" m_link="https://www.youtube.com/watch?v=92E0X59wzeg"/>
      </div>
     
    </div>
    </div>
    
  );
}
export default App
