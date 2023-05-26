import React from 'react';
import { ActionButtons } from "./ActionButtons";

export const Three = (props) => {

     // props -> { user: {name: ujjwal, age: 25}, currentStep: 3, totalSteps: 3, completeCallback: ƒ(CUSTOM), nextStep: ƒ, previousStep: ƒ, , firstStep: ƒ, lastStep: ƒ }

    console.log("step3 received final user object");
    console.log(props.user); // { name: ujjwal, age: 25}
  
    const handleLastStep = () => {
      props.lastStep();
      props.completeCallback();
    };
  
    return (
      <div>
        <h2>Summary user detail</h2>
        <p>Name: {props.user.name}</p>
        <p>Age: {props.user.age}</p>
        <br />
        <ActionButtons {...props} lastStep={handleLastStep} />
      </div>
    );
  };
  