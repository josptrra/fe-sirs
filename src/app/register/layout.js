import QueryProvider from '@/components/QueryClientProvider';

export default function RootLayout({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
