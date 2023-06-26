import movie1 from "../images/movies1.avif"
import movie2 from "../images/movies2.avif"
import movie3 from "../images/movies3.avif"
import movie4 from "../images/movies4.avif"
import movie5 from "../images/movies5.avif"
import '../styles/movies.css'
const Movies = () =>{
    let movieData =[{
        image:movie1,
        title:"Kisi Ka Bhai Ki Jaan",
        genre:"Action/Comedy/Drama"
    },
    {
        image:movie2,
        title:"Kisi Ka Bhai Ki Jaan",
        genre:"Action/Comedy/Drama"
    },
    {
        image:movie3,
        title:"Kisi Ka Bhai Ki Jaan",
        genre:"Action/Comedy/Drama"
    },
    {
        image:movie4,
        title:"Kisi Ka Bhai Ki Jaan",
        genre:"Action/Comedy/Drama"
    },
    {
        image:movie5,
        title:"Kisi Ka Bhai Ki Jaan",
        genre:"Action/Comedy/Drama"
    }
]
return (
    <div className="movie">
        <div className="title">
        <h1>Recommended Movies</h1>
        <p>See All &gt;</p>
        </div>
        <div className="movies">
        {movieData.map((data)=>{
            return (
                <div className="moviesList">
                    <img src={data.image} height="350" width="200" alt=""  />
                    <h3>{data.title}</h3>
                    <h4>{data.genre}</h4>
                </div>
            )
        })}
    </div>
    </div>
);
}
export default Movies;