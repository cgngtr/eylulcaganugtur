import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import {
  Check, X, ArrowRight, Code, Palette, Zap, Shield, Users, Target,
  Database, Server, Monitor, Clock, CreditCard, FileText, Award,
  Star, CheckCircle, Info, DollarSign, Calendar, UserCheck, FileCheck,
  ShieldCheck, Settings, HelpCircle, Globe, Lock, Cpu, Wrench
} from "lucide-react";

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  
  const processSteps = [
    {
      icon: Users,
      key: "consultation",
      desc_key: "consultation_desc"
    },
    {
      icon: Target,
      key: "planning",
      desc_key: "planning_desc"
    },
    {
      icon: Code,
      key: "development",
      desc_key: "development_desc"
    },
    {
      icon: Shield,
      key: "testing",
      desc_key: "testing_desc"
    }
  ];

  
  const handleGetStarted = () => {
    navigate("/client-form");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(280 6% 5%)' }}>
      {/* Floating Pricing CTA Button */}
      <button
        onClick={() => {
          const pricingSection = document.getElementById('pricing-section');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
      >
        <DollarSign className="w-5 h-5" />
        <span className="font-medium hidden sm:inline">View Pricing</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              {t("services.title")}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              {t("services.hero_title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t("services.hero_description")}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {t("services.hero_enhanced.trust_points.experience")}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {t("services.hero_enhanced.trust_points.projects")}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {t("services.hero_enhanced.trust_points.satisfaction")}
              </div>
            </div>
            <p className="text-lg text-primary/80 mb-8 font-medium">
              {t("services.hero_enhanced.subtitle")}
            </p>
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="text-lg px-8 py-3"
            >
              {t("services.cta_button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.pricing.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("services.pricing.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:px-8">
            {/* Basic Package */}
            <Card className="pricing-card pricing-card-basic h-full flex flex-col">
              <CardHeader className="text-center relative flex-shrink-0">
                <CardTitle className="text-2xl mb-2">{t("services.pricing.basic.name")}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {t("services.pricing.basic.subtitle")}
                </CardDescription>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{t("services.pricing.basic.price")}</span>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <p>{t("services.pricing.basic.delivery")}</p>
                  <p>{t("services.pricing.basic.revisions")}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground mb-4">
                  {t("services.pricing.basic.description")}
                </p>
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.functional_website")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.pages")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.design")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.mobile")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.cms")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.content_upload")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.optimization")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.hosting_setup")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.integrations")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.ecommerce")}</span>
                    <X className="w-4 h-4 feature-cross" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.basic.features.payment")}</span>
                    <X className="w-4 h-4 feature-cross" />
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Button
                    onClick={handleGetStarted}
                    className="w-full"
                    variant="outline"
                  >
                    {t("services.pricing.basic.cta")}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="pricing-card pricing-card-standard h-full flex flex-col">
              <CardHeader className="text-center relative flex-shrink-0">
                <CardTitle className="text-2xl mb-2">{t("services.pricing.standard.name")}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {t("services.pricing.standard.subtitle")}
                </CardDescription>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{t("services.pricing.standard.price")}</span>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <p>{t("services.pricing.standard.delivery")}</p>
                  <p>{t("services.pricing.standard.revisions")}</p>
                </div>
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border-none">
                  Most Popular
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground mb-4">
                  {t("services.pricing.standard.description")}
                </p>
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.functional_website")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.pages")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.design")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.mobile")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.cms")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.content_upload")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.optimization")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.hosting_setup")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.integrations")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.ecommerce")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.standard.features.payment")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Button
                    onClick={handleGetStarted}
                    className="w-full"
                    variant="outline"
                  >
                    {t("services.pricing.standard.cta")}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="pricing-card pricing-card-premium h-full flex flex-col">
              <CardHeader className="text-center relative flex-shrink-0">
                <CardTitle className="text-2xl mb-2">{t("services.pricing.premium.name")}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {t("services.pricing.premium.subtitle")}
                </CardDescription>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{t("services.pricing.premium.price")}</span>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground/80 mb-4">
                  <p>{t("services.pricing.premium.delivery")}</p>
                  <p>{t("services.pricing.premium.revisions")}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground/80 mb-4">
                  {t("services.pricing.premium.description")}
                </p>
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.functional_website")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.pages")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.design")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.mobile")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.cms")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.content_upload")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.optimization")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.hosting_setup")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.integrations")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.ecommerce")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{t("services.pricing.premium.features.payment")}</span>
                    <Check className="w-4 h-4 feature-check" />
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Button
                    onClick={handleGetStarted}
                    className="w-full"
                  >
                    {t("services.pricing.premium.cta")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.process.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.process.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`services.process.${step.key}`)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`services.process.${step.desc_key}`)}
                  </p>
                  <div className="w-4 h-0.5 bg-primary ml-auto"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.tech_stack.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.tech_stack.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Frontend */}
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  {t("services.tech_stack.frontend.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">{t("services.tech_stack.frontend.react")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("services.tech_stack.frontend.react_desc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("services.tech_stack.frontend.styling")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("services.tech_stack.frontend.styling_desc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("services.tech_stack.frontend.performance")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("services.tech_stack.frontend.performance_desc")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  {t("services.tech_stack.backend.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">{t("services.tech_stack.backend.supabase")}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("services.tech_stack.backend.supabase_desc")}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {t("services.tech_stack.backend.features")}
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-xs text-muted-foreground font-medium">
                    {t("services.tech_stack.backend.benefits")}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hosting */}
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  {t("services.tech_stack.hosting.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">{t("services.tech_stack.hosting.netlify")}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("services.tech_stack.hosting.netlify_desc")}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {t("services.tech_stack.hosting.features")}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why This Stack */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                {t("services.tech_stack.why_this_stack.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Zap className="w-8 h-8 text-primary" />
                  <h4 className="font-semibold">{t("services.tech_stack.why_this_stack.performance")}</h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Target className="w-8 h-8 text-primary" />
                  <h4 className="font-semibold">{t("services.tech_stack.why_this_stack.scalability")}</h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  <h4 className="font-semibold">{t("services.tech_stack.why_this_stack.security")}</h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Wrench className="w-8 h-8 text-primary" />
                  <h4 className="font-semibold">{t("services.tech_stack.why_this_stack.maintenance")}</h4>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <h4 className="font-semibold">{t("services.tech_stack.why_this_stack.cost")}</h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Terms Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.payment_terms.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.payment_terms.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Down Payment */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">
                      {t("services.payment_terms.down_payment.title")}
                    </CardTitle>
                    <div className="text-2xl font-bold text-primary mt-1">
                      {t("services.payment_terms.down_payment.percentage")}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("services.payment_terms.down_payment.description")}
                </p>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm font-medium text-primary">
                    {t("services.payment_terms.down_payment.purpose")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Schedule */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.payment_terms.payment_schedule.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-semibold text-sm">{t("services.payment_terms.payment_schedule.basic.title")}</h4>
                  <p className="text-xs text-muted-foreground">{t("services.payment_terms.payment_schedule.basic.down_payment")}</p>
                  <p className="text-xs text-muted-foreground">{t("services.payment_terms.payment_schedule.basic.final_payment")}</p>
                  <p className="text-xs text-primary font-medium">{t("services.payment_terms.payment_schedule.basic.timeline")}</p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-semibold text-sm">{t("services.payment_terms.payment_schedule.standard.title")}</h4>
                  <p className="text-xs text-muted-foreground">{t("services.payment_terms.payment_schedule.standard.down_payment")}</p>
                  <p className="text-xs text-muted-foreground">{t("services.payment_terms.payment_schedule.standard.milestone")}</p>
                  <p className="text-xs text-muted-foreground">{t("services.payment_terms.payment_schedule.standard.final_payment")}</p>
                  <p className="text-xs text-primary font-medium">{t("services.payment_terms.payment_schedule.standard.timeline")}</p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-semibold text-sm">{t("services.payment_terms.payment_schedule.premium.title")}</h4>
                  <p className="text-xs text-muted-foreground">{t("services.payment_terms.payment_schedule.premium.down_payment")}</p>
                  <p className="text-xs text-muted-foreground">{t("services.payment_terms.payment_schedule.premium.milestone1")}</p>
                  <p className="text-xs text-muted-foreground">{t("services.payment_terms.payment_schedule.premium.milestone2")}</p>
                  <p className="text-xs text-muted-foreground">{t("services.payment_terms.payment_schedule.premium.final_payment")}</p>
                  <p className="text-xs text-primary font-medium">{t("services.payment_terms.payment_schedule.premium.timeline")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  {t("services.payment_terms.payment_methods.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {t("services.payment_terms.payment_methods.bank_transfer")}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {t("services.payment_terms.payment_methods.credit_card")}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {t("services.payment_terms.payment_methods.crypto")}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {t("services.payment_terms.payment_methods.wise")}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  {t("services.payment_terms.payment_methods.note")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileCheck className="w-5 h-5" />
                  {t("services.payment_terms.contract_terms.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {t("services.payment_terms.contract_terms.scope")}
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {t("services.payment_terms.contract_terms.timeline")}
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {t("services.payment_terms.contract_terms.communication")}
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {t("services.payment_terms.contract_terms.revisions")}
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {t("services.payment_terms.contract_terms.ownership")}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Communication & Updates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed throughout your project with regular updates
            </p>
          </div>

          
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <UserCheck className="w-6 h-6" />
                {t("services.project_timeline.communication.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {t("services.project_timeline.communication.frequency")}
                  </div>
                  <p className="text-sm text-muted-foreground">Frequency</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">Methods</div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {(() => {
                      const methods = t("services.project_timeline.communication.methods", { returnObjects: true });
                      return Array.isArray(methods) ? methods.map((method: string, index: number) => (
                        <li key={index}>{method}</li>
                      )) : <li>Communication methods</li>;
                    })()}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-1">Availability</div>
                  <p className="text-sm text-muted-foreground">
                    {t("services.project_timeline.communication.availability")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Post-Launch Support Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.post_launch.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.post_launch.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Warranty */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.post_launch.warranty.title")}
                  </CardTitle>
                  <Badge variant="outline" className="ml-auto">
                    {t("services.post_launch.warranty.duration")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-green-600">Covered:</h4>
                    <ul className="space-y-1">
                      {(() => {
                        const coverage = t("services.post_launch.warranty.coverage", { returnObjects: true });
                        return Array.isArray(coverage) ? coverage.map((item: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500" />
                            {item}
                          </li>
                        )) : null;
                      })()}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-orange-600">Not Covered:</h4>
                    <ul className="space-y-1">
                      {(() => {
                        const exclusions = t("services.post_launch.warranty.exclusions", { returnObjects: true });
                        return Array.isArray(exclusions) ? exclusions.map((item: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <X className="w-4 h-4 text-orange-500" />
                            {item}
                          </li>
                        )) : null;
                      })()}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Training */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.post_launch.training.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-primary mb-1">
                      {t("services.post_launch.training.session")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {(() => {
                        const topics = t("services.post_launch.training.topics", { returnObjects: true });
                        return Array.isArray(topics) ? topics.map((topic: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500" />
                            {topic}
                          </li>
                        )) : null;
                      })()}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t("services.post_launch.training.materials")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Documentation */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.post_launch.documentation.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {t("services.post_launch.documentation.technical")}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {t("services.post_launch.documentation.user")}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {t("services.post_launch.documentation.access")}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {t("services.post_launch.documentation.source")}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maintenance */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.post_launch.maintenance.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {t("services.post_launch.maintenance.price")}
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {(() => {
                    const services = t("services.post_launch.maintenance.services", { returnObjects: true });
                    return Array.isArray(services) ? services.map((service: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {service}
                      </li>
                    )) : null;
                  })()}
                </ul>
                <div className="bg-primary/10 rounded p-2">
                  <p className="text-xs font-medium text-primary">
                    {t("services.post_launch.maintenance.response")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal & Business Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.legal_info.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.legal_info.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ownership */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.legal_info.ownership.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("services.legal_info.ownership.description")}
                </p>
                <ul className="space-y-2">
                  {(() => {
                    const items = t("services.legal_info.ownership.rights", { returnObjects: true });
                    return Array.isArray(items) ? items.map((right: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        {right}
                      </li>
                    )) : null;
                  })()}
                </ul>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.legal_info.confidentiality.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("services.legal_info.confidentiality.description")}
                </p>
                <ul className="space-y-2">
                  {(() => {
                    const items = t("services.legal_info.confidentiality.protection", { returnObjects: true });
                    return Array.isArray(items) ? items.map((item: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    )) : null;
                  })()}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Security */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.legal_info.security.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {(() => {
                    const items = t("services.legal_info.security.measures", { returnObjects: true });
                    return Array.isArray(items) ? items.map((measure: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        {measure}
                      </li>
                    )) : null;
                  })()}
                </ul>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.legal_info.compliance.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {(() => {
                    const items = t("services.legal_info.compliance.standards", { returnObjects: true });
                    return Array.isArray(items) ? items.map((standard: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        {standard}
                      </li>
                    )) : null;
                  })()}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.whats_included.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.whats_included.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Included Services */}
            <Card className="border-green-500/30 bg-green-50/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <CardTitle className="text-xl text-green-700">
                    {t("services.whats_included.included.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {(() => {
                    const items = t("services.whats_included.included.services", { returnObjects: true });
                    return Array.isArray(items) ? items.map((service: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {service}
                      </li>
                    )) : null;
                  })()}
                </ul>
              </CardContent>
            </Card>

            {/* Additional Costs */}
            <Card className="border-orange-500/30 bg-orange-50/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Info className="w-8 h-8 text-orange-500" />
                  <CardTitle className="text-xl text-orange-700">
                    {t("services.whats_included.additional_costs.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.additional_costs.hosting")}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.additional_costs.domain")}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.additional_costs.content")}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.additional_costs.images")}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.additional_costs.premium")}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.additional_costs.maintenance")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Client Responsibilities */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.whats_included.client_responsibilities.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.client_responsibilities.content")}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.client_responsibilities.feedback")}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.client_responsibilities.hosting")}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.client_responsibilities.testing")}
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                    {t("services.whats_included.client_responsibilities.payment")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card className="border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">
                    {t("services.whats_included.third_party.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t("services.whats_included.third_party.description")}
                </p>
                <ul className="space-y-2">
                  {(() => {
                    const items = t("services.whats_included.third_party.services", { returnObjects: true });
                    return Array.isArray(items) ? items.map((service: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        {service}
                      </li>
                    )) : null;
                  })()}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.faq.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.faq.subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {(() => {
              const questions = t("services.faq.questions", { returnObjects: true });
              return Array.isArray(questions) ? questions.map((qa: { question: string; answer: string }, index: number) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{qa.question}</h3>
                      <p className="text-muted-foreground">{qa.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )) : null;
            })()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services.cta_section.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("services.cta_section.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="text-lg px-8"
            >
              {t("services.cta_section.button")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8"
              onClick={() => navigate("/")}
            >
              {t("services.cta_section.contact_alt")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;