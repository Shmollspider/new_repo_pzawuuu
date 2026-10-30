import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react"
interface Movie{
  title:string;
  year?:number;
  img?:string;
  rating: number;
}
interface albums{
  title:string;
  year:number;
  img?:string;
  m_link?:string;
  tracks: tracks[];
}
interface tracks {
  nummy: number;
  t_title: string;
  SONG_length: string;
  onClick: () => void;
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
function title_case(title: string, tekst?: string){
  if (tekst != undefined) {
    console.log(tekst, title);
  }
  else{
    console.log("Tytuł Filmu:", title);
  }
}

function handleSongClick(title: string, albumTitle: string) {
  console.log("Kliknięto utwór ",title," z albumu ",albumTitle)
}

function wypis(event : React.ChangeEvent<HTMLInputElement>){ //ZAPAMIETAJ ALEX, YOU EXTRA DUMB, REVISE
  console.log(event.currentTarget.value);
}

function Movie({title, year, img, rating}:Movie){
  
  let polecenie = 0;
  if (rating >= 8) {
    polecenie = 1;
  }
    return(
      <div className="container">
            <div className="card">
              <img src={img} className="card-img-top"></img>
              <div className="card-body">
                <p className="card-title" onClick={() => title_case(title)}>
                  {title}
                </p>
                <p className="card-text">{year}</p>
                <button className="btn btn-info" onClick={() => title_case(title, "Przycisk Kliknięty: Szczegóły filmu:")}>Pokaż Szczegóły</button>
                <p className="card-text">Rating: {rating}</p>
                {polecenie == 1 && <p className="card-text">Polecany!</p>}
              </div>
            </div>
      </div>
    );
    
}
function Books({title, year, img, strony}:bookies){
  let klasyka = 0;
  if (year <= 2000) {
    klasyka = 1;
  }
    return(
      <div className="card">
        <img src={img} className="card-img-top"></img>
        <div className="card-body">
          <p className="card-title">{title}</p>
          <p className="card-text">{year}</p>
          <p className="card-text">{strony}</p>
          {klasyka == 1 && <p className="card-text">Klasyka</p>}
        </div>
      </div>
    );
}
function Albums(props:albums){

    return(
      <div className="card">
        <img src={props.img} className="card-img-top"></img>
        <div className="card-body">
          <a href={props.m_link} className="card-link">{props.title}</a>
          <p className="card-text">{props.year}</p>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover "> 
            <tbody>
                {props.tracks.length > 0 ? (props.tracks.map(track => 
                <Trackies nummy={track.nummy} t_title={track.t_title} SONG_length={track.SONG_length} onClick={() => handleSongClick(track.t_title, props.title)} />
            )) : (
              <tr>
                <td className="alert alert-primary" role="alert">Brak utworów</td>
              </tr>
            )}
          </tbody>
          </table>
        </div>
      </div>
    );
}
function Trackies(props: tracks) {
  return (
    <tr className="row" onClick={props.onClick}>
      <td className="col">{props.nummy}</td>
      <td className="col">{props.t_title}</td>
      <td className="col">{props.SONG_length}</td>
    </tr>
  );
}
function render_movie(Movies : any[],title : string){
  const [isOpen, changieee] = useState(true);
  function list_sthsth(){
    changieee(!isOpen);
  }
  const[tekies, use_for_tekst] = useState("");
    function helper(event:React.ChangeEvent<HTMLInputElement>){
    let txt = event.currentTarget.value;
    txt = txt.charAt(0).toUpperCase() + txt.slice(1);
    use_for_tekst(txt);
    console.log(txt);
  }
  const filtered_movie = Movies.filter(mo=> mo.title.includes(tekies));

  return(
    <div>
    <input id="album-search" type="text" className="form-control" placeholder="Wpisz tytuł" onChange={(event) => helper(event)}/>
    <p>{tekies}</p>
      <h1 onClick={list_sthsth}>{title}{isOpen ? "⏷" : "⏵"}</h1> <br /> 
      {filtered_movie.length == 0 && <p>Nie znaleziono filmów</p>}
        <div className="row row-cols-1 row-cols-md-2 g-2 ">
          {isOpen && filtered_movie.map(m=> <Movie title={m.title} year={m.year} img={m.img} rating={m.rating}/>)}
        </div>
      </div>
  );
}
function render_books(Bookies : any[], title : string){
  const [isOpen, changieee] = useState(true);
  function list_sthsth(){
    changieee(!isOpen);
  }
  const[tekies, use_for_tekst] = useState("Tu jest paragraf");
    function helper(event:React.ChangeEvent<HTMLInputElement>){
    let txt = event.currentTarget.value;
    use_for_tekst(txt);
    console.log(txt);
  }
  return(
    <div>
      <input id="album-search" type="text" className="form-control" placeholder="Wpisz tytuł" onChange={(event) => helper(event)}/>
      <p>{tekies}</p>
        <h1 onClick={list_sthsth}>{title}{isOpen ? "⏷" : "⏵"}</h1> <br />
          <div className="row row-cols-1 row-cols-md-2 g-2 ">
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

  function helper(event:React.ChangeEvent<HTMLInputElement>){
    let txt = event.currentTarget.value;
    use_for_tekst(txt);
    console.log(txt);
  }

  const[tekies, use_for_tekst] = useState("Tu jest paragraf");
  return(
    <div>
      <input id="album-search" type="text" className="form-control" placeholder="Wpisz tytuł" onChange={(event) => helper(event)}/>
      <p>{tekies}</p>
        <h1 onClick={list_sthsth}>{title}{isOpen ? "⏷" : "⏵"}</h1> <br />
          <div className="row row-cols-1 row-cols-md-2 g-2 justify-content-center">
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
    <div className="container">
      {/* :3 */}
      {/* meow meow BURGOIR */}
      {render_movie(Movies, "MOVIES AND SERIALS")}
      {render_books(books,"BOOKS")}
      {render_albums(albums,"ALBUMS")}
      {render_movie(movies_after2010, "MOVIES AFTER 2010")}
      {render_books(books_new,"NEWEST BOOKS")}
      {render_albums(longestAlbum,"LONGEST ALBUM")}
    </div>
    // hehe session (Dania reference) :3c [THIS IS BARTOSZ KIEWSZYNS COMMENT I AM KEEPING IT IN SPITE OF HIM]
  );
}
export default App
