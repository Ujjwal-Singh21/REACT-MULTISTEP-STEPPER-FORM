import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import StepWizard from "react-step-wizard";
import { One } from "./One";
import { Two } from "./Two";
import { Three } from "./Three";
import './Sample.css'

const Sample = () => {

  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You are done. TQ");
  };

  return (
    <div>
     
     <div style={{border: '0px solid blue', backgroundColor: '#2E4765', color: 'white', marginLeft: '200px', marginRight: '200px', marginTop: '50px'}}>
       <Stepper activeStep={activeStep}>
          {/* <Step label="Step - 1: Enter Name" children={<MdDescription />} /> */}
          <Step label="Step - 1: Enter Name" />
          <Step label="Personal Detail" />
          <Step label="Confirmation" />
        </Stepper>
     </div>

      {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <One userCallback={assignUser} />
        <Two user={user} userCallback={assignUser} />
        <Three user={user} completeCallback={handleComplete} />
      </StepWizard>
    </div>
  );
};

export default Sample;
