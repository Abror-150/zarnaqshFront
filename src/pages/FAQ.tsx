import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useTranslation();
  const questions = t('faq.questions', { returnObjects: true }) as Array<{
    q: string;
    a: string;
  }>;

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('faq.title')}</h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
