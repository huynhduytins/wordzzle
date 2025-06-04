export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex flex-col min-h-screen bg-base">
      <div className="flex flex-col flex-1 w-full max-w-2xl px-5 pt-4 mx-auto">
        <div className="relative flex flex-col items-center justify-center flex-1 w-full mx-auto space-y-4 overflow-hidden border border-border rounded-xl bg-elevated">
          {children}
        </div>
      </div>
      <footer className="px-5 py-2">
        <p className="text-sm text-center text-text">
          <a
            href="https://github.com/huynhduytins/wordzzle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            wordzzle
          </a>{' '}
          by{' '}
          <a
            href="https://github.com/huynhduytins"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            hduytins
          </a>
        </p>
      </footer>
    </main>
  )
}
