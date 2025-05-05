export default function Layout({ children }) {
  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-green-800">Garden&Company</h1>
        <p className="text-gray-600 text-lg">Premium tools and decor for modern outdoor living – made effortless.</p>
      </header>
      {children}
    </div>
  );
}