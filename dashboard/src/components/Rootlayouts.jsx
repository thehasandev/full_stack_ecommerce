
import { Outlet } from 'react-router-dom'
import Sidevar from './Sidevar'

function Rootlayouts() {
  return (
    <div style={{display:"flex" , gap: "50px"}}>
      <Sidevar/>
      <Outlet/>
    </div>
  )
}

export default Rootlayouts