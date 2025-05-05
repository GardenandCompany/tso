export default function ProductModal({ product, onClose }) {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="mb-4 text-gray-600">{product.description}</p>
        <p className="font-bold mb-4">{product.price}</p>
        <button className="bg-green-700 hover:bg-green-600 w-full text-white py-2 mb-2 rounded">Buy with Pay</button>
        <button onClick={onClose} className="w-full border border-gray-300 py-2 rounded">Close</button>
      </div>
    </div>
  );
}