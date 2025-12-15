import { useEffect, useState } from "react";
import AppActionButton from "./AppActionButton";
import AppCalculationHistory from "./AppCalculationHistory";

export default function AppCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [compareMsg, setCompareMsg] = useState("");
  const [history, setHistory] = useState([]);

  const inputsValid = a !== "" && b !== "";

  useEffect(() => {
    if (!inputsValid) {
      setCompareMsg("");
      return;
    }

    const numA = Number(a);
    const numB = Number(b);

    if (numA > numB) setCompareMsg("Liczba A jest większa od liczby B");
    else if (numA < numB) setCompareMsg("Liczba A jest mniejsza od liczby B");
    else setCompareMsg("Liczba A jest równa liczbie B");// eslint-disable-next-line
  }, [a, b]);

  const calculate = (operation) => {
    const numA = Number(a);
    const numB = Number(b);
    let res;

    if (operation === "/" && numB === 0) {
      alert("Dzielenie przez zero jest zabronione!");
      return;
    }

    switch (operation) {
      case "+": res = numA + numB; break;
      case "-": res = numA - numB; break;
      case "*": res = numA * numB; break;
      case "/": res = numA / numB; break;
      default: return;
    }

    setResult(res);
    setHistory(prev => [...prev, { a: numA, b: numB, operation, result: res }]);
  };

  const restoreFromHistory = (index) => {
    const item = history[index];
    setA(item.a);
    setB(item.b);
    setResult(item.result);
    setHistory(history.slice(0, index + 1));
  };

  return (
    <div className="card p-4 shadow">
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">A</label>
          <input
            type="number"
            className="form-control"
            value={a}
            onChange={e => setA(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">B</label>
          <input
            type="number"
            className="form-control"
            value={b}
            onChange={e => setB(e.target.value)}
          />
        </div>

        <div className="d-flex gap-2">
          <AppActionButton label="+" onClick={() => calculate("+")} disabled={!inputsValid} />
          <AppActionButton label="-" onClick={() => calculate("-")} disabled={!inputsValid} />
          <AppActionButton label="*" onClick={() => calculate("*")} disabled={!inputsValid} />
          <AppActionButton label="/" onClick={() => calculate("/")} disabled={!inputsValid} />
        </div>

        <div className="col-12">
          <label className="form-label">Wynik</label>
          <input className="form-control" value={result} readOnly />
        </div>

        <div className="col-12">
          <input className="form-control" value={compareMsg} readOnly />
        </div>
      </div>

      <AppCalculationHistory history={history} onRestore={restoreFromHistory} />
    </div>
  );
}
