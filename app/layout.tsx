import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Jahid Hasan | Software Engineer",
  description: "Portfolio website for Md Jahid Hasan, software engineer focused on web applications and AI workflows.",
};

const themeInitScript = `
(() => {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;
  const saved = window.localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light';

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
