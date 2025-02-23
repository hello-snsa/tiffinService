import { Card, CardContent } from "@/components/ui/card";
import { Leaf, UtensilsCrossed, Clock, Award } from "lucide-react";

const features = [
  {
    title: "Fresh Ingredients",
    description: "Quality ingredients sourced daily for the best taste",
    icon: Leaf,
  },
  {
    title: "Hygienic Preparation",
    description: "Separate cooking areas for veg and non-veg dishes",
    icon: UtensilsCrossed,
  },
  {
    title: "Timely Delivery",
    description: "Hot meals delivered right on schedule",
    icon: Clock,
  },
  {
    title: "Authentic Taste",
    description: "Traditional Bengali recipes with homely touch",
    icon: Award,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
