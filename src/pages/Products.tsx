import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Products = () => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const lang = (i18n.language as 'uz' | 'ru' | 'en') || 'uz';

  const filteredProducts = products.filter((product) => {
    const searchLower = searchQuery.toLowerCase();
    const productName = product.name[lang] || product.name['uz'] || '';
    const productDesc = product.description[lang] || product.description['uz'] || '';
    
    return (
      productName.toLowerCase().includes(searchLower) ||
      productDesc.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.products')}</h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">{t('search.noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
