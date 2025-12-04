import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'aihaoban,全球ai聚合',
  description: '全球AI聚合平台',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
