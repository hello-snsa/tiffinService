import WeeklyMenu from "@/components/menu/WeeklyMenu";
import { Card, CardContent } from "@/components/ui/card";

export default function Menu() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="pt-6">
            <img
              src="https://images.unsplash.com/photo-1624374053855-39a5a1a41402"
              alt="Lunch Thali"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Lunch Special</h3>
            <p className="text-muted-foreground">
              Traditional Bengali lunch with rice, dal, and seasonal vegetables
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <img
              src="https://images.unsplash.com/photo-1613292443284-8d10ef9383fe"
              alt="Dinner Thali"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Dinner Special</h3>
            <p className="text-muted-foreground">
              Light and healthy dinner options with roti and sabzi
            </p>
          </CardContent>
        </Card>
      </div>

      <WeeklyMenu />
    </div>
  );
}