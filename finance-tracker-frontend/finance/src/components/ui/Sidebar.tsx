import { Home, TrendingUp, BookOpen, ShoppingBag, Heart, HeartPulse, X, Wallet } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/category/Generate", label: "Generate", icon: TrendingUp },
  { to: "/category/Research", label: "Research", icon: BookOpen },
  { to: "/category/Overhead", label: "Overhead", icon: Home },
  { to: "/category/Wants", label: "Wants", icon: ShoppingBag },
  { to: "/category/Tithing", label: "Tithing", icon: Heart },
  { to: "/category/Health", label: "Health", icon: HeartPulse },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {

  const NavItem = ({ to, label, Icon }: { to: string; label: string; Icon: any }) => (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
          isActive ? "bg-blue-50 text-blue-600 font-semibold" : ""
        )
      }
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </NavLink>
  );

  return (
    <>
      {/* desktop sidebar */}
      <aside className="hidden md:flex md:fixed md:inset-y-0 md:left-0 md:w-64 md:flex-col md:gap-4 md:border-r md:border-r-gray-200 md:bg-white md:p-4">
        <div className="flex items-center gap-3 px-1">
          <div className="bg-linear-to-br from-blue-400 to-blue-600 h-10 w-10 flex items-center justify-center rounded-lg shadow">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-lg font-bold text-gray-900">G.R.O.W.T.H</h2>
        </div>

        <nav className="mt-4 flex flex-1 flex-col gap-1">
          {links.map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} Icon={l.icon} />
          ))}
        </nav>

      </aside>

      {/* mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={onClose}
        />
        <div className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-4 transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-linear-to-br from-blue-400 to-blue-600 h-9 w-9 flex items-center justify-center rounded-lg shadow">
                <Wallet className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">G.R.O.W.T.H</h3>
            </div>
            <button onClick={onClose} aria-label="Close menu" className="p-1">
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <nav className="mt-4 flex flex-col gap-1">
            {links.map((l) => (
              <div key={l.to} onClick={onClose}>
                <NavItem to={l.to} label={l.label} Icon={l.icon} />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}