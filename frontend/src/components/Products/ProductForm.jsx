import { useState } from 'react';

export default function ProductForm({ product, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || '',
    category: product?.category || '',
    stock: product?.stock || 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...form,
      price: parseFloat(form.price),
      stock: parseInt(form.stock)
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">
        {product ? 'Edit Product' : 'Add Product'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            rows={3}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Price</label>
            <input
              type="number"
              required
              step="0.01"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Stock</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">Category</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
        </div>

        <div className="flex gap-4">
          <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            {product ? 'Update' : 'Add'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}