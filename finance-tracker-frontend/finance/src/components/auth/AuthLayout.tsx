import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="bg-gray-50 flex min-h-screen items-center justify-center px-4 py-8">
    <div className="w-full max-w-md animate-fade-in">{children}</div>
  </div>
);

export default AuthLayout;
