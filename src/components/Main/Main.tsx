import React from 'react';

import ContactUs from './ContactUs';
import DownloadSection from './DownloadSection';
import FaqSection from './FaqSection';
import Features from './Features';
import Hero from './Hero';

export default function Main(): React.JSX.Element {
  return (
    <main>
      <Hero />
      <Features />
      <DownloadSection />
      <FaqSection />
      <ContactUs />
    </main>
  );
}
