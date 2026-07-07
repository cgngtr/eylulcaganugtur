import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { TerminalNav } from "@/components/terminal";
import { useThemeInit } from "@/lib/useTheme";
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  Package,
  Palette,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const CONTACT_EMAIL = "cgngtr5026@gmail.com";

const brandSchema = z.object({
  brandName: z.string().min(1, "Brand name is required"),
  products: z.array(z.string()).min(1, "At least one product must be selected"),
  otherProducts: z.string().optional(),
  productPhotosAvailable: z.enum(["available", "needed"]),
  productDetails: z.string().min(10, "Product details must be at least 10 characters"),
});

const designSchema = z.object({
  colorTheme: z.string().optional(),
  fonts: z.string().optional(),
  brandIdentityAvailable: z.enum(["available", "needed"]),
  referenceSites: z.string().optional(),
});

const paymentSchema = z.object({
  paymentMethods: z.array(z.string()).min(1, "At least one payment method must be selected"),
  shippingCompany: z.string().optional(),
  shippingCost: z.enum(["customer", "merchant"]),
  returnPolicy: z.string().min(10, "Return policy must be at least 10 characters"),
});

const technicalSchema = z.object({
  techStack: z.string(),
  maintenance: z.enum(["yes", "no"]),
  hostingAgree: z.boolean().refine((val) => val === true, "You must agree to hosting terms"),
});

const formSchema = z.object({
  brand: brandSchema,
  design: designSchema,
  payment: paymentSchema,
  technical: technicalSchema,
});

type FormData = z.infer<typeof formSchema>;
type Step = "brand" | "design" | "payment" | "technical" | "review";

const STEPS: Step[] = ["brand", "design", "payment", "technical", "review"];
const PRODUCT_OPTIONS = ["olive_oil", "other_products"] as const;
const PAYMENT_METHOD_OPTIONS = ["credit_card", "bank_transfer", "cash_on_delivery", "paytr", "iyzico"] as const;

const stepIcons: Record<Step, LucideIcon> = {
  brand: Package,
  design: Palette,
  payment: CreditCard,
  technical: Server,
  review: ClipboardCheck,
};

const stepValidationTargets: Partial<Record<Step, keyof FormData>> = {
  brand: "brand",
  design: "design",
  payment: "payment",
  technical: "technical",
};

