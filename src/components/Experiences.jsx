import lorraineaucoeur from "../../public/logo-lorraine-au-coeur.jpg"
import dane from "../../public/logo-dane.png"
import orange from "../../public/orange.png"
import {BsCircle} from "react-icons/bs"
import { Link } from "react-router-dom"
import rapportDANE from "../assets/rapport-dane.pdf"
import rapportLorraineaucoeur from "../assets/rapport-lorraineaucoeur.pdf"
import rapportOrange from "../assets/rapport-orange.pdf"
import {MdWorkOutline} from "react-icons/md"

export default function Experiences() {
  return (
    <section className="mt-20">
        <h3 className="text-3xl text-gray-800 font-bold pl-10">Expériences</h3>
        <MdWorkOutline size={40} className="text-purple-700 pt-3 ml-10" />
        <div className="shadow-lg flex gap-8 flex-wrap p-10">
            
            <Link to={rapportLorraineaucoeur} target="_blank" >
                <div className="hover:scale-125 transition duration-500 flex flex-col gap-5 rounded max-w-lg bg-gradient-to-b from-green-400 p-5">
                    <h4 className="text-2xl text-gray-800 font-semibold">Stage</h4>
                    <img width={200} src={lorraineaucoeur} alt="Logo de Lorraineaucoeur" />
                    <ul>
                        <div className="flex">
                            <BsCircle size={25} />
                            <li className="pl-2">
                                Développement d'un algorithme de comparaison
                                de liste de données de restaurants pour obtenir
                                une liste fiable et enrichie
                            </li>
                        </div>
                    </ul>
                </div>
            </Link>
            <Link to={rapportDANE} target="_blank">
                <div className="hover:scale-125 transition duration-500 flex flex-col gap-5 rounded max-w-lg bg-gradient-to-b from-blue-400 p-5">
                    <h4 className="text-2xl text-gray-800 font-semibold">Stage</h4>
                    <img width={180} src={dane} alt="Logo de la DANE" />
                    <ul>
                        <div className="flex">
                            <BsCircle size={18} />
                            <li className="pl-2">
                                Création d'un système de favoris de ressources
                                pédagogiques pour les utilisateurs
                            </li>
                        </div>
                        <div className="flex">
                            <BsCircle size={18} />
                            <li className="pl-2">
                                Création d'un système de tri par date, vues et
                                par matière des ressources
                            </li>
                        </div>
                    </ul>
                </div>
            </Link>
            <Link to={rapportOrange} target="_blank">
                <div className="hover:scale-125 transition duration-500 flex flex-col gap-5 rounded max-w-lg bg-gradient-to-b from-orange-400 p-5">
                    <h4 className="text-2xl text-gray-800 font-semibold">Stage</h4>
                    <img width={100} src={orange} alt="Logo de Orange" />
                    <ul>
                        <div className="flex">
                            <BsCircle size={18} />
                            <li className="pl-2">
                                Optimisation du code existant
                            </li>
                        </div>
                        <div className="flex">
                            <BsCircle size={18} />
                            <li className="pl-2">
                                Passage du code de l'application en mode objet
                            </li>
                        </div>
                    </ul>
                </div>
            </Link>
            
        </div>
    </section>
  )
}