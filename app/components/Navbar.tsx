import { Link } from "react-router";
import { TrashIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-xl font-bold text-black">RESUMIND</p>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/wipe" className="text-xl cursor-pointer">
          <TrashIcon className="h-5 w-5" />
        </Link>
        <Link to="/auth" className="text-xl cursor-pointer">
          <UserCircleIcon className="h-5 w-5" />
        </Link>
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      </div>
    </nav>
  )
}
export default Navbar