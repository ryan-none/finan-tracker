import { Card, CardContent } from "../ui/card";
import { AlertTriangle, TrendingUp, Lightbulb } from "lucide-react";
const budgetProgress = [
  { name: "Generate", percent: 62, color: "#3b82f6" },
  { name: "Research", percent: 64, color: "#059669" },
  { name: "Overhead", percent: 84, color: "#ef4444" },
  { name: "Wants", percent: 60, color: "#3b82f6" },
  { name: "Tithing", percent: 56, color: "#059669" },
  { name: "Health", percent: 36, color: "#3b82f6" },
];
const savingsGoals = [
  { name: "Emergency Fund", current: 42000, target: 100000 },
  { name: "New Laptop", current: 28000, target: 50000 },
  { name: "Vacation", current: 15000, target: 30000 },
];
const tips = [
  { icon: AlertTriangle, text: "Overhead is at 84% — close to budget limit!", type: "warning" as const },
  { icon: TrendingUp, text: "Savings rate improved by 2.1% this month.", type: "success" as const },
  { icon: Lightbulb, text: "Consider increasing your Tithing allocation.", type: "info" as const },
];
const InsightsGoals = () => {
  return (
    <div className="space-y-4">
      {/* Budget Progress */}
      <Card className="bg-white border">
        <CardContent className="p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">Budget Progress</h3>
          {budgetProgress.map((b) => (
            <div key={b.name} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">{b.name}</span>
                <span className="font-medium text-gray-900">{b.percent}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${b.percent}%`, backgroundColor: b.color }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      {/* Savings Goals */}
      <Card className="bg-white border">
        <CardContent className="p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">Savings Goals</h3>
          {savingsGoals.map((goal) => {
            const pct = Math.round((goal.current / goal.target) * 100);
            return (
              <div key={goal.name} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">{goal.name}</span>
                  <span className="font-medium text-gray-900">
                    ₱{goal.current.toLocaleString()} / ₱{goal.target.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
      {/* Tips */}
      {/* <Card className="glass-card">
        <CardContent className="p-5 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
          {tips.map((tip, i) => (
            <div
              key={i}
              className={`flex items-start gap-2.5 rounded-xl p-3 text-xs ${
                tip.type === "warning"
                  ? "bg-destructive/10 text-destructive"
                  : tip.type === "success"
                  ? "bg-accent/10 text-accent"
                  : "bg-primary/10 text-primary"
              }`}
            >
              <tip.icon className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{tip.text}</span>
            </div>
          ))}
        </CardContent>
      </Card> */}
    </div>
  );
};
export default InsightsGoals;
