import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "@/hooks/getEnv"; // API url joylashgan fayl

interface Product {
  id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  price: number;
  image: string;
  inStock: boolean;
  featured?: boolean;
  amount: number;
  materials?: {
    uz: string;
    ru: string;
    en: string;
  };
}

const Products = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as "uz" | "ru" | "en") || "uz";
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", searchQuery],
    queryFn: async () => {
      const res = await axios.get(`${API}/products?page=1&limit=100`, {
        params: { search: searchQuery },
      });
      return res.data.items as Product[];
    },
  });

  const products = data || [];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("nav.products")}
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t("search.placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-10 text-muted-foreground">
            Loading...
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="text-center py-10 text-red-500">
            Failed to load products
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && !isError && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  name: {
                    uz: product.name_uz,
                    ru: product.name_ru,
                    en: product.name_en,
                  },
                  description: {
                    uz: product.description_uz,
                    ru: product.description_ru,
                    en: product.description_en,
                  },
                }}
              />
            ))}
          </div>
        ) : (
          !isLoading &&
          !isError && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                {t("search.noResults")}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
