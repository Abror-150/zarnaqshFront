import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Truck, Sparkles, Shield } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: DollarSign,
      title: t('services.pricing.title'),
      description: t('services.pricing.description'),
    },
    {
      icon: Truck,
      title: t('services.delivery.title'),
      description: t('services.delivery.description'),
    },
    {
      icon: Sparkles,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
    },
    {
      icon: Shield,
      title: t('services.guarantee.title'),
      description: t('services.guarantee.description'),
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('services.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="animate-scale-in hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto animate-fade-in">
          <Card className="bg-gradient-elegant">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Work with Passion
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every piece of jewelry is created with love and attention to detail. 
                We use only quality materials and guarantee the durability of each product. 
                Our goal is to make each customer happy with a unique piece of handmade art.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
