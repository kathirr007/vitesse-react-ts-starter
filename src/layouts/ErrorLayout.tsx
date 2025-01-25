import type { ReactNode } from 'react';

export function ErrorLayout({ children }: Readonly<{ children: ReactNode }>) {
  useNProgress();

  return (
    <div className="flex items-center justify-center h-screen">
      {children}
    </div>
  );
}
