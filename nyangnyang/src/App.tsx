import './App.css'
import { useState } from "react";
interface Movie{
  title?:string;
  year?:number;
  img?:string;
  rating: number;
}
interface props{
  // /** Imie osoby do greetings, auto = no one*/
  // person?: string;
  // /** Opcjonalny czas! auto =12*/
  // time?: string;
  title?:string;
  year:number;
  img?:string;
  m_link?:string;
  strony?:number;
  tracks?: string[];
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
function Books({title, year, img, strony}:props){
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
      </div>
    );
}
function Albums({title, year, img, m_link}:props){

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
      tracks: ["Track 1", "Track 2", "Track 3"]
    },
    {
      title: "Wodymidaj",
      year: 2019,
      img: "./public/kw.jpg",
      mlink: "https://www.youtube.com/watch?v=sIBazzGIeLw"
    },
    {
      title: "Through Patches of Violet",
      year: 2024,
      img: "./public/patches.jpg",
      mlink: "https://www.youtube.com/watch?v=G_JfKOjwzwo"
    },
    {
      title: "compass",
      year: 2023,
      img: "./public/compass.jpg",
      mlink: "https://www.youtube.com/watch?v=92E0X59wzeg"
    }
  ]
  Movies.sort((a, b) => (a.title).localeCompare(b.title));
  albums.sort((a, b) => (a.title).localeCompare(b.title));
  books.sort((a, b) => (a.title).localeCompare(b.title));
  const movies_after2010 = Movies.filter(movie => movie.year > 2010);
  const books_new = [...books].sort((a, b) => (b.year - a.year));
  return(
    <div>
      <div>
      <h1>MOVIES AND SERIALS</h1><br />
        <div className='put_correct'>
        {Movies.map(m=> <Movie title={m.title} year={m.year} img={m.img} rating={m.rating}/>)}
        </div>
      </div>
      <div>
        <h1>Music/Albums</h1><br />
        <div className='put_correct'>
          {albums.map(mm=> <Albums title={mm.title} year={mm.year} img={mm.img} m_link={mm.mlink} />)}
        </div>
      </div>
      <div>
        <h1>Books</h1><br />
        <div className='put_correct'>
          {books.map(b=> <Books title={b.title} year={b.year} img={b.img} strony={b.strony} />)}
        </div>
      </div>
      <div>
      <h1>MOVIES AFTER 2010</h1><br />
        <div className='put_correct'>
        {movies_after2010.map(m=> <Movie title={m.title} year={m.year} img={m.img} rating={m.rating}/>)}
        </div>
      </div>
      <div>
      <h1>NEWEST BOOKS</h1><br />
        <div className='put_correct'>
        {books_new.map(b=> <Books title={b.title} year={b.year} img={b.img} strony={b.strony} />)}
        </div>
      </div>
    </div>
    
  );
}
export default App
