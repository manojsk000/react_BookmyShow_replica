import "../styles/addfavourites.css"
import Favimg from "../images/addfav.jpg"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

const Addfav = () => {

    let navigate = useNavigate()

    let[title, setName] = useState("")
    let[genre, setGenre] = useState("")
    let[rating, setRating] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault()
        let data = {title, genre, rating}
        //console.log(data);
        fetch("https://favourite-movie-api.onrender.com/movies", {
            method: 'POST',
            mode: "cors",
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        alert("Movie Added")
        navigate('/favourites')
    }
    return(
        <div className="addfav">
            <div className="form">
                <div className="flex">
                <div className="left">
                    <img src={Favimg} alt="" />
                </div>
                <div className="right">
                    <div className="heading">
                        <h1>Add Favourites</h1>
                    </div>
                    <div className="form1">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="title">
                            <input type="text" value={title} onChange={(e)=>setName(e.target.value)} placeholder="Title*" required />
                            </div>
                            <div className="genre">
                            <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)} placeholder="Genre*" required />
                            </div>
                            <div className="rating">
                            <input type="text" value={rating} onChange={(e)=>setRating(e.target.value)} placeholder="Ratings" />
                            </div>
                            <div className="button">
                                <button>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Addfav