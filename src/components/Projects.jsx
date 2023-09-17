import coop from "../assets/coop.png"
import amap from "../assets/amap.png"
import {GrProjects} from "react-icons/gr"
import { Link } from "react-router-dom"

export default function Projects() {
  return (
    <section className="mt-20">
      <h3 className="text-3xl text-gray-800 font-bold pl-10">Projets</h3>
      <GrProjects size={40} className="text-purple-700 pt-3 ml-10" />
      <div className="shadow-lg flex gap-8 flex-wrap p-10">

        <Link to="https://aquamarine-cannoli-a3b274.netlify.app/" target="_blank">
          <div className="hover:scale-125 transition duration-500 w-[30em] h-[15em] my-1 text-white rounded-[10px] shadow-md">
            <img className="w-full h-full object-cover rounded-[10px]"  src={amap} alt="Projet d'une Amap collaborative" />
            <div>
              <h3>Amap collaborative</h3>
            </div>
          </div>
        </Link>
        <Link to="https://github.com/Baruff54/Coop" target="_blank">
          <div className="hover:scale-125 transition duration-500 w-[30em] h-[15em]  my-1 text-white rounded-[10px] shadow-md">
            <img className="w-full h-full object-cover rounded-[10px]" src={coop} alt="Projet d'un forum" />
            <div>
              <h3>Coop</h3>
            </div>
          </div>
        </Link>
        
      </div>
    </section>
    
  )
}