import Navbar from "./Navbar"
import { albumsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"

const DisplayHome =() => {
  return (
    <div>
      <Navbar/>
      <div className="my-5 font-bold text-2xl">
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} />))}
      </div>
    </div>
  )
}

export default DisplayHome
