import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Started with a passion for authentic Bengali cuisine, we bring the
            taste of home-cooked meals to your doorstep. Our mission is to provide
            fresh, hygienic, and delicious meals that remind you of home.
          </p>
          <p className="text-muted-foreground">
            We take pride in maintaining the highest standards of hygiene and
            quality in our kitchen, ensuring that every meal is prepared with care
            and love.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d"
            alt="Our Kitchen"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d",
            title: "Hygienic Kitchen",
            description: "State-of-the-art facilities for hygienic food preparation",
          },
          {
            image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
            title: "Quality Ingredients",
            description: "Fresh ingredients sourced from trusted suppliers",
          },
          {
            image: "https://images.unsplash.com/photo-1621857426350-ddab819cf0cc",
            title: "Traditional Packaging",
            description: "Clean and hygienic traditional Indian tiffin boxes",
          },
        ].map((item) => (
          <Card key={item.title}>
            <CardContent className="pt-6">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}