import { Link } from "react-router";
import { TrashIcon, UserIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-xl font-bold text-black">
          <span className="sm:hidden">RM</span>
          <span className="hidden sm:inline">RESUMIND</span>
        </p>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/wipe" className="text-xl cursor-pointer">
          <TrashIcon className="h-6 w-6" />
        </Link>
        <Link to="/auth" className="text-xl cursor-pointer">
          <UserIcon className="h-6 w-6" />
        </Link>
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      </div>
    </nav>
  )
}
export default Navbar