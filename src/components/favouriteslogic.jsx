import Delete from '../images/trash-outline.svg'
const Fav = (y) => {
    let movies = y.data
    let deleteMovie = y.fav
    return (
        <div className="background">
            {movies.map((x) => (
                <div className="list">
                    <div className="movieList">
                        <h2>Title:{x.title}</h2>
                        <p>Genre:{x.genre} / Rating:{x.rating}</p>
                    </div>
                    <div className="button">
                    <button onClick={() => deleteMovie(x.id)}><img src={Delete} alt="" /></button>
                    
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Fav;

//