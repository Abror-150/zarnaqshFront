import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const lang = i18n.language as 'uz' | 'ru' | 'en';

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/products')}>
            {t('cart.continueShopping')}
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(t('cart.itemAdded'));
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          {t('cart.continueShopping')}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="aspect-square rounded-lg overflow-hidden bg-card">
              <img
                src={product.image}
                alt={product.name[lang]}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name[lang]}</h1>
              {product.featured && (
                <Badge className="bg-primary">Featured</Badge>
              )}
            </div>

            <div className="text-3xl font-bold text-primary">
              {totalPrice.toLocaleString()} {t('product.som')}
            </div>

            <div>
              <h3 className="font-semibold mb-2">{t('product.details')}</h3>
              <p className="text-muted-foreground">{product.description[lang]}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">{t('product.materials')}</h3>
              <p className="text-muted-foreground">{product.materials[lang]}</p>
            </div>

            <div className="space-y-4">
              {/* Quantity Selector */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('product.quantity')}
                </label>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full group"
              >
                <ShoppingCart className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                {product.inStock ? t('product.addToCart') : t('product.outOfStock')}
              </Button>
            </div>

            {/* Stock Status */}
            <div>
              {product.inStock ? (
                <Badge variant="outline" className="border-primary text-primary">
                  {t('product.inStock')}
                </Badge>
              ) : (
                <Badge variant="destructive">{t('product.outOfStock')}</Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
