import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const weeklyMenu = [
  {
    day: "Monday",
    lunch: {
      items: ["Rice", "Dal", "Mixed Veg", "Aloo Posto", "Salad"],
      type: "veg",
    },
    dinner: {
      items: ["Roti", "Dal", "Chicken Curry", "Jeera Aloo", "Salad"],
      type: "non-veg",
    },
  },
  {
    day: "Tuesday",
    lunch: {
      items: ["Rice", "Dal", "Bhindi Masala", "Begun Bhaja", "Salad"],
      type: "veg",
    },
    dinner: {
      items: ["Roti", "Dal", "Paneer Butter Masala", "Chana", "Salad"],
      type: "veg",
    },
  },
  {
    day: "Wednesday",
    lunch: {
      items: ["Rice", "Dal", "Aloo Gobi", "Loki Bhaji", "Salad"],
      type: "veg",
    },
    dinner: {
      items: ["Roti", "Dal", "Fish Curry", "Aloo Bhaji", "Salad"],
      type: "non-veg",
    },
  },
  {
    day: "Thursday",
    lunch: {
      items: ["Rice", "Dal", "Paneer Tikka", "Bhindi Fry", "Salad"],
      type: "veg",
    },
    dinner: {
      items: ["Roti", "Dal", "Mix Veg Curry", "Soya Chunks", "Salad"],
      type: "veg",
    },
  },
  {
    day: "Friday",
    lunch: {
      items: ["Rice", "Dal", "Chicken Curry", "Aloo Matar", "Salad"],
      type: "non-veg",
    },
    dinner: {
      items: ["Roti", "Dal", "Paneer Bhurji", "Lauki Kofta", "Salad"],
      type: "veg",
    },
  },
  {
    day: "Saturday",
    lunch: {
      items: ["Rice", "Dal", "Mushroom Curry", "Aloo Jeera", "Salad"],
      type: "veg",
    },
    dinner: {
      items: ["Roti", "Dal", "Egg Curry", "Mix Veg", "Salad"],
      type: "veg",
    },
  },
  {
    day: "Sunday",
    lunch: {
      items: ["Rice", "Dal", "Malai Kofta", "Chana Masala", "Salad"],
      type: "veg",
    },
    dinner: {
      items: ["Roti", "Dal", "Fish Curry", "Aloo Capsicum", "Salad"],
      type: "non-veg",
    },
  },
];

export default function WeeklyMenu() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Weekly Menu</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Lunch</TableHead>
              <TableHead>Dinner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {weeklyMenu.map((day) => (
              <TableRow key={day.day}>
                <TableCell className="font-medium">{day.day}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit">
                      {day.lunch.type}
                    </Badge>
                    {day.lunch.items.join(", ")}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit">
                      {day.dinner.type}
                    </Badge>
                    {day.dinner.items.join(", ")}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}