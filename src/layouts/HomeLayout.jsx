import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useNProgress } from '@/hooks/useNprogress';
import { memo } from 'react';

const HomeLayout = memo(({ children }) => {
  useNProgress();
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
});

export default HomeLayout;
