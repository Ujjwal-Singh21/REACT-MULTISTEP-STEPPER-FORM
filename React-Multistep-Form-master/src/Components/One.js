import React, { useState } from 'react'
import { ActionButtons } from "./ActionButtons";
import { FormGroup, Label, Input } from "reactstrap";

export const One = (props) => {

    //{currentStep: 1, totalSteps: 3, userCallback: ƒ.., nextStep: ƒ, previousStep: ƒ, firstStep: ƒ, lastStep: ƒ }
    console.log('One Props >>', props)

    const [info1, setInfo1] = useState({});
    const [error, setError] = useState("");
  
    const onInputChanged = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
  
      setInfo1((info1) => (
        {
          ...info1,
          [targetName]: targetValue
        }
       )
      );
    };
  
    const validate = () => {
      if (!info1.name) 
        setError("Name is mandatory field");
      else {
        setError("");
        props.nextStep();
        props.userCallback(info1);
      }
    };
  
    return (
      <div>
        <span style={{ color: "red" }}>{error}</span>
  
        <h1>This is step 1 content</h1>
  
        <FormGroup>
          <Label>Name: </Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={onInputChanged}
          />
        </FormGroup>
  
        <br />
  
        <ActionButtons {...props} nextStep={validate} />
      </div>
    );
  };
  