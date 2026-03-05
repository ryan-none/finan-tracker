import { cn } from "../../lib/utils";

interface AuthSkeletonProps {
  className?: string;
}

const SkeletonPulse = ({ className }: { className?: string }) => (
  <div className={cn("animate-pulse rounded-xl bg-gray-200", className)} />
);

export const AuthFormSkeleton = ({ className }: AuthSkeletonProps) => {
  return (
    <div className={cn("w-full max-w-md space-y-6 p-8", className)}>
      {/* Logo */}
      <div className="flex flex-col items-center gap-3">
        <SkeletonPulse className="h-10 w-10 rounded-full" />
        <SkeletonPulse className="h-6 w-32" />
        <SkeletonPulse className="h-4 w-48" />
      </div>
      {/* Fields */}
      <div className="space-y-4 pt-4">
        <div className="space-y-2">
          <SkeletonPulse className="h-4 w-16" />
          <SkeletonPulse className="h-11 w-full" />
        </div>
        <div className="space-y-2">
          <SkeletonPulse className="h-4 w-20" />
          <SkeletonPulse className="h-11 w-full" />
        </div>
      </div>
      {/* Button */}
      <SkeletonPulse className="h-11 w-full" />
      {/* Link */}
      <SkeletonPulse className="mx-auto h-4 w-40" />
    </div>
  );
};

export default AuthFormSkeleton;
