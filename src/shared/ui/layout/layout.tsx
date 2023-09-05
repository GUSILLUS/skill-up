import { Header } from '../header';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center gap-5 p-3 md:p-8 h-full">{children}</main>
    </>
  );
}
