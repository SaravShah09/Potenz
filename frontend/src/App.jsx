import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProductList from './components/Products/ProductList';
import Navbar from './components/Layout/Navbar';
import ProtectedRoute from './components/Layout/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <ProductList />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/products" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;