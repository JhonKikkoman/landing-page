import React from 'react';

interface IProp {
  title: string;
  text: string;
}

export default function Heading({ title, text }: IProp): React.JSX.Element {
  return (
    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 className="text-3xl text-center text-bookmark-blue">{title}</h1>
      <p className="text-center text-bookmark-grey mt-4">{text}</p>
    </div>
  );
}
