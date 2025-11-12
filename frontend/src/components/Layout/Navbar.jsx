import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Product Manager
        </Link>
        
        {user && (
          <div className="flex items-center gap-4">
            <span>Welcome, {user.name}</span>
            <button
              onClick={logout}
              className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}