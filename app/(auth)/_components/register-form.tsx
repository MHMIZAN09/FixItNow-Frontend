"use client";

import {
  Camera,
  Eye,
  EyeOff,
  Home,
  Lock,
  Mail,
  ShieldCheck,
  User,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";
import { registerAction } from "../_actions/authActions";

type RegisterState = {
  success: boolean;
  statusCode?: number;
  message?: string;
  data?: {
    name: string;
    email: string;
    role: string;
    profileImage?: string;
  };
};

const initialState: RegisterState = {
  success: false,
  message: "",
};

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);

  const [selectedRole, setSelectedRole] = useState<"CUSTOMER" | "TECHNICIAN">(
    "CUSTOMER",
  );

  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  const [state, action, pending] = useActionState(registerAction, initialState);

  const router = useRouter();

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message);

      router.push("/login");
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      setProfilePreview(null);
      return;
    }

    // Validate image type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file.");
      event.target.value = "";
      setProfilePreview(null);
      return;
    }

    // Maximum 2MB
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Profile image must be less than 2MB.");
      event.target.value = "";
      setProfilePreview(null);
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setProfilePreview(previewUrl);
  };

  return (
    <div
      className={cn("mx-auto flex w-full max-w-4xl flex-col gap-6", className)}
      {...props}
    >
      <Card className="overflow-hidden rounded-2xl border-border/50 bg-card p-0 shadow-xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* ==========================================
              LEFT SIDE - REGISTER FORM
          ========================================== */}

          <form
            action={action}
            className="flex flex-col justify-between p-6 sm:p-8 lg:p-10"
          >
            <FieldGroup className="gap-4">
              {/* ==========================================
                  BRAND HEADER
              ========================================== */}

              <div className="mb-1 flex flex-col items-center gap-1.5 text-center">
                <Link href="/" className="group mb-1 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
                    <Home className="h-5 w-5" />
                  </div>

                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    FixIt<span className="text-primary">Now</span>
                  </span>
                </Link>

                <h1 className="text-2xl font-bold tracking-tight text-foreground">
                  Create an Account
                </h1>

                <p className="max-w-xs text-xs text-muted-foreground sm:text-sm">
                  Join FixItNow and connect with trusted home service
                  professionals.
                </p>
              </div>

              {/* ==========================================
                  ROLE
              ========================================== */}

              <input type="hidden" name="role" value={selectedRole} />

              <Field className="space-y-1.5">
                <FieldLabel className="text-xs font-semibold text-foreground">
                  I want to join as
                </FieldLabel>

                <div className="grid grid-cols-2 gap-2 rounded-xl border border-border/40 bg-muted/60 p-1">
                  {/* Customer */}

                  <button
                    type="button"
                    onClick={() => setSelectedRole("CUSTOMER")}
                    className={cn(
                      "flex cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all",
                      selectedRole === "CUSTOMER"
                        ? "border border-border/60 bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <User className="h-3.5 w-3.5 text-primary" />
                    Customer
                  </button>

                  {/* Technician */}

                  <button
                    type="button"
                    onClick={() => setSelectedRole("TECHNICIAN")}
                    className={cn(
                      "flex cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all",
                      selectedRole === "TECHNICIAN"
                        ? "border border-border/60 bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Wrench className="h-3.5 w-3.5 text-primary" />
                    Technician
                  </button>
                </div>
              </Field>

              {/* ==========================================
                  PROFILE IMAGE
              ========================================== */}

              <Field className="space-y-1.5">
                <FieldLabel
                  htmlFor="profileImage"
                  className="text-xs font-semibold text-foreground"
                >
                  Profile Image
                </FieldLabel>

                <div className="flex items-center gap-4">
                  {/* Preview */}

                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-muted">
                    {profilePreview ? (
                      <Image
                        src={profilePreview}
                        alt="Profile preview"
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    ) : (
                      <User className="h-7 w-7 text-muted-foreground" />
                    )}
                  </div>

                  {/* File Input */}

                  <div className="flex flex-1 flex-col gap-1.5">
                    <label
                      htmlFor="profileImage"
                      className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md border border-border/60 bg-background px-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      <Camera className="h-4 w-4" />
                      Choose Image
                      <Input
                        id="profileImage"
                        name="profileImage"
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        onChange={handleProfileImageChange}
                        className="hidden"
                      />
                    </label>

                    <p className="text-[10px] text-muted-foreground">
                      JPG, PNG or WEBP • Maximum 2MB
                    </p>
                  </div>
                </div>
              </Field>

              {/* ==========================================
                  NAME
              ========================================== */}

              <Field className="space-y-1">
                <FieldLabel
                  htmlFor="name"
                  className="text-xs font-semibold text-foreground"
                >
                  Full Name
                </FieldLabel>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                    className="h-10 border-border/60 pl-9 text-sm transition-all focus:border-primary focus-visible:ring-primary/20"
                  />
                </div>
              </Field>

              {/* ==========================================
                  EMAIL
              ========================================== */}

              <Field className="space-y-1">
                <FieldLabel
                  htmlFor="email"
                  className="text-xs font-semibold text-foreground"
                >
                  Email Address
                </FieldLabel>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    autoComplete="email"
                    className="h-10 border-border/60 pl-9 text-sm transition-all focus:border-primary focus-visible:ring-primary/20"
                  />
                </div>
              </Field>

              {/* ==========================================
                  PASSWORD
              ========================================== */}

              <Field className="space-y-1">
                <FieldLabel
                  htmlFor="password"
                  className="text-xs font-semibold text-foreground"
                >
                  Password
                </FieldLabel>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    className="h-10 border-border/60 pl-9 pr-10 text-sm transition-all focus:border-primary focus-visible:ring-primary/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}

                    <span className="sr-only">Toggle password visibility</span>
                  </button>
                </div>

                <p className="text-[10px] text-muted-foreground">
                  Password must contain at least 8 characters.
                </p>
              </Field>

              {/* ==========================================
                  SUBMIT BUTTON
              ========================================== */}

              <Field className="pt-2">
                <Button
                  type="submit"
                  disabled={pending}
                  className="h-10 w-full cursor-pointer gap-2 font-semibold shadow-md shadow-primary/15 transition-all"
                >
                  {pending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <User className="h-4 w-4" />
                      Create Account
                    </>
                  )}
                </Button>
              </Field>

              {/* ==========================================
                  LOGIN
              ========================================== */}

              <FieldDescription className="pt-1 text-center text-xs text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-primary hover:underline hover:underline-offset-4"
                >
                  Sign in instead
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          {/* ==========================================
              RIGHT SIDE
          ========================================== */}

          <div className="relative hidden overflow-hidden bg-zinc-900 md:block">
            {/* Simple background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-zinc-900 to-black" />

            {/* Decorative shapes */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            {/* Content */}

            <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 text-white">
              {/* Trust Badge */}

              <div className="flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                <ShieldCheck className="h-3.5 w-3.5" />
                Trusted Home Service Platform
              </div>

              {/* Bottom Content */}

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                    <Wrench className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-semibold text-zinc-200">
                    FixItNow
                  </span>
                </div>

                <h2 className="text-2xl font-bold leading-tight text-zinc-100">
                  {selectedRole === "TECHNICIAN"
                    ? "Grow your service business with trusted customers."
                    : "Find trusted professionals for your home."}
                </h2>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {selectedRole === "TECHNICIAN"
                    ? "Create your professional profile, manage your services, set your availability, and handle bookings from one place."
                    : "Book reliable technicians for plumbing, electrical, cleaning, painting, and other home services."}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />

                  <span className="text-xs font-medium text-zinc-400">
                    Safe, reliable and professional services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ==========================================
          TERMS
      ========================================== */}

      <FieldDescription className="px-6 text-center text-xs text-muted-foreground">
        By registering, you agree to FixItNow&apos;s{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Privacy Policy
        </Link>
        .
      </FieldDescription>
    </div>
  );
}

export default RegisterForm;
