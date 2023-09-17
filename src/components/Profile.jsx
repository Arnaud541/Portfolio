import {BsLinkedin} from "react-icons/bs";
import arnaud from "../assets/arnaud.png"
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section>
        <div className="text-center">
            <h2 className="text-5xl py-2 text-purple-700 font-medium">Arnaud Bourgoin</h2>
            <h3 className="text-2xl py-2">Developpeur Web</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Futur étudiant à Epitech Nancy, je suis passionné par le développement web.
              Parcourez mon portfolio pour retrouver mes compétences, mes expériences et mes projets.  
            </p>
        </div>
        <div className="text-5xl flex justify-center pt-3 text-gray-400">
            <Link to="https://www.linkedin.com/in/arnaud-bourgoin-6116911b8/" target="_blank">
              <BsLinkedin />
            </Link>
            
        </div>
        <div className="max-w-fit mx-auto w-60 h-60 mt-20 rounded">
          <img src={arnaud} alt="Photo de Arnaud Bourgoin" />
        </div>
    </section>
    
  )
}