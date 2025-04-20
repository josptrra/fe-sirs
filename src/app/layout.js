import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/components/QueryClientProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="mx-auto w-full">
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  );
}
