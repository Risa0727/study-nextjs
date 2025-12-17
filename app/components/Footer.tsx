export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-16 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} My Site</p>

        <nav className="flex gap-6">
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}
