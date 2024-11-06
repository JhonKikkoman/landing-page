import React from 'react';

import Heading from '../../Heading';
import Card from './Card';

const headingText = `We’ve got more browsers in the pipeline. 
        Please do let us know if you’ve got a favourite you’d like us to prioritize.`;

export default function DownloadSection(): React.JSX.Element {
  return (
    <section className="py-20 mt-20">
      <Heading title="Download the extension" text={headingText} />
      <div className="container grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        <Card
          title="Add to Chrome"
          tip="Minimum version 62"
          styleMargin="lg:mb-16"
          imgPath="./imgs/logo-chrome.svg"
        />
        <Card
          title="Add to Firefox"
          tip="Minimum version 53"
          styleMargin="lg:my-8"
          imgPath="./imgs/logo-firefox.svg"
        />
        <Card
          title="Add to Opera"
          tip="Minimum version 40"
          styleMargin="lg:mt-16"
          imgPath="./imgs/logo-opera.svg"
        />
      </div>
    </section>
  );
}
