import React from 'react';

import Heading from '../../Heading';
import Feature from './Feature/Feature';

const text1 = `Organize your book mark however you like. Our simple drag-and-drop
interface give you complete over how you manage your favourite
sites.`;
const text2 = `Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
  of your bookmarks.`;

const text3 = `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
              click of a button.`;

const headingText = `Our aim is to make it quick and easy for you to access your favourite
        website. Your bookmarks sync between your devices so you can access them
        on the go.`;

export default function Features(): React.JSX.Element {
  return (
    <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">
      <Heading title="Features" text={headingText} />

      <Feature
        positionRectangle="rectangle-left"
        marginTop={24}
        imgPath="./imgs/illustration-features-tab-1.png"
        title="Bookmark in one click"
        text={text1}
      />
      <Feature
        flex="lg:flex-row-reverse"
        positionRectangle="rectangle-right"
        marginTop={52}
        imgPath="./imgs/illustration-features-tab-2.png"
        title="Intelligent Search"
        text={text2}
      />
      <Feature
        positionRectangle="rectangle-left"
        marginTop={52}
        imgPath="./imgs/illustration-features-tab-3.png"
        title="Share your bookmarks"
        text={text3}
      />
    </section>
  );
}
