import React from "react";
import { connect } from "react-redux";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";

const renderStepsSwitch = (props) => {
  const { step } = props;
  const renderSwitch = () => {
    switch (step) {
      case 1: return <Step1 />;
      case 2: return <Step2 />;
      case 3: return <Step3 />;
      case 4: return <Step4 />;
      case 5: return <Step5 />;
      case 6: return <Step6 />;
      default: return <Step1 />;
    }
  };
  return <>{renderSwitch()}</>;
};

function mapStateToProps(state) {
  return {
    step: state.step.current,
  };
}

export default connect(mapStateToProps)(renderStepsSwitch);
