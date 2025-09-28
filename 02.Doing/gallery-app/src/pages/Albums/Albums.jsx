import albumsData from "../../data/albumsData";
import AlbumCard from "../../molecules/AlbumCard";
import "./Albums.css";

export default function Albums () {
  return(
    albumsData.map((album, i)=> {
      return (<AlbumCard album={album} key={i} />)
    })
  )
  }