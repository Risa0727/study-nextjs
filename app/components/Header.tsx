export function Header() {
  return (
    <header className="w-full bg-white dark:bg-black border-b border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center px-16">
        <h1 className="text-lg font-semibold text-black dark:text-zinc-50">
          My Site
        </h1>

        <nav className="ml-auto flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}