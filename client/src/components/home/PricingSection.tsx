import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple & Transparent Pricing</h2>
          <p className="text-muted-foreground">
            Quality food at affordable prices
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Single Meal Plan</CardTitle>
            <CardDescription>Perfect for daily tiffin service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-6">
              ₹199
              <span className="text-muted-foreground text-sm font-normal">
                /meal
              </span>
            </div>

            <ul className="space-y-4">
              {[
                "Fresh home-cooked meals",
                "Roti, Rice, Dal, 2 Sabzi",
                "Salad and Pickle included",
                "Delivery included",
                "Skip anytime with no charges",
                "Monthly advance payment",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}