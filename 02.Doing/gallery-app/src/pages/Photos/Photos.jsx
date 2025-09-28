import photosData from "../../data/photosData";
import PhotoCard from "../../molecules/PhotoCard";
import "./Photos.css";

export default function Photos () {
  // console.log(photosData);
  return (    
    photosData.map((photo, i)=>{
      return(
        <PhotoCard photo={photo} key={i} />
      )
    })
  )
}