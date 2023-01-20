import React from 'react';
import './App.css';
import CurrencySelection from "./Components/CurrencySelection";

function App() {
  return (
      <div className="h-[99vh] w-[100vw] flex-grow">
          <div className="h-[66vh] text-center">
              Ici la sélection des produits
          </div>
          <div className={"h-[33vh] text-center"}>
              <CurrencySelection number={"1"} />
              <CurrencySelection number={"2"} />
              <CurrencySelection number={"3"} />
          </div>
      </div>
  );
}

export default App;
