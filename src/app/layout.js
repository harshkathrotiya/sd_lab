import './globals.css'

export const metadata = {
  title: 'System Design Lab',
  description: 'Research in System Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}