// app/layout.tsx
export const metadata = {
  title: "TOBI TECH Assistant",
  description: "AI assistant system for content, ads, tasks, and automation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
