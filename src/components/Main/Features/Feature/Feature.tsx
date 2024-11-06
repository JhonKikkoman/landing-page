import React from 'react';

interface IProp {
  flex?: 'lg:flex-row-reverse' | 'lg:flex-row';
  positionRectangle: 'rectangle-right' | 'rectangle-left';
  marginTop: 24 | 52;
  title: string;
  text: string;
  imgPath: string;
}

export default function Feature({
  flex,
  positionRectangle,
  marginTop,
  title,
  text,
  imgPath,
}: IProp): React.JSX.Element {
  return (
    <div className={`relative mt-20 lg:mt-${marginTop}`}>
      <div
        className={`container flex  ${flex} items-center justify-center gap-x-24`}
      >
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={imgPath}
            alt="features-tab-1"
          />
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-bookmark-blue">{title}</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            {text}
          </p>
          <button
            type="button"
            className="btn btn-purple hover:bg-bookmark-white hover:text-black"
          >
            More Info
          </button>
        </div>
      </div>
      <div className={`${positionRectangle}`}></div>
    </div>
  );
}
