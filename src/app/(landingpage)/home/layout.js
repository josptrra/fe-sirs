import QueryProvider from '@/components/QueryClientProvider';
import '../../globals.css';

export const metadata = {
  title: 'Rumah Sakit FASILKOM',
};

export default function RootLayout({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