const ClientForm = () => {
  useThemeInit();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>("brand");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brand: {
        brandName: "",
        products: [],
        otherProducts: "",
        productPhotosAvailable: "available",
        productDetails: "",
      },
      design: {
        colorTheme: "",
        fonts: "",
        brandIdentityAvailable: "available",
        referenceSites: "",
      },
      payment: {
        paymentMethods: [],
        shippingCompany: "",
        shippingCost: "customer",
        returnPolicy: "",
      },
      technical: {
        techStack: "react-supabase",
        maintenance: "no",
        hostingAgree: false,
      },
    },
  });

  const {
    watch,
    setValue,
    handleSubmit,
    trigger,
    formState: { errors },
  } = form;
  const watchedValues = watch();

  const currentStepIndex = STEPS.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / STEPS.length) * 100;
  const CurrentStepIcon = stepIcons[currentStep];
  const emptyValue = t("client_form.review.not_provided");

  const formatProductList = (products: string[]) => {
    const labels = products.map((product) => t(`client_form.brand.${product}`));

    return labels.length > 0 ? labels.join(", ") : emptyValue;
  };

  const formatPaymentMethods = (methods: string[]) => {
    const labels = methods.map((method) => t(`client_form.payment.${method}`));

    return labels.length > 0 ? labels.join(", ") : emptyValue;
  };

  const nextStep = async () => {
    const validationTarget = stepValidationTargets[currentStep];
    const isStepValid = validationTarget ? await trigger(validationTarget) : true;

    if (!isStepValid) {
      return;
    }

    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStep(STEPS[currentStepIndex + 1]);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(STEPS[currentStepIndex - 1]);
    }
  };

  const formatSubmission = (data: FormData) => {
    const lines = [
      `${t("client_form.brand.brand_name")}: ${data.brand.brandName}`,
      `${t("client_form.brand.products")}: ${formatProductList(data.brand.products)}`,
      `${t("client_form.brand.other_products_specify")}: ${data.brand.otherProducts || emptyValue}`,
      `${t("client_form.brand.product_photos")}: ${t(`client_form.brand.product_photos_${data.brand.productPhotosAvailable}`)}`,
      `${t("client_form.brand.product_details")}: ${data.brand.productDetails}`,
      "",
      `${t("client_form.design.color_theme")}: ${data.design.colorTheme || emptyValue}`,
      `${t("client_form.design.fonts")}: ${data.design.fonts || emptyValue}`,
      `${t("client_form.design.brand_identity")}: ${t(`client_form.design.brand_identity_${data.design.brandIdentityAvailable}`)}`,
      `${t("client_form.design.reference_sites")}: ${data.design.referenceSites || emptyValue}`,
      "",
      `${t("client_form.payment.payment_methods")}: ${formatPaymentMethods(data.payment.paymentMethods)}`,
      `${t("client_form.payment.shipping_company")}: ${data.payment.shippingCompany || emptyValue}`,
      `${t("client_form.payment.shipping_cost")}: ${t(`client_form.payment.shipping_cost_${data.payment.shippingCost}`)}`,
      `${t("client_form.payment.return_policy")}: ${data.payment.returnPolicy}`,
      "",
      `${t("client_form.technical.tech_stack")}: ${t("client_form.technical.react_supabase")}`,
      `${t("client_form.technical.maintenance")}: ${t(`client_form.technical.maintenance_${data.technical.maintenance}`)}`,
      `${t("client_form.technical.hosting")}: ${data.technical.hostingAgree ? t("client_form.technical.hosting_agree") : emptyValue}`,
    ];

    return lines.join("\n");
  };

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`${t("client_form.title")} - ${data.brand.brandName}`);
      const body = encodeURIComponent(formatSubmission(data));

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setSubmitted(true);
      toast.success(t("client_form.review.success_title"), {
        description: t("client_form.review.success_message"),
      });
    } catch (error) {
      toast.error(t("client_form.review.error_title"), {
        description: t("client_form.review.error_message"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FieldError = ({ id, message }: { id: string; message?: string }) => {
    if (!message) {
      return null;
    }

    return (
      <p id={id} className="text-sm text-destructive" role="alert">
        {message}
      </p>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "brand":
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="brandName">{t("client_form.brand.brand_name")}</Label>
              <Input
                id="brandName"
                {...form.register("brand.brandName")}
                placeholder={t("client_form.brand.brand_name_placeholder")}
                className="border-border/70 bg-background/80 focus-visible:ring-primary/40"
                aria-invalid={Boolean(errors.brand?.brandName)}
                aria-describedby={errors.brand?.brandName ? "brandName-error" : undefined}
              />
              <FieldError id="brandName-error" message={errors.brand?.brandName?.message} />
            </div>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium leading-none text-foreground">
                {t("client_form.brand.products")}
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {PRODUCT_OPTIONS.map((product) => (
                  <label
                    key={product}
                    htmlFor={product}
                    className="site-link-tile cursor-pointer items-start"
                  >
                    <Checkbox
                      id={product}
                      checked={watchedValues.brand.products.includes(product)}
                      onCheckedChange={(checked) => {
                        const currentProducts = watchedValues.brand.products;
                        setValue(
                          "brand.products",
                          checked === true
                            ? [...currentProducts, product]
                            : currentProducts.filter((item) => item !== product),
                          { shouldValidate: true },
                        );
                      }}
                    />
                    <span className="text-sm leading-5 text-foreground">{t(`client_form.brand.${product}`)}</span>
                  </label>
                ))}
              </div>
              <FieldError id="brand-products-error" message={errors.brand?.products?.message} />
            </fieldset>

            {watchedValues.brand.products.includes("other_products") && (
              <div className="space-y-2">
                <Label htmlFor="otherProducts">{t("client_form.brand.other_products_specify")}</Label>
                <Input
                  id="otherProducts"
                  {...form.register("brand.otherProducts")}
                  placeholder={t("client_form.brand.other_products_specify")}
                  className="border-border/70 bg-background/80 focus-visible:ring-primary/40"
                />
              </div>
            )}

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium leading-none text-foreground">
                {t("client_form.brand.product_photos")}
              </legend>
              <RadioGroup
                value={watchedValues.brand.productPhotosAvailable}
                onValueChange={(value) => setValue("brand.productPhotosAvailable", value as "available" | "needed")}
                className="grid gap-3 sm:grid-cols-2"
              >
                {["available", "needed"].map((value) => (
                  <label
                    key={value}
                    htmlFor={`product-photos-${value}`}
                    className="site-link-tile cursor-pointer items-center"
                  >
                    <RadioGroupItem value={value} id={`product-photos-${value}`} />
                    <span className="text-sm">{t(`client_form.brand.product_photos_${value}`)}</span>
                  </label>
                ))}
              </RadioGroup>
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="productDetails">{t("client_form.brand.product_details")}</Label>
              <Textarea
                id="productDetails"
                {...form.register("brand.productDetails")}
                placeholder={t("client_form.brand.product_details_placeholder")}
                rows={5}
                className="border-border/70 bg-background/80 focus-visible:ring-primary/40"
                aria-invalid={Boolean(errors.brand?.productDetails)}
                aria-describedby={errors.brand?.productDetails ? "productDetails-error" : undefined}
              />
              <FieldError id="productDetails-error" message={errors.brand?.productDetails?.message} />
            </div>
          </div>
        );
      case "design":
        return (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="colorTheme">{t("client_form.design.color_theme")}</Label>
                <Input
                  id="colorTheme"
                  {...form.register("design.colorTheme")}
                  placeholder={t("client_form.design.color_theme_placeholder")}
                  className="border-border/70 bg-background/80 focus-visible:ring-primary/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fonts">{t("client_form.design.fonts")}</Label>
                <Input
                  id="fonts"
                  {...form.register("design.fonts")}
                  placeholder={t("client_form.design.fonts_placeholder")}
                  className="border-border/70 bg-background/80 focus-visible:ring-primary/40"
                />
              </div>
            </div>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium leading-none text-foreground">
                {t("client_form.design.brand_identity")}
              </legend>
              <RadioGroup
                value={watchedValues.design.brandIdentityAvailable}
                onValueChange={(value) => setValue("design.brandIdentityAvailable", value as "available" | "needed")}
                className="grid gap-3 sm:grid-cols-2"
              >
                {["available", "needed"].map((value) => (
                  <label
                    key={value}
                    htmlFor={`brand-identity-${value}`}
                    className="site-link-tile cursor-pointer items-center"
                  >
                    <RadioGroupItem value={value} id={`brand-identity-${value}`} />
                    <span className="text-sm">{t(`client_form.design.brand_identity_${value}`)}</span>
                  </label>
                ))}
              </RadioGroup>
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="referenceSites">{t("client_form.design.reference_sites")}</Label>
              <Textarea
                id="referenceSites"
                {...form.register("design.referenceSites")}
                placeholder={t("client_form.design.reference_sites_placeholder")}
                rows={4}
                className="border-border/70 bg-background/80 focus-visible:ring-primary/40"
              />
            </div>
          </div>
        );
      case "payment":
        return (
          <div className="space-y-6">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium leading-none text-foreground">
                {t("client_form.payment.payment_methods")}
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {PAYMENT_METHOD_OPTIONS.map((method) => (
                  <label
                    key={method}
                    htmlFor={method}
                    className="site-link-tile cursor-pointer items-start"
                  >
                    <Checkbox
                      id={method}
                      checked={watchedValues.payment.paymentMethods.includes(method)}
                      onCheckedChange={(checked) => {
                        const currentMethods = watchedValues.payment.paymentMethods;
                        setValue(
                          "payment.paymentMethods",
                          checked === true
                            ? [...currentMethods, method]
                            : currentMethods.filter((item) => item !== method),
                          { shouldValidate: true },
                        );
                      }}
                    />
                    <span className="text-sm leading-5 text-foreground">{t(`client_form.payment.${method}`)}</span>
                  </label>
                ))}
              </div>
              <FieldError id="payment-methods-error" message={errors.payment?.paymentMethods?.message} />
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="shippingCompany">{t("client_form.payment.shipping_company")}</Label>
              <Input
                id="shippingCompany"
                {...form.register("payment.shippingCompany")}
                placeholder={t("client_form.payment.shipping_company_placeholder")}
                className="border-border/70 bg-background/80 focus-visible:ring-primary/40"
              />
            </div>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium leading-none text-foreground">
                {t("client_form.payment.shipping_cost")}
              </legend>
              <RadioGroup
                value={watchedValues.payment.shippingCost}
                onValueChange={(value) => setValue("payment.shippingCost", value as "customer" | "merchant")}
                className="grid gap-3 sm:grid-cols-2"
              >
                {["customer", "merchant"].map((value) => (
                  <label
                    key={value}
                    htmlFor={`shipping-cost-${value}`}
                    className="site-link-tile cursor-pointer items-center"
                  >
                    <RadioGroupItem value={value} id={`shipping-cost-${value}`} />
                    <span className="text-sm">{t(`client_form.payment.shipping_cost_${value}`)}</span>
                  </label>
                ))}
              </RadioGroup>
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="returnPolicy">{t("client_form.payment.return_policy")}</Label>
              <Textarea
                id="returnPolicy"
                {...form.register("payment.returnPolicy")}
                placeholder={t("client_form.payment.return_policy_placeholder")}
                rows={4}
                className="border-border/70 bg-background/80 focus-visible:ring-primary/40"
                aria-invalid={Boolean(errors.payment?.returnPolicy)}
                aria-describedby={errors.payment?.returnPolicy ? "returnPolicy-error" : undefined}
              />
              <FieldError id="returnPolicy-error" message={errors.payment?.returnPolicy?.message} />
            </div>
          </div>
        );
      case "technical":
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
              <Label className="text-primary">{t("client_form.technical.tech_stack")}</Label>
              <p className="mt-2 text-sm text-foreground">{t("client_form.technical.react_supabase")}</p>
            </div>

            <fieldset className="space-y-3 rounded-xl border border-border/70 bg-background/60 p-4">
              <legend className="px-1 text-sm font-medium text-foreground">
                {t("client_form.technical.maintenance_title")}
              </legend>
              <p className="mt-2 text-sm font-medium text-primary">{t("client_form.technical.maintenance_price")}</p>
              <p className="text-sm text-muted-foreground">{t("client_form.technical.maintenance_includes")}</p>
              <RadioGroup
                value={watchedValues.technical.maintenance}
                onValueChange={(value) => setValue("technical.maintenance", value as "yes" | "no")}
                className="grid gap-3 sm:grid-cols-2"
              >
                {["yes", "no"].map((value) => (
                  <label
                    key={value}
                    htmlFor={`maintenance-${value}`}
                    className="site-link-tile cursor-pointer items-center"
                  >
                    <RadioGroupItem value={value} id={`maintenance-${value}`} />
                    <span className="text-sm">{t(`client_form.technical.maintenance_${value}`)}</span>
                  </label>
                ))}
              </RadioGroup>
            </fieldset>

            <div className="space-y-4 rounded-xl border border-border/70 bg-background/60 p-4">
              <div>
                <Label>{t("client_form.technical.hosting_title")}</Label>
                <p className="mt-2 text-sm text-muted-foreground">{t("client_form.technical.hosting_description")}</p>
              </div>
              <label htmlFor="hosting-agree" className="site-link-tile cursor-pointer items-start">
                <Checkbox
                  id="hosting-agree"
                  checked={watchedValues.technical.hostingAgree}
                  onCheckedChange={(checked) => setValue("technical.hostingAgree", checked === true, { shouldValidate: true })}
                  aria-describedby={errors.technical?.hostingAgree ? "hosting-agree-error" : undefined}
                />
                <span className="text-sm leading-5">{t("client_form.technical.hosting_agree")}</span>
              </label>
              <FieldError id="hosting-agree-error" message={errors.technical?.hostingAgree?.message} />
            </div>
          </div>
        );
      case "review":
        return (
          <div className="space-y-6">
            <div>
              <CardDescription>{t("client_form.review.subtitle")}</CardDescription>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                <h3 className="font-semibold text-primary">{t("client_form.steps.brand")}</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">{t("client_form.brand.brand_name")}:</strong> {watchedValues.brand.brandName || emptyValue}</p>
                  <p><strong className="text-foreground">{t("client_form.brand.products")}:</strong> {formatProductList(watchedValues.brand.products)}</p>
                  <p><strong className="text-foreground">{t("client_form.brand.product_photos")}:</strong> {t(`client_form.brand.product_photos_${watchedValues.brand.productPhotosAvailable}`)}</p>
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                <h3 className="font-semibold text-primary">{t("client_form.steps.design")}</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">{t("client_form.design.color_theme")}:</strong> {watchedValues.design.colorTheme || emptyValue}</p>
                  <p><strong className="text-foreground">{t("client_form.design.brand_identity")}:</strong> {t(`client_form.design.brand_identity_${watchedValues.design.brandIdentityAvailable}`)}</p>
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                <h3 className="font-semibold text-primary">{t("client_form.steps.payment")}</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">{t("client_form.payment.payment_methods")}:</strong> {formatPaymentMethods(watchedValues.payment.paymentMethods)}</p>
                  <p><strong className="text-foreground">{t("client_form.payment.shipping_cost")}:</strong> {t(`client_form.payment.shipping_cost_${watchedValues.payment.shippingCost}`)}</p>
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                <h3 className="font-semibold text-primary">{t("client_form.steps.technical")}</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">{t("client_form.technical.maintenance")}:</strong> {t(`client_form.technical.maintenance_${watchedValues.technical.maintenance}`)}</p>
                  <p><strong className="text-foreground">{t("client_form.technical.hosting")}:</strong> {watchedValues.technical.hostingAgree ? t("client_form.technical.hosting_agree") : emptyValue}</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen text-terminal-output font-mono">
        <TerminalNav />
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl items-center justify-center px-4 py-10">
          <Card className="site-card w-full border-terminal-border/70 bg-terminal-bg-medium/90">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-terminal-prompt/10 text-terminal-prompt">
                <Check className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl text-terminal-command">{t("client_form.review.success_title")}</CardTitle>
              <CardDescription className="text-terminal-output/70">{t("client_form.review.success_message")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="site-button is-primary w-full" onClick={() => navigate("/")}>
                {t("client_form.review.success_back")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-terminal-output font-mono">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.12),transparent_30%)]" />
      <TerminalNav />

      <div className="site-main relative mx-auto px-4 py-8 sm:px-6 lg:py-12">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="site-button mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("client_form.back_to_services")}
        </Button>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-4 lg:sticky lg:top-8 lg:self-start">
            <Card className="site-card overflow-hidden border-terminal-border/70 bg-terminal-bg-medium/90">
              <CardHeader className="space-y-4">
                <Badge variant="secondary" className="site-chip w-fit gap-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t("client_form.kicker")}
                </Badge>
                <div>
                  <h1 className="text-3xl font-semibold leading-tight tracking-tight text-terminal-command">{t("client_form.title")}</h1>
                  <CardDescription className="mt-3 text-base text-terminal-output/70">{t("client_form.subtitle")}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-terminal-muted">
                    <span>{t("client_form.progress_label")}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="bg-terminal-bg-dark" />
                </div>

                <div className="space-y-2">
                  {STEPS.map((step, index) => {
                    const StepIcon = stepIcons[step];
                    const isActive = step === currentStep;
                    const isComplete = index < currentStepIndex;
                    const isReachable = index <= currentStepIndex;

                    return (
                      <button
                        key={step}
                        type="button"
                        onClick={() => {
                          if (isReachable) {
                            setCurrentStep(step);
                          }
                        }}
                        disabled={!isReachable}
                        className={`site-link-tile w-full text-left disabled:cursor-not-allowed disabled:opacity-50 ${
                          isActive
                            ? "border-primary/40 bg-primary/10 text-terminal-prompt"
                            : "text-terminal-muted"
                        }`}
                      >
                        <span className="site-link-icon">
                          {isComplete ? <Check className="h-4 w-4" /> : <StepIcon className="h-4 w-4" />}
                        </span>
                        <span className="text-sm font-medium">{t(`client_form.steps.${step}`)}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="site-card border-terminal-border/70 bg-terminal-bg-medium/80">
              <CardContent className="space-y-4 p-4 text-sm text-terminal-muted">
                <div>
                  <p className="font-medium text-terminal-output">{t("client_form.scope_note_title")}</p>
                  <p>{t("client_form.scope_note")}</p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-terminal-output">{t("client_form.privacy_note_title")}</p>
                  <p>{t("client_form.privacy_note")}</p>
                </div>
              </CardContent>
            </Card>
          </aside>

          <main>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <Card className="site-card border-terminal-border/70 bg-terminal-bg-medium/90">
                <CardHeader className="border-b border-terminal-border">
                  <div className="flex items-start gap-4">
                    <div className="site-record-icon">
                      <CurrentStepIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-terminal-muted">
                        {t("client_form.current_step", { current: currentStepIndex + 1, total: STEPS.length })}
                      </p>
                      <CardTitle className="mt-1 text-2xl text-terminal-command">{t(`client_form.steps.${currentStep}`)}</CardTitle>
                      <CardDescription className="mt-2 text-terminal-output/70">{t("client_form.step_helper")}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-5 sm:p-6">{renderStepContent()}</CardContent>
              </Card>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStepIndex === 0}
                  className="site-button"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {t("client_form.brand.previous")}
                </Button>

                {currentStep === "review" ? (
                  <Button type="submit" disabled={isSubmitting} className="site-button is-primary">
                    {isSubmitting ? t("client_form.review.submitting") : t("client_form.review.submit")}
                  </Button>
                ) : (
                  <Button type="button" onClick={nextStep} className="site-button is-primary">
                    {currentStep === "brand" && t("client_form.brand.next")}
                    {currentStep === "design" && t("client_form.design.next")}
                    {currentStep === "payment" && t("client_form.payment.next")}
                    {currentStep === "technical" && t("client_form.technical.next")}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
