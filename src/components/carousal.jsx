import slide1 from "../images/bmsimage1.avif";
import slide2 from "../images/bmsimage2.avif";
import slide3 from "../images/bmsimage3.avif";
import "../styles/carousal.css"

const Carousal = () => {
    
    let data =[{
        image:slide1
    },{
        image:slide2
    },{
        image:slide3
    }]
    return (
        <div className="carousal">
            <marquee behavior="scroll" direction="right" scrollamount="20">
                    {data.map((x)=>{
                        return(
                                <img src={x.image} alt="" />
                        )
                    })}
                    </marquee>
        </div>
     );
     
}

 
export default Carousal;