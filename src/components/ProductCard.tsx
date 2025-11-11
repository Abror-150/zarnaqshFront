import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Product } from '@/types/product';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'uz' | 'ru' | 'en';

  return (
    <Link to={`/products/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name[lang]}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          {product.featured && (
            <Badge className="absolute top-2 right-2 bg-primary">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name[lang]}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description[lang]}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="text-xl font-bold text-primary">
            {product.price.toLocaleString()} so'm
          </span>
          {!product.inStock && (
            <Badge variant="destructive">Mavjud emas</Badge>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};
