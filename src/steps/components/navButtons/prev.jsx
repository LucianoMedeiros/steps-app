import React from 'react';
import { connect } from 'react-redux';
import { changeStep } from '../../../store/actions/stepsActions';

import { Button } from '@material-ui/core';

const ButtonPrev = (props) => {
  const { step } = props;
  const customClick = props.onClick || (() => true);
  function prevStep() {
    const ret = customClick();
    if (ret) props.changeStep(step - 1);
  }
  return <Button onClick={prevStep}>{props.children}</Button>;
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
export default connect(mapStateToProps, mapDispatchToProps)(ButtonPrev);
