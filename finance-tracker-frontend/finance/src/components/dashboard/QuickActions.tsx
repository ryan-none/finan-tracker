import { Plus, BarChart3, Target } from "lucide-react";
import { Button } from "../ui/button";
const QuickActions = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="gradient" className="gap-2">
        <Plus className="h-4 w-4" />
        Add Transaction
      </Button>
      <Button variant="outline" className="gap-2">
        <BarChart3 className="h-4 w-4" />
        View Reports
      </Button>
      <Button variant="outline" className="gap-2">
        <Target className="h-4 w-4" />
        Set Budget
      </Button>
    </div>
  );
};
export default QuickActions;
