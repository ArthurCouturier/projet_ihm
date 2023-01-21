import React from 'react';
import './App.css';
import CurrencySelection from "./Components/CurrencySelection";

function App() {
  return (
      <div className="h-[100vh] w-[100vw] flex-grow bg-slate-800 text-zinc-400">
          <div className="h-[66vh] text-center">
              Ici la sélection des produits
          </div>
          <div className={"h-[33vh] text-center"}>
              <CurrencySelection desc={"Devise du prix: "} />
              <CurrencySelection desc={"Devise de paiement: "} />
              <CurrencySelection desc={"Devise de rendu: "} />
          </div>
      </div>
  );
}

export default App;
