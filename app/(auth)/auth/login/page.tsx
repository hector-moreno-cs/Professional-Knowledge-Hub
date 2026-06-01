// app/(auth)/login/page.tsx

// import { LoginPage } from "@/modules/auth/login/page";

export default function LoginRoute() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,#020617_55%)]" />

      {/* Content */}
      <section className="relative z-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Login Route
        </h1>

        <p className="mt-4 text-slate-400">
          Your authentication module will be rendered here.
        </p>

        {/* <LoginPage /> */}
      </section>
    </main>
  );
}
