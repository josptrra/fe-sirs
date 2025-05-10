import QueryProvider from '@/components/QueryClientProvider';

export const metadata = {
  title: 'Daftar Akun',
};

export default function RootLayout({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
