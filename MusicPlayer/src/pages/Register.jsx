import React from "react";

const Register = () => {
  return (
    <main className="relative flex h-screen w-full flex-col items-center overflow-x-hidden bg-[#100f12] px-4 py-10 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_8%,rgba(119,65,190,0.32),transparent_48%),radial-gradient(ellipse_at_82%_100%,rgba(69,33,91,0.13),transparent_42%)]"
      />

      <header className="relative z-10 mb-4 text-center">
        <h1 className="text-xl font-bold tracking-tight text-violet-300">
          MusicHub
        </h1>
        <p className="mt-1 text-xs text-zinc-300">Join the sound revolution.</p>
      </header>

      <section
        aria-label="Create your MusicHub account"
        className="relative z-10 w-full max-w-md rounded-xl border border-white/[0.04] bg-[#1b1a1d]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.38)] sm:p-6"
      >
        <div className="mb-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            aria-pressed="true"
            className="flex h-14 flex-col items-center justify-center gap-1 rounded-md border border-violet-500/70 bg-violet-500/[0.08] text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.13)]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M12 3v12.1a3.5 3.5 0 1 1-2-3.16V6.2l9-2.25v8.15a3.5 3.5 0 1 1-2-3.16V3.2L12 4.95V3Z" />
            </svg>
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
              Listener
            </span>
          </button>
          <button
            type="button"
            aria-pressed="false"
            className="flex h-14 flex-col items-center justify-center gap-1 rounded-md border border-white/[0.08] bg-[#19181b] text-zinc-400 transition-colors hover:border-white/20"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
              strokeWidth="1.8"
            >
              <rect x="9" y="3" width="6" height="12" rx="3" />
              <path d="M6 11a6 6 0 0 0 12 0M12 17v4m-4 0h8" />
            </svg>
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
              Artist
            </span>
          </button>
        </div>

        <form className="space-y-2" aria-label="Registration form">
          <label className="flex h-10 items-center gap-2.5 rounded-full border border-white/[0.12] bg-[#101012] px-3 text-zinc-500 focus-within:border-violet-400/70">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 fill-current"
            >
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
            </svg>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              aria-label="Full name"
              className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-zinc-600"
            />
          </label>

          <label className="flex h-10 items-center gap-2.5 rounded-full border border-white/[0.12] bg-[#101012] px-3 text-zinc-500 focus-within:border-violet-400/70">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 fill-none stroke-current"
              strokeWidth="1.8"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15.5 15.5 4 4M8.5 13v-5h2.2a1.7 1.7 0 0 1 0 3.4H8.5" />
            </svg>
            <input
              type="text"
              name="username"
              placeholder="Username"
              aria-label="Username"
              className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-zinc-600"
            />
          </label>

          <label className="flex h-10 items-center gap-2.5 rounded-full border border-white/[0.12] bg-[#101012] px-3 text-zinc-500 focus-within:border-violet-400/70">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 fill-none stroke-current"
              strokeWidth="1.8"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-zinc-600"
            />
          </label>

          <div className="grid grid-cols-2 gap-2">
            <label className="flex h-10 min-w-0 items-center gap-2 rounded-full border border-white/[0.12] bg-[#101012] px-3 text-zinc-500 focus-within:border-violet-400/70">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 fill-none stroke-current"
                strokeWidth="1.8"
              >
                <rect x="5" y="10" width="14" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" />
              </svg>
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-zinc-600"
              />
            </label>
            <label className="flex h-10 min-w-0 items-center gap-2 rounded-full border border-white/[0.12] bg-[#101012] px-3 text-zinc-500 focus-within:border-violet-400/70">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 fill-none stroke-current"
                strokeWidth="1.8"
              >
                <path d="M20 11.5a8 8 0 1 1-2.34-5.66L20 8.2" />
                <path d="M20 4v4.5h-4.5M8.5 12l2.2 2.2 4.8-5" />
              </svg>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm"
                aria-label="Confirm password"
                className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-zinc-600"
              />
            </label>
          </div>

          <label className="flex items-start gap-2 px-1 pt-1 text-[10px] leading-4 text-zinc-400">
            <input
              type="checkbox"
              name="terms"
              className="mt-0.5 h-3 w-3 shrink-0 accent-violet-500"
            />
            <span>
              I agree to the{" "}
              <a href="#" className="font-semibold text-violet-300">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="font-semibold text-violet-300">
                Privacy Policy
              </a>
              .
            </span>
          </label>

          <button
            type="button"
            className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-300 via-violet-500 to-purple-700 text-xs font-bold text-[#21102f] shadow-[0_5px_18px_rgba(139,92,246,0.28)] transition brightness-105"
          >
            Register
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 fill-none stroke-current"
              strokeWidth="2"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
        </form>

        <p className="mt-4 text-center text-[11px] text-zinc-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="ml-1 font-semibold text-violet-300 hover:text-violet-200"
          >
            Login
          </a>
        </p>
      </section>

      <div
        aria-hidden="true"
        className="relative z-10 mt-6 flex items-center gap-5 text-zinc-600"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-none stroke-current"
          strokeWidth="1.8"
        >
          <rect x="6" y="2.5" width="12" height="19" rx="2" />
          <circle cx="12" cy="8" r="2" />
          <path d="M10 15h4m-4 3h4" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-none stroke-current"
          strokeWidth="1.8"
        >
          <path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13h4v7H6a2 2 0 0 1-2-2v-5Zm16 0h-4v7h2a2 2 0 0 0 2-2v-5Z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-none stroke-current"
          strokeWidth="1.8"
        >
          <path d="M4 7h16v13H4zM4 11h16M7 4l10-2" />
          <circle cx="8" cy="15" r="1" />
          <path d="M12 15h5m-5 3h5" />
        </svg>
      </div>
    </main>
  );
};

export default Register;
