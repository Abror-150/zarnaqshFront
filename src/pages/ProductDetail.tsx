import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react";
import { API } from "@/hooks/getEnv";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const lang = (i18n.language as "uz" | "ru" | "en") || "uz";

  const queryClient = useQueryClient();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(`${API}/products/${id}`);
      const p = res.data;
      return {
        ...p,
        materials: p.materials || { uz: "", ru: "", en: "" },
        name: { uz: p.name_uz, ru: p.name_ru, en: p.name_en },
        description: {
          uz: p.description_uz,
          ru: p.description_ru,
          en: p.description_en,
        },
      };
    },
    enabled: !!id,
  });
  const mutation = useMutation<Product, any, number>({
    mutationFn: async (qty: number) => {
      const res = await axios.post(`${API}/order`, {
        productId: id,
        quantity: qty,
      });
      return res.data;
    },
    onSuccess: (_, qty) => {
      addToCart(product!, qty);
      queryClient.setQueryData<Product>(["product", id], (old) =>
        old
          ? { ...old, amount: old.amount - qty, inStock: old.amount - qty > 0 }
          : old
      );
      toast.success(t("cart.itemAdded"));
    },
  });

  if (isLoading) return <p className="text-center py-20">Loading...</p>;
  if (isError || !product)
    return (
      <div className="text-center py-20">
        <p>{t("product.notFound")}</p>
        <Button onClick={() => navigate("/products")}>
          {t("cart.continueShopping")}
        </Button>
      </div>
    );

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("cart.continueShopping")}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden bg-card">
              <img
                src={product.image}
                alt={product.name[lang]}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name[lang]}</h1>
            {product.featured && <Badge className="bg-primary">Featured</Badge>}

            <div className="text-3xl font-bold text-primary">
              {totalPrice.toLocaleString()} {t("product.som")}
            </div>

            <p>{product.description[lang]}</p>
            <p>
              {t("product.materials")}: {product.materials[lang]}
            </p>

            {/* Quantity selector */}
            <div className="flex items-center space-x-4 mt-4">
              <Button
                size="icon"
                variant="outline"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span>{quantity}</span>
              <Button
                size="icon"
                variant="outline"
                onClick={() =>
                  setQuantity(Math.min(product.amount, quantity + 1))
                }
                disabled={quantity >= product.amount}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button
              size="lg"
              onClick={() => {
                addToCart(product!, quantity);
                toast.success(t("cart.itemAdded"));
                navigate("/cart"); // optional, darhol savatchaga o‘tganda
              }}
              disabled={quantity > product.amount}
              className="w-full mt-4"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {quantity > product.amount
                ? t("product.outOfStock")
                : t("product.addToCart")}
            </Button>

            <p>
              {t("product.inStock")}: {product.amount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
