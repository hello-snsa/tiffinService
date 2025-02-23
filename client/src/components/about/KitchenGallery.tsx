import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d",
    title: "Hygienic Kitchen Setup",
    description: "Our spotless kitchen facility ensures the highest standards of hygiene",
  },
  {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    title: "Clean Working Environment",
    description: "We maintain a spotless cooking environment for food safety",
  },
  {
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
    title: "Quality Ingredients",
    description: "Fresh vegetables, long grain rice, Amul butter, and olive oil",
  },
  {
    image: "https://images.unsplash.com/photo-1621857426350-ddab819cf0cc",
    title: "Hygienic Packaging",
    description: "Food is packed in clean, traditional Indian tiffin boxes",
  },
  {
    image: "https://images.unsplash.com/photo-1517241165176-52610c81d064",
    title: "Traditional Preparation",
    description: "Authentic Bengali cooking methods for the perfect taste",
  },
  {
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d",
    title: "Professional Delivery",
    description: "Carefully packed meals ready for timely delivery",
  },
];

export default function KitchenGallery() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Kitchen Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}