"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey=""
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }
