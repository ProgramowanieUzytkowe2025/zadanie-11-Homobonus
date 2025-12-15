import React, { useState } from 'react';
import AppHeader from "./components/AppHeader";
import AppCalculator from "./components/AppCalculator";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AppCalculationHistory (dodaj, gdy będziesz gotowy na historię)

export default function App() {
    // Stan globalnej czcionki
    const [globalFontSize, setGlobalFontSize] = useState("font-medium");
    console.log(globalFontSize)
    return (
      <div className={`container my-4 `} style={{ fontSize: `${globalFontSize}px` }}>
        <AppHeader 
            author="Mikołaj Manowski" 
            setGlobalFontSize={setGlobalFontSize} // Przekazanie funkcji do zmiany stanu
            currentSize={globalFontSize} // Przekazanie aktualnego rozmiaru
        />
        <AppCalculator />
      </div>
    );
}