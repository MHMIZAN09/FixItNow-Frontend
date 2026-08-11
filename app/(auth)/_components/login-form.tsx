
'use client';

import {
  Eye,
  EyeOff,
  Home,
  Lock,
  Mail,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import { useActionState, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { loginAction } from '../_actions/authActions';


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [showPassword, setShowPassword] = useState(false);

  const [state, action, pending] = useActionState(loginAction, false);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || 'Login successful!');

      // Role based redirect can be handled here
      // or inside loginAction.
      //
      // Example:
      // router.push('/dashboard');
    } else {
      toast.error(
        state.message || 'Login failed. Please check your credentials.',
      );
    }
  }, [state]);

  return (
    <div
      className={cn(
        'flex w-full max-w-4xl flex-col gap-6 mx-auto',
        className,
      )}
      {...props}
    >
      <Card className="overflow-hidden rounded-2xl border-border/50 bg-card p-0 shadow-xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* =====================================================
              LEFT SIDE - LOGIN FORM
          ====================================================== */}

          <form
            action={action}
            className="flex flex-col justify-between p-6 sm:p-8 lg:p-10"
          >
            <FieldGroup className="gap-5">

              {/* Brand Header */}
              <div className="mb-2 flex flex-col items-center gap-2 text-center">
                <Link
                  href="/"
                  className="group mb-1 flex items-center gap-2"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
                    <Home className="h-5 w-5" />
                  </div>

                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    FixIt<span className="text-primary">Now</span>
                  </span>
                </Link>

                <h1 className="text-2xl font-bold tracking-tight text-foreground">
                  Welcome back
                </h1>

                <p className="max-w-xs text-xs text-muted-foreground sm:text-sm">
                  Login to book trusted home services and manage your bookings.
                </p>
              </div>

              {/* Email */}
              <Field className="space-y-1.5">
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

              {/* Password */}
              <Field className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <FieldLabel
                    htmlFor="password"
                    className="text-xs font-semibold text-foreground"
                  >
                    Password
                  </FieldLabel>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-primary transition-all hover:underline hover:underline-offset-4"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
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

                    <span className="sr-only">
                      Toggle password visibility
                    </span>
                  </button>
                </div>
              </Field>

              {/* Submit */}
              <Field className="pt-2">
                <Button
                  type="submit"
                  disabled={pending}
                  className="h-10 w-full cursor-pointer gap-2 font-semibold shadow-md shadow-primary/15 transition-all"
                >
                  {pending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Logging in...
                    </>
                  ) : (
                    <>
                      <Wrench className="h-4 w-4" />
                      Login
                    </>
                  )}
                </Button>
              </Field>

              {/* Register */}
              <FieldDescription className="pt-1 text-center text-xs text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link
                  href="/register"
                  className="font-semibold text-primary hover:underline hover:underline-offset-4"
                >
                  Create an account
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          {/* =====================================================
              RIGHT SIDE - FIXITNOW SHOWCASE
          ====================================================== */}

          <div className="relative hidden overflow-hidden bg-zinc-900 md:block">

            {/* Background Image */}

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/auth/login-home-service.jpg')",
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 text-white">

              {/* Trust Badge */}
              <div className="flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                <ShieldCheck className="h-3.5 w-3.5 text-primary-foreground" />

                Trusted Home Service Professionals
              </div>

              {/* Bottom Content */}
              <div className="space-y-3">

                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />

                  <span className="text-sm font-semibold text-zinc-200">
                    Reliable service. Right at your doorstep.
                  </span>
                </div>

                <blockquote className="text-lg font-medium leading-snug text-zinc-100">
                  &ldquo;FixItNow made finding a reliable technician for my
                  home repair incredibly easy.&rdquo;
                </blockquote>

                <p className="text-xs font-semibold text-zinc-400">
                  — Sarah Ahmed, FixItNow Customer
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms */}
      <FieldDescription className="px-6 text-center text-xs text-muted-foreground">
        By continuing, you agree to our{' '}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
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

export default LoginForm;

