import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
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
import { ChevronLeft, ChevronRight, Check, ArrowLeft } from "lucide-react";

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
  hostingAgree: z.boolean().refine(val => val === true, "You must agree to hosting terms"),
});

const formSchema = z.object({
  brand: brandSchema,
  design: designSchema,
  payment: paymentSchema,
  technical: technicalSchema,
});

type FormData = z.infer<typeof formSchema>;
type Step = "brand" | "design" | "payment" | "technical" | "review";

const ClientForm = () => {
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

  const { watch, setValue, handleSubmit, formState: { errors } } = form;
  const watchedValues = watch();

  const steps: Step[] = ["brand", "design", "payment", "technical", "review"];
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1]);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(steps[currentStepIndex - 1]);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

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

  const BrandStep = () => (
    <Card>
      <CardHeader>
        <CardTitle>{t("client_form.brand.title")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="brandName">{t("client_form.brand.brand_name")}</Label>
          <Input
            id="brandName"
            {...form.register("brand.brandName")}
            placeholder={t("client_form.brand.brand_name_placeholder")}
          />
          {errors.brand?.brandName && (
            <p className="text-sm text-red-500">{errors.brand.brandName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>{t("client_form.brand.products")}</Label>
          <div className="space-y-2">
            {["olive_oil", "other_products"].map((product) => (
              <div key={product} className="flex items-center space-x-2">
                <Checkbox
                  id={product}
                  checked={watchedValues.brand.products.includes(product)}
                  onCheckedChange={(checked) => {
                    const currentProducts = watchedValues.brand.products;
                    if (checked) {
                      setValue("brand.products", [...currentProducts, product]);
                    } else {
                      setValue("brand.products", currentProducts.filter(p => p !== product));
                    }
                  }}
                />
                <Label htmlFor={product}>{t(`client_form.brand.${product}`)}</Label>
              </div>
            ))}
          </div>
          {errors.brand?.products && (
            <p className="text-sm text-red-500">{errors.brand.products.message}</p>
          )}
        </div>

        {watchedValues.brand.products.includes("other_products") && (
          <div className="space-y-2">
            <Label htmlFor="otherProducts">{t("client_form.brand.other_products_specify")}</Label>
            <Input
              id="otherProducts"
              {...form.register("brand.otherProducts")}
              placeholder={t("client_form.brand.other_products_specify")}
            />
          </div>
        )}

        <div className="space-y-2">
          <Label>{t("client_form.brand.product_photos")}</Label>
          <RadioGroup
            value={watchedValues.brand.productPhotosAvailable}
            onValueChange={(value) => setValue("brand.productPhotosAvailable", value as "available" | "needed")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="available" id="available" />
              <Label htmlFor="available">{t("client_form.brand.product_photos_available")}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="needed" id="needed" />
              <Label htmlFor="needed">{t("client_form.brand.product_photos_needed")}</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="productDetails">{t("client_form.brand.product_details")}</Label>
          <Textarea
            id="productDetails"
            {...form.register("brand.productDetails")}
            placeholder={t("client_form.brand.product_details_placeholder")}
            rows={4}
          />
          {errors.brand?.productDetails && (
            <p className="text-sm text-red-500">{errors.brand.productDetails.message}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const DesignStep = () => (
    <Card>
      <CardHeader>
        <CardTitle>{t("client_form.design.title")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="colorTheme">{t("client_form.design.color_theme")}</Label>
          <Input
            id="colorTheme"
            {...form.register("design.colorTheme")}
            placeholder={t("client_form.design.color_theme_placeholder")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fonts">{t("client_form.design.fonts")}</Label>
          <Input
            id="fonts"
            {...form.register("design.fonts")}
            placeholder={t("client_form.design.fonts_placeholder")}
          />
        </div>

        <div className="space-y-2">
          <Label>{t("client_form.design.brand_identity")}</Label>
          <RadioGroup
            value={watchedValues.design.brandIdentityAvailable}
            onValueChange={(value) => setValue("design.brandIdentityAvailable", value as "available" | "needed")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="available" id="brand-available" />
              <Label htmlFor="brand-available">{t("client_form.design.brand_identity_available")}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="needed" id="brand-needed" />
              <Label htmlFor="brand-needed">{t("client_form.design.brand_identity_needed")}</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="referenceSites">{t("client_form.design.reference_sites")}</Label>
          <Textarea
            id="referenceSites"
            {...form.register("design.referenceSites")}
            placeholder={t("client_form.design.reference_sites_placeholder")}
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );

  const PaymentStep = () => (
    <Card>
      <CardHeader>
        <CardTitle>{t("client_form.payment.title")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>{t("client_form.payment.payment_methods")}</Label>
          <div className="space-y-2">
            {["credit_card", "bank_transfer", "cash_on_delivery", "paytr", "iyzico"].map((method) => (
              <div key={method} className="flex items-center space-x-2">
                <Checkbox
                  id={method}
                  checked={watchedValues.payment.paymentMethods.includes(method)}
                  onCheckedChange={(checked) => {
                    const currentMethods = watchedValues.payment.paymentMethods;
                    if (checked) {
                      setValue("payment.paymentMethods", [...currentMethods, method]);
                    } else {
                      setValue("payment.paymentMethods", currentMethods.filter(m => m !== method));
                    }
                  }}
                />
                <Label htmlFor={method}>{t(`client_form.payment.${method}`)}</Label>
              </div>
            ))}
          </div>
          {errors.payment?.paymentMethods && (
            <p className="text-sm text-red-500">{errors.payment.paymentMethods.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="shippingCompany">{t("client_form.payment.shipping_company")}</Label>
          <Input
            id="shippingCompany"
            {...form.register("payment.shippingCompany")}
            placeholder={t("client_form.payment.shipping_company_placeholder")}
          />
        </div>

        <div className="space-y-2">
          <Label>{t("client_form.payment.shipping_cost")}</Label>
          <RadioGroup
            value={watchedValues.payment.shippingCost}
            onValueChange={(value) => setValue("payment.shippingCost", value as "customer" | "merchant")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="customer" id="customer-pays" />
              <Label htmlFor="customer-pays">{t("client_form.payment.shipping_cost_customer")}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="merchant" id="merchant-pays" />
              <Label htmlFor="merchant-pays">{t("client_form.payment.shipping_cost_merchant")}</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="returnPolicy">{t("client_form.payment.return_policy")}</Label>
          <Textarea
            id="returnPolicy"
            {...form.register("payment.returnPolicy")}
            placeholder={t("client_form.payment.return_policy_placeholder")}
            rows={3}
          />
          {errors.payment?.returnPolicy && (
            <p className="text-sm text-red-500">{errors.payment.returnPolicy.message}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const TechnicalStep = () => (
    <Card>
      <CardHeader>
        <CardTitle>{t("client_form.technical.title")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>{t("client_form.technical.tech_stack")}</Label>
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm">{t("client_form.technical.react_supabase")}</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label>{t("client_form.technical.maintenance_title")}</Label>
          <div className="p-3 bg-muted rounded-lg space-y-2">
            <p className="text-sm font-medium">{t("client_form.technical.maintenance_price")}</p>
            <p className="text-sm text-muted-foreground">{t("client_form.technical.maintenance_includes")}</p>
          </div>
          <RadioGroup
            value={watchedValues.technical.maintenance}
            onValueChange={(value) => setValue("technical.maintenance", value as "yes" | "no")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="maintenance-yes" />
              <Label htmlFor="maintenance-yes">{t("client_form.technical.maintenance_yes")}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="maintenance-no" />
              <Label htmlFor="maintenance-no">{t("client_form.technical.maintenance_no")}</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>{t("client_form.technical.hosting_title")}</Label>
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm">{t("client_form.technical.hosting_description")}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hosting-agree"
              checked={watchedValues.technical.hostingAgree}
              onCheckedChange={(checked) => setValue("technical.hostingAgree", checked as boolean)}
            />
            <Label htmlFor="hosting-agree">{t("client_form.technical.hosting_agree")}</Label>
          </div>
          {errors.technical?.hostingAgree && (
            <p className="text-sm text-red-500">{errors.technical.hostingAgree.message}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const ReviewStep = () => (
    <Card>
      <CardHeader>
        <CardTitle>{t("client_form.review.title")}</CardTitle>
        <CardDescription>{t("client_form.review.subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">{t("client_form.steps.brand")}</h3>
            <div className="mt-2 space-y-2 text-sm">
              <p><strong>{t("client_form.brand.brand_name")}:</strong> {watchedValues.brand.brandName}</p>
              <p><strong>{t("client_form.brand.products")}:</strong> {watchedValues.brand.products.join(", ")}</p>
              <p><strong>{t("client_form.brand.product_photos")}:</strong> {t(`client_form.brand.product_photos_${watchedValues.brand.productPhotosAvailable}`)}</p>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold">{t("client_form.steps.design")}</h3>
            <div className="mt-2 space-y-2 text-sm">
              <p><strong>{t("client_form.design.brand_identity")}:</strong> {t(`client_form.design.brand_identity_${watchedValues.design.brandIdentityAvailable}`)}</p>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold">{t("client_form.steps.payment")}</h3>
            <div className="mt-2 space-y-2 text-sm">
              <p><strong>{t("client_form.payment.payment_methods")}:</strong> {watchedValues.payment.paymentMethods.join(", ")}</p>
              <p><strong>{t("client_form.payment.shipping_cost")}:</strong> {t(`client_form.payment.shipping_cost_${watchedValues.payment.shippingCost}`)}</p>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold">{t("client_form.steps.technical")}</h3>
            <div className="mt-2 space-y-2 text-sm">
              <p><strong>{t("client_form.technical.maintenance")}:</strong> {t(`client_form.technical.maintenance_${watchedValues.technical.maintenance}`)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep = () => {
    switch (currentStep) {
      case "brand":
        return <BrandStep />;
      case "design":
        return <DesignStep />;
      case "payment":
        return <PaymentStep />;
      case "technical":
        return <TechnicalStep />;
      case "review":
        return <ReviewStep />;
      default:
        return <BrandStep />;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'hsl(280 6% 5%)' }}>
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">{t("client_form.review.success_title")}</CardTitle>
            <CardDescription>{t("client_form.review.success_message")}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4" style={{ backgroundColor: 'hsl(280 6% 5%)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Back to Services Button */}
        <div className="mb-6 -ml-4">
          <Button
            variant="outline"
            onClick={() => navigate("/services")}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("client_form.back_to_services")}
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{t("client_form.title")}</h1>
          <p className="text-muted-foreground">{t("client_form.subtitle")}</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium aspect-square ${
                    index <= currentStepIndex
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="ml-2 text-sm">{t(`client_form.steps.${step}`)}</span>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 bg-border mx-2">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: index < currentStepIndex ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <Progress value={progress} className="w-full mt-4" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">{renderStep()}</div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStepIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              {t("client_form.brand.previous")}
            </Button>

            {currentStep === "review" ? (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("client_form.review.submitting") : t("client_form.review.submit")}
              </Button>
            ) : (
              <Button type="button" onClick={nextStep}>
                {currentStep === "brand" && t("client_form.brand.next")}
                {currentStep === "design" && t("client_form.design.next")}
                {currentStep === "payment" && t("client_form.payment.next")}
                {currentStep === "technical" && t("client_form.technical.next")}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;