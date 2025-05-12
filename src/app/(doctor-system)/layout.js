import QueryProvider from '@/components/QueryClientProvider';
import '../globals.css';
import HeaderUser from '@/components/system-user/HeaderUser';
import NavbarSistem from '@/components/system-user/NavbarSistem';
import FooterSistem from '@/components/system-user/FooterSistem';

export const metadata = {
  title: 'Dashboard Dokter',
};

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      {' '}
      <div className="layanan-parent-styling">
        <header className="layanan-header-layout-container">
          <HeaderUser />
        </header>
        <aside className="layanan-aside-container">
          <NavbarSistem />
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
