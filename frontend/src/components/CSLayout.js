import React from 'react';
import CSHeader from './CSHeader';
import Footer from './Footer';

const CSLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-body bg-csLightGold">
      <CSHeader />
      <main className="flex-grow">
        {children}
      </main>
      <Footer csTheme={true} />
    </div>
  );
};

export default CSLayout;