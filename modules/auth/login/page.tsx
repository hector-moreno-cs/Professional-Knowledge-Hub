import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/modules/auth/lib/auth";

import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Knowledge Forum. Personal Project.",
};

export const LoginPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,#020617_55%)]" />

      <section className="relative z-10 w-full px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-400">
            Log in to continue.
          </p>
        </div>

        <div className="flex justify-center">
          <LoginForm />
        </div>
      </section>
    </main>
  );
};