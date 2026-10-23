import './App.css'
import { useState } from "react"
interface Movie{
  title?:string;
  year?:number;
  img?:string;
  rating: number;
}
interface albums{
  title?:string;
  year:number;
  img?:string;
  m_link?:string;
  tracks: tracks[];
}
interface tracks {
  nummy: number;
  t_title: string;
  SONG_length: string;
}

interface bookies{
  title?:string;
  year:number;
  img?:string;
  strony?:number;
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
function Movie({title, year, img, rating}:Movie){
  
  let polecenie = 0;
  if (rating >= 8) {
    polecenie = 1;
  }
    return(
      <div>
        <img src={img} className='img'></img>
        <p>{title}</p>
        <p>{year}</p>
        <p>Rating: {rating}</p>
        {polecenie == 1 && <p>Polecany!</p>}
      </div>
    );
    
}
function Books({title, year, img, strony}:bookies){
  let klasyka = 0;
  if (year <= 2000) {
    klasyka = 1;
  }
    return(
      <div>
        <img src={img} className='img'></img>
        <p>{title}</p>
        <p>{year}</p>
        <p>{strony}</p>
        {klasyka == 1 && <p>Klasyka</p>}
        {klasyka ==2 && <p>Gowno</p>}
      </div>
    );
}
function Albums(props:albums){

    return(
      <div>
        <img src={props.img} className='img'></img>
        <br />
        <a href={props.m_link}>{props.title}</a>
        <p>{props.year}</p>
        <table>
           <tbody>
              {props.tracks.length > 0 ? (props.tracks.map(track => 
              <Trackies nummy={track.nummy} t_title={track.t_title} SONG_length={track.SONG_length} />
          )) : (
            <tr>
              <td colSpan={3}>Brak utworów</td>
            </tr>
          )}
        </tbody>
        </table>
      </div>
    );
}
function Trackies(props: tracks) {
  return (
    <tr>
      <td>{props.nummy}</td>
      <td>{props.t_title}</td>
      <td>{props.SONG_length}</td>
    </tr>
  );
}
function render_movie(Movies : any[],title : string){
  const [isOpen, changieee] = useState(true);
  function list_sthsth(){
    changieee(!isOpen);
  }
  return(
    <div>
      <h1>{title}</h1> <button onClick={list_sthsth} >{isOpen ? "⏷" : "⏵"}</button> <br /> 
        <div className='put_correct'>
        {isOpen && Movies.map(m=> <Movie title={m.title} year={m.year} img={m.img} rating={m.rating}/>)}
        </div>
      </div>
  );
}
function render_books(Bookies : any[], title : string){
  const [isOpen, changieee] = useState(true);
  function list_sthsth(){
    changieee(!isOpen);
  }
  return(
    <div>
        <h1>{title}</h1> <button onClick={list_sthsth} >{isOpen ? "⏷" : "⏵"}</button> <br />
        <div className='put_correct'>
          {isOpen && Bookies.map(b=> <Books title={b.title} year={b.year} img={b.img} strony={b.strony} />)}
        </div>
      </div>
  );
}
function render_albums(albums : any[], title : string){
  const [isOpen, changieee] = useState(true);
  function list_sthsth(){
    changieee(!isOpen);
  }
  return(
    <div>
        <h1>{title}</h1><button onClick={list_sthsth} >{isOpen ? "⏷" : "⏵"}</button><br />
        <div className='put_correct'>
          {isOpen && albums.map(mm=> <Albums title={mm.title} year={mm.year} img={mm.img} m_link={mm.mlink} tracks={mm.tracks}/>)}
          
        </div>
      </div>
  );
}
function highest(array: any[]){
  let max = 0;
  let max_fuck = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i].tracks.length > max){
      max = array[i].tracks.length;
      max_fuck = array[i];
    }
  }

  return [max_fuck];
}
function App(){
  const Movies = [
    {
      title: "Stray Kids: The dominATE Experience",
      year: 2026,
      img: "./public/skz.jpg",
      rating: 7,
    },
    {
      title: "Project Hail Mary",
      year: 2026,
      img: "./public/hail_mary.jpg",
      rating: 9
    },
    {
      title: "Frieren",
      year: 2020,
      img: "./public/frieren.jpg",
      rating: 9
    },
    {
      title: "WALL-E ",
      year: 2008,
      img: "./public/Wall-E.jpg",
      rating: 10
    }
  ]
  const books = [
    {
      title: "Zbrodnia i Kara",
      year: 1866,
      img: "./public/zik.jpg",
      strony: 450
    },
    {
      title: "Córka Głębin",
      year: 2021,
      img: "./public/cg.jpg",
      strony: 200
    },
    {
      title: "Smocza Straż",
      year: 2020,
      img: "./public/ss.jpg",
      strony: 400
    },
    {
      title: "Moby Dick",
      year: 1851,
      img: "./public/bd.jpg",
      strony: 190
    }
  ]
  const albums = [
    {
      title: "Zoltraak",
      year: 2023,
      img: "./public/frieren.jpg",
      mlink: "https://www.youtube.com/watch?v=M7gm_r8hXoU",
      tracks: []
    },
    {
      title: "Niemożliwe",
      year: 2019,
      img: "./public/kw.jpg",
      mlink: "https://www.youtube.com/watch?v=wj5e-ur03f4&list=OLAK5uy_kD_7lqNmOY4eoql8-gm4PS7Ye6whRdOlo",
      tracks: [
          {nummy:1, 	t_title:"Niemożliwe", SONG_length:"3:39"},
          {nummy:2, 	t_title:"Dzień dobry", SONG_length:"3:14"},
          {nummy:3, 	t_title:"Nie ma czasu", SONG_length:"4:20"},
          {nummy:4, 	t_title:"Nic więcej", SONG_length:"4:05"},
          {nummy:5, 	t_title:"Dziś późno pójdę spać", SONG_length:"3:34"},
          {nummy:6, 	t_title:"Za siódmą chmurą", SONG_length:"3:49"},
          {nummy:7, 	t_title:"Kto powie mi jak", SONG_length:"4:24"},
          {nummy:8, 	t_title:"Chodźmy nad wodę", SONG_length:"3:16"},
          {nummy:9, 	t_title:"Wzięli zamknęli mi klub", SONG_length:"3:36"},
          {nummy:10, 	t_title:"Wodymidaj Intro", SONG_length:"2:52"},
          {nummy:11, 	t_title:"Wodymidaj", SONG_length:"4:36"},
          {nummy:12, 	t_title:"Turysta", SONG_length:"5:07"},
      ]
    },
    {
      title: "Through Patches of Violet",
      year: 2024,
      img: "./public/patches.jpg",
      mlink: "https://www.youtube.com/watch?v=G_JfKOjwzwo",
      tracks: []
    },
    {
      title: "compass",
      year: 2023,
      img: "./public/compass.jpg",
      mlink: "https://www.youtube.com/watch?v=92E0X59wzeg",
      tracks: []
    }
  ]
  Movies.sort((a, b) => (a.title).localeCompare(b.title));
  albums.sort((a, b) => (a.title).localeCompare(b.title));
  books.sort((a, b) => (a.title).localeCompare(b.title));
  const movies_after2010 = Movies.filter(movie => movie.year > 2010);
  const books_new = [...books].sort((a, b) => (b.year - a.year));
  const longestAlbum = highest(albums);
  return(
    <div>
      {/* :3 */}
      {/* meow meow BURGOIR */}
      {render_movie(Movies, "MOVIES AND SERIALS")}
      {render_books(books,"BOOKS")}
      {render_albums(albums,"ALBUMS")}
      {render_movie(movies_after2010, "MOVIES AFTER 2010")}
      {render_books(books_new,"NEWEST BOOKS")}
      {render_albums(longestAlbum,"LONGEST")}
    </div>
    // hehe session (Dania reference) :3c [THIS IS BARTOSZ KIEWSZYNS COMMENT I AM KEEPING IT IN SPITE OF HIM]
  );
}
export default App
