import QueryProvider from '@/components/QueryClientProvider';

export const metadata = {
  title: 'Masuk akun',
};

export default function RootLayout({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
