/** @format */
import React from 'react';

import Footer from './Footer';
import Main from './Main';
import NavBar from './NavBar';

function App(): React.JSX.Element {
  return (
    <div className="font-Poppins">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
