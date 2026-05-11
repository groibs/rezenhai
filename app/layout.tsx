import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rezenhaí — Chama, envia, acontece',
  description: 'Crie um convite, mande o link e veja quem vai.',
  icons: {
    icon: '/brand/fav-icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
