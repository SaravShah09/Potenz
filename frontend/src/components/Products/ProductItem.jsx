export default function ProductItem({ product, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      
      {product.description && (
        <p className="text-gray-600 mb-4">{product.description}</p>
      )}
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="font-medium">Price:</span>
          <span className="text-blue-600 font-bold">${product.price}</span>
        </div>
        
        {product.category && (
          <div className="flex justify-between">
            <span className="font-medium">Category:</span>
            <span>{product.category}</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="font-medium">Stock:</span>
          <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
            {product.stock}
          </span>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(product)}
          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product._id)}
          className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}