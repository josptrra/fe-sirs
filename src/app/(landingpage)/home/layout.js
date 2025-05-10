import QueryProvider from '@/components/QueryClientProvider';
import '../../globals.css';

export default function RootLayout({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
