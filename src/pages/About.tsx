import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center animate-scale-in">
            <CardContent className="p-8">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-gradient-gold mb-2">4+</div>
              <p className="text-muted-foreground">
                {t('about.experience')} {t('about.years')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center animate-scale-in delay-200">
            <CardContent className="p-8">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-gradient-gold mb-2">100+</div>
              <p className="text-muted-foreground">{t('about.happy')}</p>
            </CardContent>
          </Card>
          
          <Card className="text-center animate-scale-in delay-400">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-gradient-gold mb-2">100%</div>
              <p className="text-muted-foreground">Quality Guarantee</p>
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Bio */}
          <div className="animate-fade-in">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
                    MX
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      G'ozibekova Mamlakat Xudayberdiyevna
                    </h2>
                    <p className="text-muted-foreground">Individual Entrepreneur</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">{t('about.bio')}</p>
                  <p className="leading-relaxed">{t('about.description')}</p>
                  <p className="leading-relaxed">{t('about.craftsmanship')}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exhibitions */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {t('about.exhibitions')}
            </h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {(t('about.exhibitionsList', { returnObjects: true }) as string[]).map(
                    (exhibition, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{exhibition}</span>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <Card className="bg-gradient-elegant">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Registration Information
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Registration Date: 08.07.2025</p>
                  <p>Registration Number: 7007953</p>
                  <p className="text-sm">{t('contact.address')}</p>
                  <p>{t('contact.workHours')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
