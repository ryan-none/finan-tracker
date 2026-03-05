import { TrendingUp, TrendingDown, Wallet, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
const stats = [
  {
    label: "Total Balance",
    value: "₱124,500.00",
    change: "+12.5%",
    trend: "up" as const,
    icon: Wallet,
  },
  {
    label: "Monthly Income",
    value: "₱45,200.00",
    change: "+8.2%",
    trend: "up" as const,
    icon: TrendingUp,
  },
  {
    label: "Monthly Expenses",
    value: "₱28,750.00",
    change: "-3.1%",
    trend: "down" as const,
    icon: TrendingDown,
  },
  {
    label: "Savings Rate",
    value: "36.4%",
    change: "+2.1%",
    trend: "up" as const,
    icon: ArrowUpRight,
  },
];
const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="bg-white border shadow hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                <stat.icon className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default OverviewCards;
