
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
       <h1 className="text-xl font-burtons">ArnaudB</h1>
       <ul className="flex items-center">
        <li>
            <BsFillMoonStarsFill className="cursor-pointer" />
        </li>
       </ul>
    </nav>
  )
}