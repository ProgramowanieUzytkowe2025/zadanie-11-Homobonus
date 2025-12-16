import React, { useState } from 'react';
import AppHeader from "./components/AppHeader";
import AppCalculator from "./components/AppCalculator";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    // Stan globalnej czcionki
    const [globalFontSize, setGlobalFontSize] = useState("font-medium");
    console.log(globalFontSize)
    return (
      <div className={`container my-4 `} style={{ fontSize: `${globalFontSize}px` }}>
        <AppHeader 
            author="Mikołaj Manowski" 
            setGlobalFontSize={setGlobalFontSize} 
            currentSize={globalFontSize} 
        />
        <AppCalculator />
      </div>
    );
}