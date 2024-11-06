import React from 'react';

export default function NavBar(): React.JSX.Element {
  return (
    <header className="container">
      <nav className="flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1">
          <img src="./imgs/logo-bookmark.svg" alt="logo" />
        </div>
        <ul
          className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs
          "
        >
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contacs</li>
          <button
            type="button"
            className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase hover:shadow-md"
          >
            Login
          </button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <ul className="w-5 h-6 flex gap-1 flex-col justify-center">
            <li className="inline-block border-b-2 border-black"></li>
            <li className="inline-block border-b-2 border-black"></li>
            <li className="inline-block border-b-2 border-black"></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
