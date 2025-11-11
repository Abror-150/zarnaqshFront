import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { t, i18n } = useTranslation();
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const lang = i18n.language as 'uz' | 'ru' | 'en';

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 animate-fade-in">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
          <h2 className="text-2xl font-bold">{t('cart.empty')}</h2>
          <Link to="/products">
            <Button size="lg">{t('cart.continueShopping')}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('cart.title')}</h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name[lang]}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {item.name[lang]}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.materials[lang]}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="font-bold text-primary text-lg">
                            {(item.price * item.quantity).toLocaleString()} {t('product.som')}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            {t('cart.remove')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-20 animate-fade-in">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-bold">{t('cart.total')}</h2>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg mb-4">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-semibold">
                      {getTotalPrice().toLocaleString()} {t('product.som')}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-2xl font-bold text-primary">
                    <span>{t('cart.total')}:</span>
                    <span>{getTotalPrice().toLocaleString()} {t('product.som')}</span>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  {t('cart.checkout')}
                </Button>
                
                <Link to="/products">
                  <Button variant="outline" className="w-full">
                    {t('cart.continueShopping')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
