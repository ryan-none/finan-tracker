import {
  TrendingUp,
  BookOpen,
  Home,
  ShoppingBag,
  Heart,
  HeartPulse,
  Plus,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
const categories = [
  {
    name: "Generate",
    description: "Investments, Passive Income, Business",
    icon: TrendingUp,
    spent: "₱12,400",
    budget: "₱20,000",
    percent: 62,
    color: "#3b82f6",
    bgClass: "bg-blue-50",
    textClass: "text-blue-600",
  },
  {
    name: "Research",
    description: "Subscriptions, Certifications, Tools",
    icon: BookOpen,
    spent: "₱3,200",
    budget: "₱5,000",
    percent: 64,
    color: "#059669",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-600",
  },
  {
    name: "Overhead",
    description: "Rent, Loans, Food, Utilities",
    icon: Home,
    spent: "₱18,500",
    budget: "₱22,000",
    percent: 84,
    color: "#ef4444",
    bgClass: "bg-red-50",
    textClass: "text-red-500",
  },
  {
    name: "Wants",
    description: "Hobbies, Shopping, Non-Essential",
    icon: ShoppingBag,
    spent: "₱4,800",
    budget: "₱8,000",
    percent: 60,
    color: "#3b82f6",
    bgClass: "bg-blue-50",
    textClass: "text-blue-600",
  },
  {
    name: "Tithing",
    description: "Charity, Lending, Donations",
    icon: Heart,
    spent: "₱2,500",
    budget: "₱4,500",
    percent: 56,
    color: "#059669",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-600",
  },
  {
    name: "Health",
    description: "Medical, Insurance, Medicines",
    icon: HeartPulse,
    spent: "₱1,800",
    budget: "₱5,000",
    percent: 36,
    color: "#3b82f6",
    bgClass: "bg-blue-50",
    textClass: "text-blue-600",
  },
];
const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <Card key={cat.name} className="bg-white border group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.bgClass}`}>
                  <cat.icon className={`h-5 w-5 ${cat.textClass}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.description}</p>
                </div>
              </div>
            </div>
            {/* Budget bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{cat.spent} spent</span>
                <span className="font-medium text-gray-900">{cat.budget}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${cat.percent}%`,
                    backgroundColor: cat.color,
                  }}
                />
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full gap-1.5 text-gray-500 hover:text-gray-900 group-hover:opacity-100 transition-opacity"
            >
              <Plus className="h-3.5 w-3.5" />
              Add Transaction
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default CategoryGrid;