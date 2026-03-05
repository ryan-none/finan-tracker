import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Loader2, Mail, Lock } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
// import { Checkbox } from "../components/ui/checkbox";
import { PasswordInput } from "../components/auth/PasswordInput";
import { AppLogo } from "../components/auth/AppLogo";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthFormSkeleton } from "../components/auth/AuthFormSkeleton";
import { sileo } from "sileo";
import { UnsavedChangesModal } from "../components/ui/UnsavedChangesModal";

const SignIn = () => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("demo@email.com");
  const [password, setPassword] = useState("password123"); 
  //   const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const hasUnsaved = !!email || !!password;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      sileo.error({ title: "Please fill in all fields." });
      return;
    }

    setSubmitting(true);
    // try {
    //   const res = await fetch("http://localhost:4000/api/auth/signin", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await res.json();

    //   if (!res.ok) {
    //     setError(data.message || "Sign in failed.");
    //     sileo.error({ title: data.message || "Sign in failed." });
    //     setSubmitting(false);
    //     return;
    //   }

    //   // Success!
    //   sileo.success({ title: "Signed in successfully!" });
    //   navigate("/dashboard");
    // } catch (err) {
    //   setError("Network error.");
    //   sileo.error({ title: "Network error. Please try again." });
    // }
    // setSubmitting(false);
    setTimeout(() => {
    sileo.success({ title: "Signed in successfully!" });
    navigate("/dashboard");
    setSubmitting(false);
  }, 800);
  };

  const handleNav = (path: string) => {
    if (hasUnsaved) {
      setShowModal(true);
      setNextPath(path);
    } else {
      navigate(path);
    }
  };

  const handleConfirmLeave = () => {
    setShowModal(false);
    if (nextPath) navigate(nextPath);
  };

  const handleCancelLeave = () => {
    setShowModal(false);
    setNextPath(null);
  };

  return (
    <AuthLayout>
      <Card className="bg-white border overflow-hidden">
        {loading ? (
          <AuthFormSkeleton />
        ) : (
          <CardContent className="p-8 ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center gap-1 pb-2">
                <AppLogo />
                <p className="text-sm text-gray-500">
                  Finance Tracker - Sign in to your account
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 z-10" />
                    <PasswordInput
                      id="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end">
                {/* <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(v) => setRemember(v === true)}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                    Remember me
                  </Label>
                </div> */}
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing in…
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-blue-500 font-medium hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("/sign-up");
                  }}
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </CardContent>
        )}
      </Card>

      <UnsavedChangesModal
        open={showModal}
        onConfirm={handleConfirmLeave}
        onCancel={handleCancelLeave}
      />
    </AuthLayout>
  );
};

export default SignIn;
