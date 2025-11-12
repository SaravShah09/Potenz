import { useState, useEffect } from 'react';
import { productsAPI } from '../../services/api';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await productsAPI.getAll();
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (data) => {
    try {
      if (editProduct) {
        const res = await productsAPI.update(editProduct._id, data);
        setProducts(products.map(p => p._id === editProduct._id ? res.data : p));
      } else {
        const res = await productsAPI.create(data);
        setProducts([res.data, ...products]);
      }
      setShowForm(false);
      setEditProduct(null);
    } catch (err) {
      alert('Failed to save product');
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this product?')) return;
    try {
      await productsAPI.delete(id);
      setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      alert('Failed to delete');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Products</h1>
        <button
          onClick={() => { setEditProduct(null); setShowForm(true); }}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>

      {showForm && (
        <ProductForm
          product={editProduct}
          onSubmit={handleSubmit}
          onCancel={() => { setShowForm(false); setEditProduct(null); }}
        />
      )}

      {products.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded">
          <p className="text-gray-600 text-lg">No products yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductItem key={p._id} product={p} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}