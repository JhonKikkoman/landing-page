import React from 'react';

interface IProps {
  title: string;
  tip: string;
  styleMargin: string;
  imgPath: string;
}

export default function Card({
  title,
  tip,
  styleMargin,
  imgPath,
}: IProps): React.JSX.Element {
  return (
    <div
      className={`flex flex-col rounded-md shadow-md ${styleMargin} transition duration-500 hover:scale-105`}
    >
      <div className="p-6 flex flex-col  items-center">
        <img src={imgPath} alt="logo" />
        <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">{title}</h3>
        <p className="mb-2 text-bookmark-grey font-light">{tip}</p>

        <hr className="border-b border-bookmark-white w-full" />
        <div className="flex p-6">
          <button
            type="button"
            className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
          >
            Add & Install Extension
          </button>
        </div>
      </div>
    </div>
  );
}
