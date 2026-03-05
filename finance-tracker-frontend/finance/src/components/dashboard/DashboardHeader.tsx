import { Wallet, Bell, Settings, LogOut, Menu } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

const DashboardHeader = ({ onMenuClick }: DashboardHeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="flex h-16 w-full items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            aria-label="Open menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-900">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-900">
            <Settings className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-red-500"
            onClick={() => navigate("/sign-in")}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
export default DashboardHeader;
