import { useState } from "react";
import "./style.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = (_) => {
    if (step < 3) setStep(step + 1);
  };
  const handlePrevious = (_) => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <button className="displayCard" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="container">
          <div className="numbers">
            <span className={step >= 1 ? "active" : ""}>1</span>
            <span className={step >= 2 ? "active" : ""}>2</span>
            <span className={step >= 3 ? "active" : ""}>3</span>
          </div>
          <div>
            <h3>
              Step {step} : {messages[step - 1]}
            </h3>
          </div>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈 </span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span> 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ text, bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
