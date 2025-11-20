import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API } from "@/hooks/getEnv";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // React Query mutation
  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await axios.post(`${API}/contact`, data);
      return res.data;
    },
    onSuccess: () => {
      toast.success(t("contact.form.success"));
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast.error(t("contact.form.error") || "Failed to send message");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.info"),
      value: "+998 91 094 89 89",
    },
    {
      icon: Mail,
      label: "Email",
      value: "gozibekovamamlakat368@gmail.com",
    },
    {
      icon: MapPin,
      label: t("contact.address"),
      value: t("contact.address"),
    },
    {
      icon: Clock,
      label: t("contact.workHours"),
      value: "9:00 - 18:00",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">{t("contact.info")}</h2>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.label}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {t("contact.form.title")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">Button</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
