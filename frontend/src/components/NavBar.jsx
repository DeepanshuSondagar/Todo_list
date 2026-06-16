import { LogOut, CheckSquare, LogIn } from "lucide-react";
import { useUserStore } from "../libs/axios.js";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={user ? "/todos" : "/"} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <CheckSquare className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold text-white">TodoApp</span>
          </Link>
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">
                Welcome, {user.name || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;