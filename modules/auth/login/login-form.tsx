"use client";



export const LoginForm = () => {
  return (
    <form className="flex w-full max-w-md flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="text-sm font-medium text-slate-200"
        >
          Username
        </label>

        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-white outline-none transition focus:border-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-200"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-white outline-none transition focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-500"
      >
        Log In
      </button>
    </form>
  );
}