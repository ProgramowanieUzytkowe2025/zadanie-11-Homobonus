import React from "react";

// Komponent AppHeader - teraz przyjmuje funkcje do zmiany globalnego stanu
export default function AppHeader({ author, setGlobalFontSize, currentSize }) {
  return (
    <div className="text-center mb-4">
      <h1>Kalkulator React</h1>
      <p className="text-muted">{author}</p>

      <div className="d-flex justify-content-center gap-3">
        <button 
            className={`btn btn-outline-primary fs-6 ${currentSize === '12' ? 'active' : ''}`} 
            onClick={() => setGlobalFontSize("12")}
        >
            A
        </button>
        <button 
            className={`btn btn-outline-primary fs-4 ${currentSize === '24' ? 'active' : ''}`} 
            onClick={() => setGlobalFontSize("24")}
        >
            A
        </button>
        <button 
            className={`btn btn-outline-primary fs-1 ${currentSize === '36' ? 'active' : ''}`} 
            onClick={() => setGlobalFontSize("36")}
        >
            A
        </button>
      </div>
    </div>
  );
}