import { useState } from 'react';
import Layout from '../components/ui/Layout';
import ProductCard from '../components/ui/ProductCard';
import ProductModal from '../components/ui/ProductModal';

const products = [
  {
    id: 1,
    name: 'Mini Folding Portable Barbecue – Foldecue',
    description: 'Compact, foldable charcoal grill ideal for travel, picnics, and small gatherings.',
    price: '€44.99',
    image: '/images/foldecue1.jpg',
  },
  {
    id: 2,
    name: 'Coal Barbecue with Wheels – Algon',
    description: 'Mobile charcoal barbecue with a large grilling surface and stylish design.',
    price: '€64.99',
    image: '/images/algon1.jpg',
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </Layout>
  );
}