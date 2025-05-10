import QueryProvider from '@/components/QueryClientProvider';
import '../../globals.css';

export const metadata = {
  title: 'Dashboard',
};

export default function RootLayout({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
