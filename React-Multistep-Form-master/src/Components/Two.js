import React, { useState } from 'react'
import { ActionButtons } from "./ActionButtons";
import { FormGroup, Label, Input } from "reactstrap";


export const Two = (props) => {

    // props -> { user: {name: ujjwal}, currentStep: 2, totalSteps: 3, userCallback: ƒ(CUSTOM), nextStep: ƒ, previousStep: ƒ, firstStep: ƒ, lastStep: ƒ }

    const [info2, setInfo2] = useState({});
    const [error, setError] = useState("");
  
    const onInputChanged = (event) => {
      const targetName = event.target.name;
      const targetValue = event.target.value;
  
      setInfo2((info2) => ({
        ...info2,
        [targetName]: targetValue
      }));
    };
  
    const validate2 = () => {
      if (!info2.age)
        setError("Age is mandatory field");
      else {
        setError("");
        props.nextStep();
        props.userCallback(info2);
      }
    };
  
    return (
      <div>
        <span style={{ color: "red" }}> {error} </span>
  
        <h1>This is step 2 content</h1>

        <FormGroup>
          <Label> Welcome <b> {props.user.name || ""} </b> </Label> 
        </FormGroup>

        <FormGroup>
          <Label>Age: </Label>
          <Input
            type="text"
            name="age"
            placeholder="Enter your age"
            onChange={onInputChanged}
          />
        </FormGroup>
        <br />

        <ActionButtons {...props} nextStep={validate2} />
      </div>
    );
  };