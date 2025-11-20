import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "@/hooks/getEnv";

const Home = () => {
  const { t } = useTranslation();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      const res = await axios.get(`${API}/products?page=1&limit=3`);
      return res.data;
    },
  });

  const featuredProducts = data?.items || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-elegant">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gradient-gold">{t("hero.title")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/products">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90"
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  {t("nav.about")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-down">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("featured.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto" />
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="text-center py-10 text-muted-foreground">
              Loading...
            </div>
          )}

          {isError && (
            <div className="text-center py-10 text-red-500">
              Failed to load products
            </div>
          )}

          {!isLoading && !isError && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="group">
                {t("featured.viewAll")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold">
                4+
              </div>
              <p className="text-muted-foreground">
                {t("about.experience")} {t("about.years")}
              </p>
            </div>
            <div className="space-y-2 animate-fade-in delay-200">
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold">
                100+
              </div>
              <p className="text-muted-foreground">{t("about.clients")}</p>
            </div>
            <div className="space-y-2 animate-fade-in delay-400">
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold">
                8+
              </div>
              <p className="text-muted-foreground">{t("nav.products")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
