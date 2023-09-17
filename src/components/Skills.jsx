import php from "../assets/php.png"
import symfony from "../assets/symfony.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import react from "../assets/react.svg"
import vuejs from "../assets/vuejs.png"
import mysql from "../assets/mysql.png"
import sqlserver from "../assets/sqlserver.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import {BsCodeSquare} from "react-icons/bs";



export default function Skills() {
  return (
    <section className="mt-60">
        <div className=" shadow-lg p-10">
            <h3 className="text-3xl text-gray-800 font-bold">Compétences</h3>
            <BsCodeSquare size={40} className="text-purple-700 pt-3" />
            <div className="mt-12">
                <h4 className="text-1xl text-gray-800 font-semibold">Backend</h4>
                <div className="flex items-center flex-wrap gap-10 mt-3">
                    <img className="w-20" src={php} alt="Logo de PHP" />
                    <img className="w-20" src={symfony} alt="Logo de Symfony" />
                </div>
            </div>
            <div className="mt-5">
                <h4 className="text-1xl text-gray-800 font-semibold">Frontend</h4>
                <div className="flex items-center flex-wrap gap-10 mt-3">
                    <img className="w-20" src={html} alt="Logo de HTML" />
                    <img className="w-20" src={css} alt="Logo de CSS" />
                    <img className="w-20" src={javascript} alt="Logo de Javascript" />
                    <img className="w-20" src={react} alt="Logo de ReactJS" />
                    <img className="w-20" src={vuejs} alt="Logo de VueJS" />
                </div>
            </div>
            <div className="mt-5">
                <h4 className="text-1xl text-gray-800 font-semibold">Base de données</h4>
                <div className="flex items-center flex-wrap gap-10 mt-3">
                    <img className="w-20" src={mysql} alt="Logo de MySQL" />
                    <img className="w-20" src={sqlserver} alt="Logo de SQLServer" />
                </div>
            </div>
            <div className="mt-5">
                <h4 className="text-1xl text-gray-800 font-semibold">Gestion de versions</h4>
                <div className="flex items-center flex-wrap gap-10 mt-3">
                    <img className="w-20" src={git} alt="Logo de Git" />
                    <img className="w-20" src={github} alt="Logo de Github" />
                </div>
            </div>
        </div>
    </section>
  )
}