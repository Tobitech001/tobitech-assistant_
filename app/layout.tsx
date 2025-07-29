// app/layout.tsx
export const metadata = {
  title: 'TOBI TECH Assistant',
  description: 'Your AI Assistant for Social Media Automation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
