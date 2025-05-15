import QueryProvider from '@/components/QueryClientProvider';
import '../globals.css';
import FooterSistem from '@/components/system-user/FooterSistem';
import HeaderAdmin from '@/components/system-user/HeaderAdmin';
import NavbarSistemAdmin from '@/components/system-user/NavbarSistemAdmin';

export const metadata = {
  title: 'Dashboard Admin',
};

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      {' '}
      <div className="layanan-parent-styling">
        <header className="layanan-header-layout-container">
          <HeaderAdmin />
        </header>
        <aside className="layanan-aside-container">
          <NavbarSistemAdmin />
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
