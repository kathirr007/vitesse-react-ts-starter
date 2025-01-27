import type { ReactNode } from 'react';
import { useNProgress } from '@/hooks/useNprogress';
import { memo } from 'react';

const HomeLayout = memo(({ children }: Readonly<{ children: ReactNode }>) => {
  useNProgress();

  return (
    <>
      <Header />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </>
  );
});

export { HomeLayout };
