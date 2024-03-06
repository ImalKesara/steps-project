import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    // alert("Next");
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step === 1 ? "active" : ""}`}>1</div>
        <div className={`${step === 2 ? "active" : ""}`}> 2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">{messages[step - 1]}</p>

      <div className="buttons">
        <button
          style={{ color: "white", background: "#7047f0" }}
          onClick={handlePrevious}
        >
          Pre
        </button>
        <button
          style={{ color: "white", background: "#7047f0" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
