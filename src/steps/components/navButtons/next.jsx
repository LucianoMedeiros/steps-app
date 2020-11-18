import React from "react";
import { connect } from "react-redux";
import { changeStep } from "../../../store/actions/stepsActions";

const ButtonNext = (props) => {
  const { step } = props;
  const customClick = props.onClick || (() => true);
  function nextStep() {
    const ret = customClick();
    if (ret) props.changeStep(step + 1);
  }
  return <button onClick={nextStep}>{props.children}</button>;
};

function mapStateToProps(state) {
  return {
    step: state.step.current,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeStep(newStep) {
      const action = changeStep(newStep);
      dispatch(action);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonNext);
