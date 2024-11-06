import React from 'react';

import Heading from '../../Heading';

const text = `Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.`;

export default function FaqSection(): React.JSX.Element {
  return (
    <section className="bg-bookmark-white py-20">
      <div className="container">
        <Heading title="Frequently Asked Questions" text={text} />

        <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What is a Bookmark?</span>
            <span className="cursor-pointer">
              <img src="./imgs/arrow_down.svg" alt="arrow-down" />
            </span>
          </div>

          <div className="flex items-center border-b py-4">
            <span className="flex-1">How can I request a new browser?</span>
            <span className="cursor-pointer">
              <img src="./imgs/arrow_down.svg" alt="arrow-down" />
            </span>
          </div>

          <div className="flex items-center border-b py-4">
            <span className="flex-1">Is there a mobile app?</span>
            <span className="cursor-pointer">
              <img src="./imgs/arrow_down.svg" alt="arrow-down" />
            </span>
          </div>

          <div className="flex items-center border-b py-4">
            <span className="flex-1">What about other Chromium browsers?</span>
            <span className="cursor-pointer">
              <img src="./imgs/arrow_down.svg" alt="arrow-down" />
            </span>
          </div>

          <button
            type="button"
            className="flex mt-10 self-center btn btn-purple hover:bg-bookmark-white hover:text-black"
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
