import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-bookmark-blue py-8">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <img src="./imgs/logo-bookmark-white.png" alt="logo-bookmark" />
          <ul className="flex text-white uppercase gap-12 text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contacs</li>
          </ul>
        </div>
        <div className="flex gap-10 mt-12 md:mt-0">
          <FontAwesomeIcon
            icon={faTwitter}
            fontSize="17px"
            color="white"
            className="hover:text-red-900 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            fontSize="17px"
            color="white"
            className="hover:text-red-900 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}
