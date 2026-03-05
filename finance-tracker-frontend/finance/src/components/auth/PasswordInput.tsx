import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "../../components/ui/input";
import { cn } from "../../lib/utils";

interface PasswordInputProps extends Omit<React.ComponentProps<"input">, "type"> {
  showStrength?: boolean;
  value?: string;
  showIcon?: boolean;
}

const getStrength = (password: string): { level: number; label: string; color: string } => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { level: score, label: "Weak", color: "bg-red-500" };
  if (score === 2) return { level: score, label: "Fair", color: "bg-orange-400" };
  if (score === 3) return { level: score, label: "Good", color: "bg-yellow-400" };
  return { level: score, label: "Strong", color: "bg-emerald-500" };
};

export const PasswordInput = ({
  showStrength = false,
  value = "",
  className,
  showIcon = false,
  ...props
}: PasswordInputProps) => {
  const [visible, setVisible] = useState(false);
  const strength = getStrength(value);

  return (
    <div className="space-y-2">
      <div className="relative">
        {showIcon && (
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 z-10" />
        )}
        <Input
          type={visible ? "text" : "password"}
          maxLength={15}
          className={cn(
            showIcon ? "pl-10 pr-10 h-10" : "pr-10 h-10",
            className
          )}
          value={value}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
          tabIndex={-1}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {showStrength && value.length > 0 && (
        <div className="space-y-1">
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-all duration-300",
                  i <= strength.level ? strength.color : "bg-gray-200"
                )}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500">{strength.label}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;