import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Authentic Bengali
              <span className="text-primary"> Tiffin Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the taste of home-cooked Bengali cuisine delivered right to
              your doorstep. Fresh, hygienic, and made with love.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us: +91 81590 67325
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1517241165176-52610c81d064"
              alt="Bengali Thali"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}