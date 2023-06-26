import { useState, useEffect } from "react"
import "../styles/favourites.css"
import Favlogic from "./favouriteslogic"
const Fav = () =>{
    let [movies, setMovies] = useState([])

    let deleteMovie = (id) =>{
        let result = movies.filter((y) => y.id!==id)
        setMovies(result)
    }

    useEffect(() => {
        let fetchData = async() => {
            let response = await fetch('https://favourite-movie-api.onrender.com/movies')
            let data = await response.json()
            setMovies(data)
            // console.log(data.movies);
        }
        fetchData()
    },[])
    
    let remove = () => {
        setMovies([])
    }
    
    return(
        <div className="favourites">
            <div className="heading">
                <h1>Favourite Movies</h1>
            </div>
            <div className="removeallbutton">
                <button onClick={remove}>Remove All</button>
            </div>
           <Favlogic data={movies} fav={deleteMovie} />

           <div className="heading">
               <h1>Favourite Movies based on rating</h1>
            </div> 
            <Favlogic data={movies.filter((y) => y.rating>=4.5)} fav={deleteMovie} />

            <div className="heading">
                <h1>Favourite Movies based on Genre</h1>
            </div>
            < Favlogic data={movies.filter((y) => y.genre === 'Action')} fav={deleteMovie} />


            </div>
    )
}
export default Fav;

// https://manojstoragehouse.s3.ap-south-1.amazonaws.com/movies.json