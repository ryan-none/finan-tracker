import { useState, useEffect, use } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Loader2, Mail, Lock, User } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { PasswordInput } from "../components/auth/PasswordInput";
import { AppLogo } from "../components/auth/AppLogo";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthFormSkeleton } from "../components/auth/AuthFormSkeleton";
import { sileo } from "sileo";
import { UnsavedChangesModal } from "../components/ui/UnsavedChangesModal";

const SignUp = () => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const hasUnsaved = name || email || password || confirm;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields.");
      sileo.error({ title: "Please fill in all fields." });
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      sileo.error({ title: "Passwords do not match." });
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      sileo.error({ title: "Password must be at least 8 characters." });
      return;
    }
    setSubmitting(true);
    // try {
    //   const res = await fetch("http://localhost:4000/api/auth/signup", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ name, email, password }),
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     setError(data.message || "Sign up failed.");
    //     sileo.error({ title: data.message || "Sign up failed." });
    //     setSubmitting(false);
    //     return;
    //   }

    // // Auto sign in after successful sign up
    // const loginRes = await fetch("http://localhost:4000/api/auth/signin", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    // const loginData = await loginRes.json();
    // if (!loginRes.ok) {
    //   setError(loginData.message || "Auto sign in failed.");
    //   sileo.error({ title: loginData.message || "Auto sign in failed." });
    //   setSubmitting(false);
    //   return;
    // }
    // sileo.success({ title: "Account created and signed in!" });
    // navigate("/dashboard"); 
    // } catch (err) {
    //   setError("Network error.");
    //   sileo.error({ title: "Network error. Please try again." });
    // }
    // setSubmitting(false);
    setTimeout(() => {
    setSuccess(true);
    setSubmitting(false);
    // Optionally, auto-redirect to sign in page with pre-filled credentials
    navigate("/sign-in", { state: { email, password } });
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
          <CardContent className="p-8">
            {success ? (
              <div className="flex flex-col items-center gap-4 py-8 animate-fade-in">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <svg
                    className="h-7 w-7 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold">Account Created!</h2>
                <p className="text-sm text-gray-500 text-center">
                  Your account has been created successfully.
                </p>
                <Link to="/sign-in">
                  <Button variant="gradient" size="lg">
                    Go to Sign In
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center gap-1 pb-2">
                  <AppLogo />
                  <p className="text-sm text-gray-500">
                    Finance Tracker - Create your account
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="pl-10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        id="signup-email"
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
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <PasswordInput
                        id="signup-password"
                        placeholder="••••••••"
                        className="h-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        showStrength
                        showIcon
                        autoComplete="new-password"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 z-10" />
                      <PasswordInput
                        id="confirm-password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
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
                      Creating account…
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/sign-in"
                    className="text-blue-500 font-medium hover:underline"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNav("/sign-in");
                    }}
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            )}
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

export default SignUp;
