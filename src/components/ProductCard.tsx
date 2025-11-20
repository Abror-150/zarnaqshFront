import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Product } from "@/types/product";
import { Card, CardContent, CardFooter } from "./ui/card";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { i18n } = useTranslation();
  const lang: "uz" | "ru" | "en" = (i18n.language as any) || "uz";

  // Backenddan kelgan maydonlar bilan ishlash
  const name =
    (lang === "uz"
      ? product.name_uz
      : lang === "ru"
      ? product.name_ru
      : product.name_en) || "No name";

  const desc =
    (lang === "uz"
      ? product.description_uz
      : lang === "ru"
      ? product.description_ru
      : product.description_en) || "";

  return (
    <Link to={`/products/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{desc}</p>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="text-xl font-bold text-primary">
            {Number(product.price).toLocaleString()} so'm
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};
