import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StyledComponentsRegistry } from '../lib/registry';
import { Sidebar } from '@/components/sidebar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Viatrix Art',
  description: 'Portfolio for Viatrix Art',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Sidebar />
          <main style={{ marginLeft: '300px', padding: '24px' }}>
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
