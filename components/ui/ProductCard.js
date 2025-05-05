export default function ProductCard({ product, onClick }) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition" onClick={onClick}>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="mt-2 font-bold text-green-700">{product.price}</p>
        <button className="mt-4 w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded">Buy with Pay</button>
      </div>
    </div>
  );
}