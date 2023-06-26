import Carousal from "./carousal"
import Movies from "./movies"
let Home=()=>{
    return(
        <div className="home">
            <Carousal />
            <Movies />
        </div>
    )
}
export default Home;