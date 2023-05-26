import React from 'react'
import { Row, Col, Button } from "reactstrap";

export const ActionButtons = (props) => {
  
    const handleBack = () => {
      props.previousStep(); // validate1 from One
    };
  
    const handleNext = () => {
      props.nextStep(); // validate2 from Two
    };
  
    const handleFinish = () => {
      props.lastStep(); // from Three
    };
  
    return (
      <div>
        <Row>
            {
              props.currentStep > 1 && (
                <Col>
                  <Button onClick={handleBack}> Back </Button>
                </Col>
              )
            }

          <Col>
            {
              props.currentStep < props.totalSteps && (
                <Button onClick={handleNext}> Next </Button>
              )
            }

            {
              props.currentStep === props.totalSteps && (
                <Button onClick={handleFinish}> Finish </Button>
              )
            }
          </Col>
        </Row>
      </div>
    );
  };
  