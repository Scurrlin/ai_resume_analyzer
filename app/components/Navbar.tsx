import { Link } from "react-router";
import { TrashIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-xl font-bold text-gradient">RESUMIND</p>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/wipe" className="text-xl cursor-pointer">
          <TrashIcon className="h-5 w-5" />
        </Link>
        <Link to="/auth" className="text-xl cursor-pointer">
          <LockClosedIcon className="h-5 w-5" />
        </Link>
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      </div>
    </nav>
  )
}
export default Navbar