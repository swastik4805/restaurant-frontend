import { useEffect, useState } from "react";

const data=[
    "https://st.depositphotos.com/2288675/2455/i/950/depositphotos_24553989-stock-photo-hotel.jpg",
    "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Lands_End_Mumbai/images/4x3/R&S_WOGLI_Exterior-Master.jpg"

]



const ImageSlider=()=>{
    const [activeImg, setActiveImg] =useState(1);

    const handlePrevious=()=>{
        setActiveImg((activeImg-1+data.length)%data.length);
    }
    const handleNext=()=>{
        setActiveImg((activeImg+1)%data.length);
    }
    
    useEffect(()=>{
        const timer=setTimeout(()=>{
            handleNext();
        },2000);
        return()=>{
            clearTimeout(timer);
        }
    })


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <button onClick={handlePrevious}>Previous</button>

            <img src={data[activeImg]} style={{ width: "600px", height: "300px" }} alt="'Wallpaper" />

            <button onClick={handleNext}>Next</button>
        </div>
    )
}
export default ImageSlider;