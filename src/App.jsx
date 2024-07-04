import React from 'react';
import './index.css';
import askArbLogo from './assets/AskArb.png'; // Make sure to add your logo to the assets folder
import daoMasonsLogo from './assets/daomasons.png'; // Add the DAO Masons logo to the assets folder

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <img src={askArbLogo} alt="Ask ARB Logo" className="w-48 h-48 mb-8" />
      <p className="mt-4 text-2xl text-center max-w-md">
        A new way to gather signal and supercharge voting for Arbitrum DAO.
      </p>
      <p className="mt-2 text-xl text-center max-w-md">
        Coming soon...
      </p>
      <div className="mt-8">
        <a href="https://x.com/AskArbitrum" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Follow us on X
        </a>
      </div>
      <footer className="absolute bottom-4 flex items-center">
        <img src={daoMasonsLogo} alt="DAO Masons Logo" className="w-12 h-12 mr-2" />
        <p className="text-center">
          A product of <a href="https://daomasons.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">DAO Masons</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
