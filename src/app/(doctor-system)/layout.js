import QueryProvider from '@/components/QueryClientProvider';
import '../globals.css';
import FooterSistem from '@/components/system-user/FooterSistem';
import HeaderDoctor from '@/components/system-user/HeaderDoctor';
import NavbarSistemDoctor from '@/components/system-user/NavbarSistemDoctor';

export const metadata = {
  title: 'Dashboard Dokter',
};

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      {' '}
      <div className="layanan-parent-styling">
        <header className="layanan-header-layout-container">
          <HeaderDoctor />
        </header>
        <aside className="layanan-aside-container">
          <NavbarSistemDoctor />
        </aside>
        <main className="layanan-main-container">
          <div className="layanan-main-children-styling">{children}</div>
          <div className="w-full pt-4">
            <FooterSistem />
          </div>
        </main>
      </div>
    </QueryProvider>
  );
}
