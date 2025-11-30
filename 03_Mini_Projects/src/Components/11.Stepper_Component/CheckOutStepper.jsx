import React, { useRef, useState } from "react";

function CheckOutStepper({ stepsConfig }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const stepRef = useRef([]);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      console.log(prevStep, stepsConfig.length);

      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgessBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100 + (currentStep === stepsConfig.length ? 1 : 0);
  };
  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, idx) => {
          return (
            <div
              key={idx}
              className={`step ${
                currentStep > idx + 1 || isComplete ? "complete" : ""
              } ${currentStep === idx + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > idx + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  idx + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
        <div className="progress-bar">
          <div
            className="progress"
            style={{ 
              width: `${calculateProgessBarWidth()}%`}}
          ></div>
        </div>
      </div>
      <ActiveComponent />

      {!isComplete && (
        <button className="stepper_btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
}

export default CheckOutStepper;
